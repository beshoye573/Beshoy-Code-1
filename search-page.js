const SEARCH_PAGE_STATE = { query: '', type: 'all', language: 'all', level: 'all' };
let searchHistoryTimer;

function renderSearchCard(item) {
    const level = item.level ? `<span class="result-level">${escapeSearchHtml(item.level)}</span>` : '';
    const language = item.language ? `<span class="result-language">${escapeSearchHtml(item.language)}</span>` : '';
    const tags = (item.tags || []).slice(0, 4).map((tag) => `<span class="result-tag">${escapeSearchHtml(tag)}</span>`).join('');
    const action = item.type === 'project' ? 'View Project' : item.type === 'post' ? 'قراءة المنشور' : 'فتح المحتوى';
    const relevance = item.score >= 160 ? 'مطابقة مباشرة' : item.score >= 80 ? 'صلة قوية' : item.score >= 30 ? 'صلة جيدة' : 'اقتراح قريب';
    return `<article class="search-result-card"><div class="result-card-top"><span class="result-type">${escapeSearchHtml(item.typeLabel)}</span><span class="result-score">${relevance}</span></div><h3>${escapeSearchHtml(item.title)}</h3><p>${escapeSearchHtml(item.description)}</p><div class="result-meta">${language}${level}</div><div class="result-tags">${tags}</div><a class="result-open" href="${escapeSearchHtml(item.route)}">${action}<span aria-hidden="true">←</span></a></article>`;
}

function updateSearchResults() {
    const results = searchCatalog(SEARCH_PAGE_STATE.query, { limit: 120 }).filter((item) => {
        const typeMatches = SEARCH_PAGE_STATE.type === 'all' || item.type === SEARCH_PAGE_STATE.type;
        const languageAliases = { HTML: ['html'], CSS: ['css'], JavaScript: ['javascript', 'js'], Python: ['python'] };
        const languageMatches = SEARCH_PAGE_STATE.language === 'all'
            || (languageAliases[SEARCH_PAGE_STATE.language] || [searchNormalize(SEARCH_PAGE_STATE.language)])
                .some((alias) => searchTokens(item.language).includes(alias));
        const levelMatches = SEARCH_PAGE_STATE.level === 'all' || item.level === SEARCH_PAGE_STATE.level;
        return typeMatches && languageMatches && levelMatches;
    });
    const grid = document.getElementById('search-results-grid');
    const empty = document.getElementById('search-empty-state');
    const hasQuery = SEARCH_PAGE_STATE.query.trim().length > 0;
    grid.innerHTML = results.map(renderSearchCard).join('');
    grid.hidden = results.length === 0;
    empty.hidden = results.length > 0;
    document.getElementById('results-count').textContent = results.length ? `${results.length} نتيجة` : '';
    document.getElementById('results-eyebrow').textContent = hasQuery ? 'نتائج البحث' : 'اقتراحات للبدء';
    document.getElementById('results-title').textContent = hasQuery ? `نتائج: ${SEARCH_PAGE_STATE.query}` : 'ماذا تريد أن تصنع؟';
    document.getElementById('suggested-topics').hidden = hasQuery;
}

function renderSearchHistory() {
    const container = document.getElementById('recent-search-list');
    const history = readSearchHistory();
    container.innerHTML = history.length
        ? history.map((term) => `<button class="recent-search-item" type="button" data-recent-query="${escapeSearchHtml(term)}"><span>◷</span>${escapeSearchHtml(term)}</button>`).join('')
        : '<p class="history-empty">لا توجد عمليات بحث محفوظة.</p>';
}

function setSearchQuery(query, saveHistory = false) {
    SEARCH_PAGE_STATE.query = query.trim();
    document.getElementById('full-search-input').value = query;
    if (saveHistory) {
        saveSearchHistory(query);
        renderSearchHistory();
    }
    updateSearchResults();
}

function initializeSearchPage() {
    const input = document.getElementById('full-search-input');
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q') || '';
    input.value = initialQuery;
    SEARCH_PAGE_STATE.query = initialQuery;
    if (initialQuery) saveSearchHistory(initialQuery);
    renderSearchHistory();
    updateSearchResults();

    input.addEventListener('input', () => {
        SEARCH_PAGE_STATE.query = input.value;
        updateSearchResults();
        clearTimeout(searchHistoryTimer);
        searchHistoryTimer = setTimeout(() => {
            if (input.value.trim().length >= 2) {
                saveSearchHistory(input.value);
                renderSearchHistory();
            }
        }, 650);
    });
    document.getElementById('full-search-form').addEventListener('submit', (event) => {
        event.preventDefault();
        setSearchQuery(input.value, true);
        const url = new URL(window.location.href);
        if (input.value.trim()) url.searchParams.set('q', input.value.trim());
        else url.searchParams.delete('q');
        history.replaceState({}, '', url);
    });
    document.getElementById('clear-search').addEventListener('click', () => {
        setSearchQuery('');
        input.focus();
    });
    document.getElementById('type-filters').addEventListener('click', (event) => {
        const button = event.target.closest('[data-filter-type]');
        if (!button) return;
        SEARCH_PAGE_STATE.type = button.dataset.filterType;
        document.querySelectorAll('[data-filter-type]').forEach((item) => item.classList.toggle('active', item === button));
        updateSearchResults();
    });
    document.getElementById('language-filters').addEventListener('click', (event) => {
        const button = event.target.closest('[data-filter-language]');
        if (!button) return;
        SEARCH_PAGE_STATE.language = button.dataset.filterLanguage;
        document.querySelectorAll('[data-filter-language]').forEach((item) => item.classList.toggle('active', item === button));
        updateSearchResults();
    });
    document.getElementById('level-filter').addEventListener('change', (event) => {
        SEARCH_PAGE_STATE.level = event.target.value;
        updateSearchResults();
    });
    document.getElementById('recent-search-list').addEventListener('click', (event) => {
        const button = event.target.closest('[data-recent-query]');
        if (button) setSearchQuery(button.dataset.recentQuery, true);
    });
    document.getElementById('clear-history').addEventListener('click', () => {
        clearTimeout(searchHistoryTimer);
        clearSearchHistory();
        renderSearchHistory();
    });
    document.querySelectorAll('[data-search-topic]').forEach((button) => {
        button.addEventListener('click', () => setSearchQuery(button.dataset.searchTopic, true));
    });
}

document.addEventListener('DOMContentLoaded', initializeSearchPage);
