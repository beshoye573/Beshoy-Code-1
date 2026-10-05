function getProgressState() {
    return Storage.get();
}

function saveProgressState(nextState) {
    Storage.write(nextState);
}

function getCourseProgress(courseId) {
    const state = getProgressState();
    const course = findCourse(courseId);
    if (!course || !course.lessons) return 0;
    const total = course.lessons.length;
    const completed = course.lessons.filter((lesson) => state.completedLessons.includes(lesson.id)).length;
    return Math.round((completed / total) * 100);
}

function getOverallProgress() {
    const courses = getAllCourses();
    const state = getProgressState();
    if (!courses.length) return 0;
    let completed = 0;
    let total = 0;

    courses.forEach((course) => {
        if (course.lessons) {
            total += course.lessons.length;
            completed += course.lessons.filter((lesson) => state.completedLessons.includes(lesson.id)).length;
        }
    });

    return total ? Math.round((completed / total) * 100) : 0;
}

function markLessonCompleted(lessonId, courseId) {
    const state = getProgressState();
    if (!state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
    }
    state.currentCourse = courseId || state.currentCourse;
    state.currentLesson = lessonId;
    saveProgressState(state);
    return getProgressState();
}

function toggleFavorite(lessonId) {
    const state = getProgressState();
    if (state.favorites.includes(lessonId)) {
        state.favorites = state.favorites.filter((id) => id !== lessonId);
    } else {
        state.favorites.push(lessonId);
    }
    saveProgressState(state);
    return state;
}

function getFavoriteLessons() {
    const state = getProgressState();
    const allLessons = getAllLessons();
    return allLessons.filter((lesson) => state.favorites.includes(lesson.id));
}

function saveCurrentLearning(courseId, lessonId) {
    const state = getProgressState();
    state.currentCourse = courseId;
    state.currentLesson = lessonId;
    saveProgressState(state);
}

function getContinueLearning() {
    const state = getProgressState();
    if (!state.currentCourse || !state.currentLesson) {
        const firstCourse = getAllCourses()[0];
        if (!firstCourse) return null;
        return { courseId: firstCourse.id, lessonId: firstCourse.lessons[0].id };
    }
    return { courseId: state.currentCourse, lessonId: state.currentLesson };
}

function findCourse(courseId) {
    return getAllCourses().find((course) => course.id === courseId);
}

function findLesson(lessonId) {
    return getAllLessons().find((lesson) => lesson.id === lessonId);
}

function getAllCourses() {
    return [
        ...(window.HTML_COURSES || []),
        ...(window.CSS_COURSES || []),
        ...(window.JAVASCRIPT_COURSES || []),
        ...(window.PYTHON_COURSES || [])
    ];
}

function getAllLessons() {
    return getAllCourses().flatMap((course) =>
        (course.lessons || []).map((lesson) => ({
            ...lesson,
            courseId: course.id,
            courseTitle: course.title,
            language: course.language,
            level: course.level
        }))
    );
}

window.getProgressState = getProgressState;
window.markLessonCompleted = markLessonCompleted;
window.toggleFavorite = toggleFavorite;
window.getFavoriteLessons = getFavoriteLessons;
window.getContinueLearning = getContinueLearning;
window.getCourseProgress = getCourseProgress;
window.getOverallProgress = getOverallProgress;
window.getAllCourses = getAllCourses;
window.getAllLessons = getAllLessons;
window.findCourse = findCourse;
window.findLesson = findLesson;
window.saveCurrentLearning = saveCurrentLearning;
