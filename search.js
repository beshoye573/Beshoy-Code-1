const SEARCH_TYPE_LABELS = {
    course: 'كورس', lesson: 'درس', project: 'مشروع', challenge: 'تحدٍ',
    training: 'تدريب', service: 'خدمة', post: 'منشور'
};

const SEARCH_TYPE_ALIASES = {
    course: ['course', 'courses', 'كورس', 'كورسات', 'دورة', 'دورات'],
    lesson: ['lesson', 'lessons', 'درس', 'دروس'],
    project: ['project', 'projects', 'مشروع', 'مشاريع'],
    challenge: ['challenge', 'challenges', 'تحدي', 'تحديات'],
    training: ['training', 'تدريب', 'تدريب عملي'],
    service: ['service', 'services', 'خدمة', 'خدمات'],
    post: ['post', 'posts', 'منشور', 'منشورات']
};

const SEARCH_LANGUAGE_ALIASES = {
    html: ['html', 'لغة الويب', 'لغة بناء الصفحات', 'هيكل الصفحة', 'صفحة ويب', 'وسوم', 'عنصر', 'زرار', 'زر', 'forms', 'form', 'semantic', 'إنشاء صفحة', 'صفحة', 'موقع', 'مواقع'],
    css: ['css', 'تنسيق', 'تنسيق المواقع', 'تصميم المواقع', 'شكل الموقع', 'ألوان', 'الوان', 'الخطوط', 'خطوط', 'مظهر', 'تخطيط', 'layout', 'flexbox', 'flex', 'grid', 'responsive', 'متجاوب', 'زرار', 'زر', 'واجهة', 'مواقع'],
    javascript: ['javascript', 'java script', 'js', 'جافاسكريبت', 'جافا سكريبت', 'برمجة تفاعلية', 'تفاعل', 'موقع تفاعلي', 'حدث', 'أحداث', 'زرار', 'زر', 'click', 'event', 'تطبيق', 'ويب'],
    python: ['python', 'بايثون', 'برمجة بايثون', 'بايثون للمبتدئين', 'كود بايثون', 'script', 'سكربت']
};

const SEARCH_INTENT_ALIASES = [
    { terms: ['عايز أتعلم أعمل موقع', 'عايز اتعلم اعمل موقع', 'ازاي اعمل موقع', 'كيف أعمل موقع', 'انشاء موقع', 'بناء موقع', 'تصميم مواقع', 'تصميم موقع', 'موقع ويب', 'web development', 'frontend', 'front end'], expands: ['html', 'css', 'javascript', 'إنشاء صفحة', 'مشروع موقع', 'responsive'] },
    { terms: ['لغة الويب', 'لغات الويب', 'web language'], expands: ['html', 'css', 'javascript'] },
    { terms: ['تنسيق المواقع', 'تنسيق الموقع', 'اخلي الموقع شكله حلو', 'شكل الموقع حلو', 'تجميل الموقع', 'شكل الموقع', 'ألوان الموقع'], expands: ['css', 'تصميم المواقع', 'ألوان', 'خطوط', 'layout', 'responsive'] },
    { terms: ['برمجة تفاعلية', 'موقع تفاعلي', 'اخلي الموقع تفاعلي', 'التفاعل بالموقع'], expands: ['javascript', 'تفاعل', 'event', 'button'] },
    { terms: ['إزاي أعمل زرار', 'ازاي اعمل زرار', 'ازاي اعمل زر', 'عمل زرار', 'إنشاء زر', 'زرار'], expands: ['button', 'زر', 'html', 'css', 'javascript', 'event'] },
    { terms: ['إنشاء صفحة', 'اعمل صفحة', 'أعمل صفحة', 'صفحة ويب', 'بناء صفحة'], expands: ['html', 'css', 'semantic', 'موقع'] }
];

const SEARCH_SYNONYMS = {
    'website': ['موقع', 'صفحة ويب'], 'web': ['ويب', 'موقع'], 'site': ['موقع'],
    'button': ['زر', 'زرار'], 'buttons': ['زر', 'زرار'], 'style': ['تنسيق', 'شكل'],
    'design': ['تصميم'], 'interactive': ['تفاعلي', 'تفاعل'], 'responsive': ['متجاوب', 'هاتف'],
    'beginner': ['مبتدئ', 'أساسيات'], 'intermediate': ['متوسط'], 'advanced': ['متقدم'], 'expert': ['احترافي'],
    'lesson': ['درس'], 'course': ['كورس', 'دورة'], 'project': ['مشروع'], 'challenge': ['تحدي', 'تحدٍ'],
    'courses': ['course', 'كورس', 'دورة'], 'lessons': ['lesson', 'درس'], 'projects': ['project', 'مشروع'],
    'challenges': ['challenge', 'تحدي'], 'posts': ['post', 'منشور'], 'services': ['service', 'خدمة'],
    'learn': ['تعلم'], 'create': ['إنشاء', 'عمل'], 'build': ['بناء', 'إنشاء']
};

