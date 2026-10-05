const PRACTICE_STORAGE_PREFIX = 'beshoy-code-practice-';
const DEFAULT_SNIPPETS = {
    html: '<h1>Hello Beshoy Code</h1>\n<p>ابدأ بكتابة HTML وشاهد النتيجة هنا.</p>\n<button onclick="this.textContent = \'تم النقر!\'">جرّبني</button>',
    css: '/* جرّب تغيير الألوان والتنسيق */\nbody {\n  font-family: Arial, sans-serif;\n  background: #f1efe8;\n  color: #24342e;\n  padding: 32px;\n}\n\nh1 { color: #d96f50; }\nbutton { padding: 10px 16px; border: 0; border-radius: 6px; background: #24342e; color: white; }',
    javascript: 'console.log("Hello Beshoy Code");\nconsole.log("2 + 3 =", 2 + 3);\n\n// جرّب تغيير القيم أو كتابة كودك الخاص',
    python: 'print("Hello Beshoy Code")\nname = "متدرب"\nprint(f"أهلًا {name}!")\n\n# اكتب كود Python الخاص بك هنا'
};

const LANGUAGE_SETTINGS = {
    html: { editor: 'محرر HTML', output: 'المعاينة', status: 'HTML', placeholder: 'اكتب HTML هنا...' },
    css: { editor: 'محرر CSS', output: 'معاينة CSS', status: 'CSS', placeholder: 'اكتب CSS هنا...' },
    javascript: { editor: 'محرر JavaScript', output: 'Console', status: 'JavaScript', placeholder: 'اكتب JavaScript هنا...' },
    python: { editor: 'محرر Python', output: 'Output', status: 'Python', placeholder: 'اكتب Python هنا...' }
};

let activePracticeLanguage = 'html';
let pyodidePromise;
let editorSaveTimer;
let practiceConsoleRunId = 0;
let practiceConsoleMessageHandler;

function getPracticeCode(language) {
    try {
        return localStorage.getItem(PRACTICE_STORAGE_PREFIX + language) ?? DEFAULT_SNIPPETS[language];
    } catch (error) {
        return DEFAULT_SNIPPETS[language];
    }
}

function savePracticeCode(language, code) {
    try {
        localStorage.setItem(PRACTICE_STORAGE_PREFIX + language, code);
        document.querySelector('[data-editor-status]').textContent = 'تم الحفظ على هذا الجهاز';
    } catch (error) {
        document.querySelector('[data-editor-status]').textContent = 'تعذر الحفظ في المتصفح';
    }
}

function updatePracticeLanguage(language) {
    activePracticeLanguage = language;
    const settings = LANGUAGE_SETTINGS[language];
    const editor = document.getElementById('practice-code');
    editor.value = getPracticeCode(language);
    syncPracticeLineNumbers();
    editor.placeholder = settings.placeholder;
    document.querySelector('[data-editor-title]').textContent = settings.editor;
    document.querySelector('[data-output-title]').textContent = settings.output;
    document.querySelector('[data-language-status]').textContent = settings.status;
    document.querySelectorAll('.language-tab').forEach((tab) => {
        const selected = tab.dataset.language === language;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-selected', String(selected));
    });
    document.getElementById('practice-preview').hidden = !['html', 'css'].includes(language);
    document.getElementById('practice-console').hidden = language !== 'javascript';
    document.getElementById('practice-python-output').hidden = language !== 'python';
    if (language === 'python') initializePyodide();
    runPracticeCode();
}

function buildPracticeDocument(language, code) {
    const baseMarkup = '<main><h1>Hello Beshoy Code</h1><p>هذه معاينة لتجربة CSS.</p><button>زر تجريبي</button><article class="sample-card"><h2>بطاقة</h2><p>عدّل التنسيق لترى التغيير.</p></article></main>';
    if (language === 'html') {
        return `<!doctype html><html lang="ar"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,sans-serif;padding:24px;color:#202b28}button{cursor:pointer}</style></head><body>${code}</body></html>`;
    }
    return `<!doctype html><html lang="ar"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial,sans-serif;margin:0;padding:24px;color:#202b28}${code}</style></head><body>${baseMarkup}</body></html>`;
}

function renderConsoleEntry(type, value) {
    const consolePanel = document.getElementById('practice-console');
    const row = document.createElement('div');
    row.className = `console-line ${type}`;
    row.textContent = value;
    consolePanel.appendChild(row);
}

function syncPracticeLineNumbers() {
    const editor = document.getElementById('practice-code');
    const lineCount = Math.max(1, editor.value.split('\n').length);
    document.querySelector('.line-gutter').textContent = Array.from({ length: lineCount }, (_, index) => index + 1).join('\n');
}

