const themeButton = document.getElementById('theme-toggle');

function applyTheme(themeName) {
    const activeTheme = themeName || 'dark';
    document.body.classList.toggle('dark', activeTheme === 'dark');
    const button = document.getElementById('theme-toggle');
    if (button) {
        button.textContent = activeTheme === 'dark' ? '☀️' : '🌙';
    }
    const state = Storage.get();
    state.theme = activeTheme;
    Storage.write(state);
}

function initTheme() {
    const state = Storage.get();
    const preferred = state.theme || 'dark';
    applyTheme(preferred);

    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
        toggleButton.addEventListener('click', () => {
            const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }
}

window.applyTheme = applyTheme;
window.initTheme = initTheme;