function searchNormalize(value) {
    return String(value ?? '')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u064B-\u065F\u0670]/g, '')
        .replace(/[أإآ]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/ة/g, 'ه')
        .replace(/[ـ\u200f\u200e]/g, '')
        .replace(/[^\p{L}\p{N}+#.-]+/gu, ' ')
        .trim();
}

function searchTokens(value) {
    return searchNormalize(value).split(/\s+/).filter((token) => token.length > 1);
}

function searchFlatten(value) {
    if (Array.isArray(value)) return value.map(searchFlatten).join(' ');
    if (value && typeof value === 'object') return Object.values(value).map(searchFlatten).join(' ');
    return String(value ?? '');
}

function getSearchableItems() {
    const results = [];
    const courses = typeof getAllCourses === 'function' ? getAllCourses() : [];
    const lessons = typeof getAllLessons === 'function' ? getAllLessons() : [];
    const coursesById = new Map(courses.map((course) => [course.id, course]));

    courses.forEach((course) => {
        const lang = course.language.toLowerCase();
        results.push({
            type: 'course', id: course.id, title: course.title, description: course.description,
            language: course.language, level: course.level,
            keywords: [...(SEARCH_LANGUAGE_ALIASES[lang] || []), 'تعلم', 'أساسيات', 'مسار', course.level],
            tags: [course.language, course.level, 'تعلم البرمجة'],
            content: searchFlatten(course.lessons), route: `course.html?courseId=${encodeURIComponent(course.id)}`
        });
    });

    lessons.forEach((lesson) => {
        const language = String(lesson.language || '').toLowerCase();
        const parentCourse = coursesById.get(lesson.courseId);
        const body = searchFlatten([lesson.explanation, lesson.examples, lesson.exercise, lesson.challenge, lesson.tips, lesson.commonMistakes, lesson.code]);
        const aliases = SEARCH_LANGUAGE_ALIASES[language] || [];
        const challenge = lesson.challenge || '';
        results.push({
            type: 'lesson', id: lesson.id, title: lesson.title, description: lesson.description,
            language: lesson.language, level: lesson.level, courseTitle: lesson.courseTitle,
            keywords: [...aliases, lesson.title, challenge, lesson.exercise || '', 'شرح', 'تطبيق عملي'],
            tags: [lesson.language, lesson.level, lesson.courseTitle, ...(lesson.tags || [])],
            content: body,
            route: `lesson.html?lessonId=${encodeURIComponent(lesson.id)}&courseId=${encodeURIComponent(lesson.courseId)}`
        });
    });

    (window.PROJECTS_DATA || []).forEach((project) => {
        results.push({
            type: 'project', id: project.id, title: project.title, description: project.description,
            language: project.language, level: project.difficulty,
            keywords: [...(project.keywords || []), ...(project.requirements || []), ...(project.steps || []), project.challenge, project.bonus, 'واجهة', 'موقع', 'تطبيق'],
            tags: [...(project.technologies || []), project.difficulty, ...(project.tags || [])],
            content: searchFlatten([project.requirements, project.steps, project.challenge, project.bonus]),
            route: `projects.html#project-${encodeURIComponent(project.id)}`
        });
    });

    (window.CHALLENGES_DATA || []).forEach((challenge) => {
        results.push({
            type: 'challenge', id: challenge.id, title: challenge.title, description: challenge.description,
            language: challenge.language, level: challenge.difficulty,
            keywords: [...(challenge.keywords || []), ...(challenge.requirements || []), challenge.hint, 'تدريب', 'تمرين'],
            tags: [challenge.language, challenge.difficulty, 'تحدي'],
            content: searchFlatten([challenge.requirements, challenge.hint]),
            route: `practice.html?language=${encodeURIComponent(challenge.language.toLowerCase())}`
        });
    });

    results.push({
        type: 'training', id: 'practice', title: 'مساحة التدريب البرمجي',
        description: 'جرّب HTML وCSS وJavaScript وPython مباشرة في المتصفح.',
        language: 'HTML, CSS, JavaScript, Python', level: '',
        keywords: ['محرر', 'تدريب', 'اكتب كود', 'شغل الكود', 'معاينة', 'console', 'pyodide'],
        tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'تدريب'],
        content: 'تشغيل الكود تجربة محرر تعليم', route: 'practice.html'
    });

    results.push(
        { type: 'service', id: 'web-services', title: 'خدمات تصميم وتطوير الويب', description: 'مواقع تعريفية وواجهات منتجات وتطوير واجهات متجاوبة.', language: 'HTML, CSS, JavaScript', keywords: ['خدمات', 'تصميم مواقع', 'تطوير مواقع', 'واجهة', 'متجاوب', 'موقع', 'ويب'], tags: ['تصميم', 'تطوير', 'Front-End'], content: 'خدمات تصميم الويب واجهات منتجات تطوير واجهات', route: 'services.html' },
        { type: 'post', id: 'post-design-clarity', title: 'Good interfaces make the next step obvious.', description: 'Clarity is not decoration. It is how a product earns trust, one useful detail at a time.', language: 'English', keywords: ['design', 'واجهة', 'وضوح', 'تجربة المستخدم'], tags: ['DESIGN', 'POSTS', 'Beshoy Eshak'], content: 'Good interfaces make the next step obvious. Clarity product trust', route: 'index.html#posts' },
        { type: 'post', id: 'post-small-interactions', title: 'Small interactions shape the whole experience.', description: 'A responsive button, a clear empty state, and a thoughtful transition can change how a product feels.', language: 'English', keywords: ['interaction', 'تفاعل', 'button', 'زر', 'responsive', 'animation'], tags: ['BUILD', 'POSTS', 'Beshoy Eshak'], content: 'Small interactions shape the whole experience responsive button empty state', route: 'index.html#posts' },
        { type: 'post', id: 'post-real-problem', title: 'Start with the real problem.', description: 'The strongest web experiences begin with understanding what people came to do.', language: 'English', keywords: ['process', 'problem', 'تجربة', 'موقع'], tags: ['PROCESS', 'POSTS', 'Beshoy Eshak'], content: 'Start with the real problem web experiences', route: 'index.html#posts' }
    );

    return results.map((item) => ({
        ...item,
        typeLabel: SEARCH_TYPE_LABELS[item.type] || item.type,
        searchText: searchNormalize([item.type, SEARCH_TYPE_LABELS[item.type], SEARCH_TYPE_ALIASES[item.type], item.title, item.description, item.language, item.level, item.keywords, item.tags, item.content].join(' ')),
        normalizedTitle: searchNormalize(item.title)
    }));
}