function runJavaScript(code) {
    const consolePanel = document.getElementById('practice-console');
    consolePanel.replaceChildren();
    if (practiceConsoleMessageHandler) {
        window.removeEventListener('message', practiceConsoleMessageHandler);
    }
    const runId = ++practiceConsoleRunId;
    const iframe = document.createElement('iframe');
    iframe.hidden = true;
    iframe.setAttribute('sandbox', 'allow-scripts');
    const safeCode = JSON.stringify(code).replace(/</g, '\\u003c');
    iframe.srcdoc = `<!doctype html><script>
    const send = (type, values) => parent.postMessage({ source: 'beshoy-practice-console', runId: ${runId}, type, values }, '*');
    ['log','info','warn','error'].forEach(type => console[type] = (...values) => send(type, values.map(value => { try { return typeof value === 'string' ? value : JSON.stringify(value); } catch { return String(value); } })));
    window.onerror = message => send('error', [message]);
    try { (new Function(${safeCode}))(); } catch (error) { send('error', [error.name + ': ' + error.message]); }
  <\/script>`;
    iframe.className = 'sandbox-console-frame';
    iframe.addEventListener('load', () => setTimeout(() => iframe.remove(), 1000), { once: true });
    document.body.appendChild(iframe);
    practiceConsoleMessageHandler = (event) => {
        if (event.data?.source !== 'beshoy-practice-console' || event.data.runId !== runId) return;
        const type = ['warn', 'error'].includes(event.data.type) ? event.data.type : 'log';
        renderConsoleEntry(type, (event.data.values || []).join(' '));
    };
    window.addEventListener('message', practiceConsoleMessageHandler);
    setTimeout(() => {
        if (practiceConsoleMessageHandler) {
            window.removeEventListener('message', practiceConsoleMessageHandler);
            practiceConsoleMessageHandler = null;
        }
    }, 1100);
    setTimeout(() => {
        if (!consolePanel.childElementCount) renderConsoleEntry('muted', 'تم التشغيل دون مخرجات. استخدم console.log لعرض النتائج.');
    }, 500);
}

async function initializePyodide() {
    const output = document.getElementById('practice-python-output');
    if (window.pyodide) return window.pyodide;
    if (!pyodidePromise) {
        output.replaceChildren(Object.assign(document.createElement('span'), { className: 'output-placeholder', textContent: 'جارٍ تجهيز بيئة Python لأول مرة...' }));
        pyodidePromise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js';
            script.onload = async () => {
                try {
                    window.pyodide = await loadPyodide();
                    resolve(window.pyodide);
                } catch (error) {
                    reject(error);
                }
            };
            script.onerror = () => reject(new Error('تعذر تحميل بيئة Python. تحقق من اتصال الإنترنت.'));
            document.head.appendChild(script);
        }).catch((error) => {
            pyodidePromise = null;
            throw error;
        });
    }
    return pyodidePromise;
}

async function runPython(code) {
    const output = document.getElementById('practice-python-output');
    output.replaceChildren();
    output.textContent = 'جارٍ تشغيل Python...';
    try {
        const pyodide = await initializePyodide();
        let captured = '';
        pyodide.setStdout({ batched: (text) => { captured += `${text}\n`; } });
        pyodide.setStderr({ batched: (text) => { captured += `${text}\n`; } });
        await pyodide.runPythonAsync(code);
        output.textContent = captured.trim() || 'تم التشغيل دون مخرجات. استخدم print() لعرض النتائج.';
    } catch (error) {
        output.textContent = `خطأ: ${error.message}`;
        output.classList.add('has-error');
    }
}

function runPracticeCode() {
    const code = document.getElementById('practice-code').value;
    savePracticeCode(activePracticeLanguage, code);
    document.getElementById('practice-python-output').classList.remove('has-error');
    if (activePracticeLanguage === 'html' || activePracticeLanguage === 'css') {
        const preview = document.getElementById('practice-preview');
        preview.setAttribute('sandbox', 'allow-scripts allow-forms');
        preview.srcdoc = buildPracticeDocument(activePracticeLanguage, code);
    } else if (activePracticeLanguage === 'javascript') {
        runJavaScript(code);
    } else if (activePracticeLanguage === 'python') {
        runPython(code);
    }
}

function clearPracticeCode() {
    const editor = document.getElementById('practice-code');
    editor.value = '';
    savePracticeCode(activePracticeLanguage, '');
    runPracticeCode();
    editor.focus();
}

async function copyPracticeCode(button) {
    try {
        await navigator.clipboard.writeText(document.getElementById('practice-code').value);
        button.textContent = 'تم النسخ';
    } catch (error) {
        const editor = document.getElementById('practice-code');
        editor.select();
        document.execCommand('copy');
        button.textContent = 'تم النسخ';
    }
    setTimeout(() => { button.textContent = 'نسخ'; }, 1300);
}

function initializePracticePage() {
    const editor = document.getElementById('practice-code');
    if (!editor) return;
    document.querySelectorAll('.language-tab').forEach((tab) => tab.addEventListener('click', () => updatePracticeLanguage(tab.dataset.language)));
    document.querySelector('[data-action="run"]').addEventListener('click', runPracticeCode);
    document.querySelector('[data-action="clear"]').addEventListener('click', clearPracticeCode);
    document.querySelector('[data-action="copy"]').addEventListener('click', (event) => copyPracticeCode(event.currentTarget));
    document.querySelector('[data-action="clear-output"]').addEventListener('click', () => {
        document.getElementById('practice-console').replaceChildren();
        document.getElementById('practice-python-output').textContent = 'تم مسح النتيجة.';
        document.getElementById('practice-preview').srcdoc = '';
    });
    editor.addEventListener('input', () => {
        syncPracticeLineNumbers();
        document.querySelector('[data-editor-status]').textContent = 'جارٍ الحفظ...';
        clearTimeout(editorSaveTimer);
        editorSaveTimer = setTimeout(() => savePracticeCode(activePracticeLanguage, editor.value), 250);
    });
    editor.addEventListener('keydown', (event) => {
        if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
            event.preventDefault();
            runPracticeCode();
        }
        if (event.key === 'Tab') {
            event.preventDefault();
            const start = editor.selectionStart;
            const end = editor.selectionEnd;
            editor.setRangeText('  ', start, end, 'end');
            editor.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
    const requestedLanguage = new URLSearchParams(window.location.search).get('language') || 'html';
    const language = requestedLanguage.startsWith('js') ? 'javascript' : ['html', 'css', 'javascript', 'python'].includes(requestedLanguage) ? requestedLanguage : 'html';
    updatePracticeLanguage(language);
}

document.addEventListener('DOMContentLoaded', initializePracticePage);
