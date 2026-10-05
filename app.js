document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    if (typeof initNavigation === 'function') initNavigation();
    if (typeof initQuickSearch === 'function') initQuickSearch();

    const path = window.location.pathname.split('/').pop();

    if (path === 'learning.html') {
        renderLearningPage();
        setupLearningSearch();
    }

    if (path === 'courses.html') {
        renderCourseListPage();
    }

    if (path === 'projects.html') {
        renderProjectList();
    }

    if (path === 'course.html') {
        renderCourseDetail();
    }

    if (path === 'lesson.html') {
        renderLessonDetail();
    }

    document.querySelectorAll('.filter-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('.filter-chip').forEach((item) => item.classList.remove('active'));
            chip.classList.add('active');
            const filter = chip.getAttribute('data-filter');
            const courses = getAllCourses();
            const container = document.getElementById('all-courses-grid');
            if (!container) return;

            const filtered = filter === 'all' ? courses : courses.filter((course) => course.level === filter);
            container.innerHTML = filtered.map(renderCourseCard).join('');
        });
    });
});

window.ALL_COURSE_LIBRARY = [
    ...(window.HTML_COURSES || []),
    ...(window.CSS_COURSES || []),
    ...(window.JAVASCRIPT_COURSES || []),
    ...(window.PYTHON_COURSES || [])
];