function expandSearchQuery(query) {
    const normalized = searchNormalize(query);
    const expanded = new Set([normalized]);
    SEARCH_INTENT_ALIASES.forEach(({ terms, expands }) => {
        if (terms.some((term) => normalized.includes(searchNormalize(term)))) {
            expands.forEach((term) => expanded.add(searchNormalize(term)));
        }
    });
    searchTokens(normalized).forEach((token) => {
        (SEARCH_SYNONYMS[token] || []).forEach((synonym) => expanded.add(searchNormalize(synonym)));
        Object.entries(SEARCH_LANGUAGE_ALIASES).forEach(([language, aliases]) => {
            if (aliases.some((alias) => searchNormalize(alias) === token)) expanded.add(language);
        });
    });
    return [...expanded].filter(Boolean);
}

function editDistance(left, right) {
    if (Math.abs(left.length - right.length) > 2) return 3;
    const row = Array.from({ length: right.length + 1 }, (_, index) => index);
    for (let i = 1; i <= left.length; i += 1) {
        let previous = row[0];
        row[0] = i;
        for (let j = 1; j <= right.length; j += 1) {
            const old = row[j];
            row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (left[i - 1] === right[j - 1] ? 0 : 1));
            previous = old;
        }
    }
    return row[right.length];
}

function matchesSearchTerm(text, term) {
    const normalizedText = searchNormalize(text);
    const normalizedTerm = searchNormalize(term);
    if (!normalizedTerm) return false;
    if (normalizedTerm.includes(' ')) return normalizedText.includes(normalizedTerm);
    return searchTokens(normalizedText).some((word) => word === normalizedTerm || (normalizedTerm.length >= 4 && word.startsWith(normalizedTerm)));
}

