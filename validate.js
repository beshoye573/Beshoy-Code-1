const fs = require('fs');
const path = require('path');
const root = __dirname;
const files = [
    'storage.js',
    'theme.js',
    'progress.js',
    'search.js',
    'search-page.js',
    'practice.js',
    'project-demos.js',
    'ui.js',
    'app.js',
    'html.js',
    'css.js',
    'javascript.js',
    'python.js',
    'projects.js',
    'challenges.js'
];

for (const file of files) {
    try {
        new Function(fs.readFileSync(file, 'utf8'));
        console.log('OK ' + file);
    } catch (error) {
        console.error('ERROR ' + file + ': ' + error.message);
        process.exitCode = 1;
    }
}

try {
    JSON.parse(fs.readFileSync('sample.json', 'utf8'));
    console.log('OK sample.json');
} catch (error) {
    console.error('ERROR sample.json: ' + error.message);
    process.exitCode = 1;
}

function checkPath(reference, sourceFile) {
    const value = String(reference || '').trim();
    if (!value || /^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(value) || value.startsWith('#')) return null;

    let pathname;
    try {
        pathname = decodeURIComponent(new URL(value, `https://audit.local/${sourceFile}`).pathname).replace(/^\/+/, '');
    } catch (error) {
        return { sourceFile, reference: value, reason: 'invalid URL' };
    }
    if (!pathname) return null;

    const segments = pathname.split('/').filter(Boolean);
    let current = root;
    for (const segment of segments) {
        let entries;
        try {
            entries = fs.readdirSync(current);
        } catch (error) {
            return { sourceFile, reference: value, reason: 'parent path missing' };
        }
        if (!entries.includes(segment)) {
            const caseMatch = entries.find((entry) => entry.toLowerCase() === segment.toLowerCase());
            return {
                sourceFile,
                reference: value,
                reason: caseMatch ? `case mismatch (actual: ${caseMatch})` : 'target missing'
            };
        }
        current = path.join(current, segment);
    }

    try {
        if (fs.statSync(current).isDirectory() && !fs.existsSync(path.join(current, 'index.html'))) {
            return { sourceFile, reference: value, reason: 'directory has no index.html' };
        }
    } catch (error) {
        return { sourceFile, reference: value, reason: 'target missing' };
    }
    return null;
}

const projectFiles = fs.readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name);
const auditErrors = [];
let auditedReferences = 0;

for (const file of projectFiles) {
    const source = fs.readFileSync(path.join(root, file), 'utf8');
    const references = [];

    if (file.endsWith('.html')) {
        for (const match of source.matchAll(/(?:^|\s)(?:href|src|action)\s*=\s*["']([^"']+)["']/gim)) {
            references.push(match[1]);
        }
    }

    if (file.endsWith('.css')) {
        for (const match of source.matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)|@import\s+["']([^"']+)["']/gi)) {
            references.push(match[1] || match[2]);
        }
    }

    if (file.endsWith('.js')) {
        for (const match of source.matchAll(/\bfetch\s*\(\s*["']([^"']+)["']/gi)) {
            references.push(match[1]);
        }
        if (!['html.js', 'css.js', 'javascript.js', 'python.js'].includes(file)) {
            for (const match of source.matchAll(/[`"']((?:\.\/)?[A-Za-z0-9_.-]+\.(?:html|css|js|json|svg|xml|png|jpe?g|webp|gif|ico|woff2?|ttf|otf|mp4|webm|mp3|wav))(?:\?[^`"']*)?[`"']/gi)) {
                references.push(match[1]);
            }
        }
    }

    if (file.endsWith('.md')) {
        for (const match of source.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
            references.push(match[1]);
        }
    }

    for (const reference of references) {
        if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/i.test(reference) || reference.startsWith('#')) continue;
        auditedReferences += 1;
        const issue = checkPath(reference, file);
        if (issue) auditErrors.push(issue);
    }
}

console.log(`PATH AUDIT: ${projectFiles.length} root files, ${auditedReferences} local references checked.`);
if (auditErrors.length) {
    auditErrors.forEach((issue) => console.error(`BROKEN PATH: ${issue.sourceFile} -> ${issue.reference} (${issue.reason})`));
    process.exitCode = 1;
} else {
    console.log('PATH AUDIT: no broken local paths or case mismatches found.');
}
