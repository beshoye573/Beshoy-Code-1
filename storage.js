const STORAGE_KEY = 'beshoy-code-progress';

const defaultProgress = {
    completedLessons: [],
    completedProjects: [],
    currentCourse: '',
    currentLesson: '',
    favorites: [],
    theme: 'dark',
    userSettings: {
        search: '',
        learningStreak: 0
    }
};

const Storage = {
    read() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return { ...defaultProgress, userSettings: { ...defaultProgress.userSettings } };
            const parsed = JSON.parse(raw);
            return {
                ...defaultProgress,
                ...parsed,
                userSettings: {
                    ...defaultProgress.userSettings,
                    ...(parsed.userSettings || {})
                }
            };
        } catch (error) {
            return { ...defaultProgress, userSettings: { ...defaultProgress.userSettings } };
        }
    },
    write(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    },
    get() {
        return this.read();
    },
    set(partial) {
        const next = this.read();
        const merged = { ...next, ...partial };
        if (partial.userSettings) {
            merged.userSettings = { ...next.userSettings, ...partial.userSettings };
        }
        this.write(merged);
        return merged;
    }
};

window.Storage = Storage;