function scoreSearchItem(item, query, expandedQueries) {
    const normalized = searchNormalize(query);
    const title = item.normalizedTitle;
    const keywords = searchNormalize(item.keywords.join(' '));
    const description = searchNormalize(item.description);
    const metadata = searchNormalize([item.language, item.level, item.tags].join(' '));
    let score = 0;

    if (title === normalized) score += 140;
    else if (title.includes(normalized)) score += 100;
    if (searchNormalize(item.language) === normalized) score += 115;

    expandedQueries.slice(1).forEach((term) => {
        if (!term) return;
        if (matchesSearchTerm(title, term)) score += 48;
        if (matchesSearchTerm(keywords, term)) score += 36;
        if (matchesSearchTerm(description, term)) score += 22;
        if (matchesSearchTerm(metadata, term)) score += 18;
        if (matchesSearchTerm(item.searchText, term)) score += 9;
    });

    const queryTokens = searchTokens(normalized);
    queryTokens.forEach((token) => {
        if (matchesSearchTerm(title, token)) score += 28;
        if (matchesSearchTerm(keywords, token)) score += 21;
        if (matchesSearchTerm(description, token)) score += 12;
        if (matchesSearchTerm(metadata, token)) score += 11;
        if (matchesSearchTerm(item.searchText, token)) score += 4;
    });

    if (queryTokens.length > 0) {
        const titleTokens = searchTokens(title);
        const bestDistance = Math.min(...titleTokens.map((token) => editDistance(token, queryTokens[0])));
        if (bestDistance === 1 && queryTokens[0].length >= 4) score += 15;
    }

    const isSiteCreationIntent = ['عايز اتعلم اعمل موقع', 'عايز اتعلم انشاء موقع', 'ازاي اعمل موقع', 'كيف اعمل موقع', 'انشاء موقع', 'بناء موقع', 'تصميم مواقع', 'web development', 'frontend', 'front end']
        .some((term) => normalized.includes(searchNormalize(term)));
    const isVisualDesignIntent = ['تنسيق الموقع', 'تنسيق المواقع', 'اخلي الموقع شكله حلو', 'تجميل الموقع', 'شكل الموقع', 'تصميم مواقع']
        .some((term) => normalized.includes(searchNormalize(term)));
    const isInteractionIntent = ['برمجه تفاعليه', 'موقع تفاعلي', 'اخلي الموقع تفاعلي', 'التفاعل بالموقع']
        .some((term) => normalized.includes(searchNormalize(term)));
    const isButtonIntent = ['اعمل زرار', 'اعمل زر', 'عمل زرار', 'انشاء زر', 'زرار']
        .some((term) => normalized.includes(searchNormalize(term)));

    if (isSiteCreationIntent) {
        if (item.language === 'HTML') score += 42;
        if (item.language === 'CSS') score += 27;
        if (item.type === 'project') score += 28;
    }
    if (isVisualDesignIntent && item.language === 'CSS') score += 58;
    if (isVisualDesignIntent && item.type === 'project') score += 14;
    if (isInteractionIntent && item.language === 'JavaScript') score += 58;
    if (isButtonIntent && ['HTML', 'CSS'].includes(item.language)) score += 20;
    if (isButtonIntent && item.language === 'JavaScript') score += 22;

    Object.entries(SEARCH_TYPE_ALIASES).forEach(([type, terms]) => {
        if (terms.some((term) => normalized === searchNormalize(term))) score += item.type === type ? 140 : -18;
    });
    return score;
}

function searchCatalog(query, options = {}) {
    const items = getSearchableItems();
    if (!String(query || '').trim()) return items.slice(0, options.limit || 12);
    const expandedQueries = expandSearchQuery(query);
    const normalized = searchNormalize(query);
    const queryTokens = searchTokens(normalized);
    return items
        .map((item) => {
            const semanticText = [item.type, item.typeLabel, SEARCH_TYPE_ALIASES[item.type], item.title, item.description, item.language, item.level, item.keywords, item.tags].join(' ');
            const hasSemanticMatch = expandedQueries.slice(1).some((term) => matchesSearchTerm(semanticText, term))
                || queryTokens.some((token) => matchesSearchTerm(semanticText, token));
            const hasTypoMatch = queryTokens.length === 1 && queryTokens[0].length >= 4
                && searchTokens(semanticText).some((word) => editDistance(word, queryTokens[0]) === 1);
            return { ...item, score: scoreSearchItem(item, query, expandedQueries), hasSemanticMatch: hasSemanticMatch || hasTypoMatch };
        })
        .filter((item) => item.score >= 8 && item.hasSemanticMatch)
        .sort((left, right) => right.score - left.score || left.title.localeCompare(right.title))
        .slice(0, options.limit || 80);
}

function escapeSearchHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function renderSearchResults(query, containerId) {
    const results = searchCatalog(query);
    const container = document.getElementById(containerId);
    if (!container) return;
    if (!results.length) {
        container.innerHTML = '<p class="thin-text">لا توجد نتائج مطابقة.</p>';
        return;
    }
    container.innerHTML = results.slice(0, 8).map((item) => `
        <a class="search-item" href="${escapeSearchHtml(item.route)}">
            <span><strong>${escapeSearchHtml(item.title)}</strong><small>${escapeSearchHtml(item.typeLabel)} · ${escapeSearchHtml(item.language || '')}</small></span>
            <span class="search-item-arrow" aria-hidden="true">←</span>
        </a>
    `).join('');
}

function readSearchHistory() {
    try { return JSON.parse(localStorage.getItem('beshoy-code-search-history') || '[]'); }
    catch (error) { return []; }
}

function saveSearchHistory(query) {
    const value = String(query || '').trim();
    if (value.length < 2) return readSearchHistory();
    const history = [value, ...readSearchHistory().filter((item) => searchNormalize(item) !== searchNormalize(value))].slice(0, 8);
    try { localStorage.setItem('beshoy-code-search-history', JSON.stringify(history)); } catch (error) { return history; }
    return history;
}

function clearSearchHistory() {
    try { localStorage.removeItem('beshoy-code-search-history'); } catch (error) { return; }
}

function renderQuickSearch(query, root) {
    const popover = root.querySelector('.quick-search-popover');
    if (!popover) return;
    const results = searchCatalog(query, { limit: 5 });
    const listMarkup = results.length
        ? results.map((item) => `<a class="quick-result" href="${escapeSearchHtml(item.route)}"><span><strong>${escapeSearchHtml(item.title)}</strong><small>${escapeSearchHtml(item.typeLabel)} · ${escapeSearchHtml(item.language || '')}</small></span><b aria-hidden="true">↖</b></a>`).join('')
        : '<p class="quick-empty">لم نجد تطابقًا مباشرًا، جرّب موضوعًا قريبًا.</p>';
    const allHref = `search.html?q=${encodeURIComponent(query || '')}`;
    popover.innerHTML = `<div class="quick-results-list">${listMarkup}</div><a class="quick-all-results" href="${allHref}">عرض كل النتائج <span>←</span></a>`;
    popover.hidden = false;
}

function initQuickSearch() {
    const input = document.getElementById('global-search-input');
    if (!input) return;
    const root = input.closest('.search-mini')?.parentElement;
    if (!root) return;
    input.addEventListener('input', () => {
        const query = input.value.trim();
        if (query.length < 1) {
            const popover = root.querySelector('.quick-search-popover');
            if (popover) popover.hidden = true;
            return;
        }
        renderQuickSearch(query, root);
    });
    input.addEventListener('focus', () => {
        if (input.value.trim()) renderQuickSearch(input.value.trim(), root);
    });
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            saveSearchHistory(input.value);
            window.location.href = `search.html?q=${encodeURIComponent(input.value.trim())}`;
        }
        if (event.key === 'Escape') {
            const popover = root.querySelector('.quick-search-popover');
            if (popover) popover.hidden = true;
        }
    });
    root.addEventListener('click', (event) => {
        if (event.target.closest('.quick-result, .quick-all-results')) saveSearchHistory(input.value);
    });
    document.addEventListener('click', (event) => {
        if (!root.contains(event.target)) {
            const popover = root.querySelector('.quick-search-popover');
            if (popover) popover.hidden = true;
        }
    });
}

window.searchCatalog = searchCatalog;
window.renderSearchResults = renderSearchResults;
window.getSearchableItems = getSearchableItems;
window.saveSearchHistory = saveSearchHistory;
window.readSearchHistory = readSearchHistory;
window.clearSearchHistory = clearSearchHistory;
window.initQuickSearch = initQuickSearch;
