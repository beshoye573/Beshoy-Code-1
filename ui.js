function badgeColor(level) {
  const map = {
    Beginner: 'rgba(16, 185, 129, 0.12)',
    Intermediate: 'rgba(59, 130, 246, 0.12)',
    Advanced: 'rgba(139, 92, 246, 0.12)',
    Expert: 'rgba(245, 158, 11, 0.12)'
  };
  return map[level] || 'rgba(148, 163, 184, 0.12)';
}

function renderCourseCard(course) {
  const progress = getCourseProgress(course.id);
  const buttonText = progress > 0 ? 'متابعة' : 'ابدأ الآن';
  const levelLabel = course.level === 'Beginner' ? 'مبتدئ' : course.level === 'Intermediate' ? 'متوسط' : course.level === 'Advanced' ? 'متقدم' : course.level === 'Expert' ? 'احترافي' : course.level;
  const lessonLabel = `${course.lessons.length} ${course.lessons.length === 1 ? 'درس' : 'دروس'}`;
  const minutesLabel = `${Math.max(3, course.lessons.length * 7)} دقيقة`;

  return `
    <article class="course-card reveal">
      <div class="card-header">
        <span class="lang-badge">${course.language}</span>
        <span class="level-badge" style="background:${badgeColor(course.level)}; color: var(--text);">${levelLabel}</span>
      </div>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
      <div class="meta-row">
        <span class="meta-pill">${lessonLabel}</span>
        <span class="meta-pill">${levelLabel}</span>
        <span class="meta-pill">${minutesLabel}</span>
      </div>
      <div class="progress-bar"><span style="width:${progress}%"></span></div>
      <div class="card-footer">
        <span class="progress-text">${progress}% مكتمل</span>
        <a class="card-link" href="course.html?courseId=${course.id}">${buttonText}</a>
      </div>
    </article>
  `;
}

function renderProjectCard(project) {
  const difficultyLabel = project.difficulty === 'Beginner' ? 'مبتدئ' : project.difficulty === 'Intermediate' ? 'متوسط' : project.difficulty === 'Advanced' ? 'متقدم' : project.difficulty === 'Expert' ? 'احترافي' : project.difficulty;
  const demoType = project.demoType || PROJECT_DEMO_TYPES[project.id] || 'landing';
  return `
    <article class="project-card reveal" id="project-${project.id}">
      <div class="project-preview preview-${demoType}" aria-hidden="true">
        <div class="preview-top"><span></span><span></span><span></span><b>${project.title}</b></div>
        <div class="preview-content"><small>${project.technologies.join(' · ')}</small><strong>${project.title}</strong><i></i><i></i></div>
      </div>
      <div class="card-header">
        <span class="lang-badge">${project.language}</span>
        <span class="level-badge" style="background:${badgeColor(project.difficulty)}; color: var(--text);">${difficultyLabel}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="meta-row">
        ${project.technologies.map((item) => `<span class="meta-pill">${item}</span>`).join('')}
      </div>
      <div class="card-footer">
        <span class="progress-text">مشروع تفاعلي</span>
      </div>
      <div class="project-actions">
        <button type="button" class="btn btn-primary" data-open-project="${project.id}">عرض المشروع</button>
        <button type="button" class="action-btn" data-open-project="${project.id}">معاينة مباشرة</button>
        <button type="button" class="action-btn" data-view-project-code="${project.id}">عرض الكود</button>
      </div>
    </article>
  `;
}

function renderHomeLanguageCards() {
  const container = document.getElementById('home-language-cards');
  if (!container) return;

  const courses = getAllCourses().slice(0, 8);
  container.innerHTML = courses.map((course) => renderCourseCard(course)).join('');
}

function renderProgressOverview() {
  const container = document.getElementById('home-progress-overview');
  if (!container) return;

  const state = getProgressState();
  const courses = getAllCourses().slice(0, 4);

  const progressCards = courses.map((course) => {
    const total = course.lessons.length;
    const completed = course.lessons.filter((lesson) => state.completedLessons.includes(lesson.id)).length;
    const percent = Math.round((completed / total) * 100);
    return `
      <div class="progress-card">
        <div class="progress-row">
          <h3>${course.language}</h3>
          <span>${percent}%</span>
        </div>
        <div class="progress-bar"><span style="width:${percent}%"></span></div>
        <p class="progress-text">${course.title}</p>
      </div>
    `;
  }).join('');

  container.innerHTML = progressCards;
}

function renderContinueLearning() {
  const container = document.getElementById('continue-learning');
  if (!container) return;

  const current = getContinueLearning();
  if (!current) {
    container.innerHTML = '<div class="progress-card"><p class="thin-text">لا توجد جلسة حالية. ابدأ لأول دورة لتبدأ رحلتك.</p></div>';
    return;
  }

  const course = findCourse(current.courseId);
  const lesson = findLesson(current.lessonId);

  container.innerHTML = `
    <div class="progress-card">
      <div class="progress-row">
        <h3>${course ? course.title : 'مسار التعلم'}</h3>
        <span>${course ? getCourseProgress(course.id) : 0}%</span>
      </div>
      <p class="progress-text">الدرس الحالي: ${lesson ? lesson.title : '...'} </p>
      <div class="progress-bar"><span style="width:${course ? getCourseProgress(course.id) : 0}%"></span></div>
      <div class="card-footer">
        <span class="progress-text">تابع التدريب من حيث توقفت</span>
        <a class="card-link" href="lesson.html?lessonId=${current.lessonId}">متابعة</a>
      </div>
    </div>
  `;
}

function renderLatestLessons() {
  const container = document.getElementById('latest-lessons');
  if (!container) return;

  const lessons = getAllLessons().slice(0, 6);
  container.innerHTML = lessons.map((lesson) => `
    <div class="lesson-item">
      <div>
        <h4>${lesson.title}</h4>
        <p>${lesson.language} • ${lesson.level}</p>
      </div>
      <div class="lesson-actions">
        <button class="action-btn favorite-btn ${getProgressState().favorites.includes(lesson.id) ? 'favorited' : ''}" data-favorite-id="${lesson.id}"> ${getProgressState().favorites.includes(lesson.id) ? '★' : '☆'} </button>
        <a class="action-btn" href="lesson.html?lessonId=${lesson.id}">فتح</a>
      </div>
    </div>
  `).join('');

  attachFavoriteEvents();
}

function renderFavoriteLessons() {
  const container = document.getElementById('favorite-lessons');
  if (!container) return;

  const favorites = getFavoriteLessons();
  if (!favorites.length) {
    container.innerHTML = '<div class="progress-card"><p class="thin-text">لا توجد دروس مفضلة حتى الآن.</p></div>';
    return;
  }

  container.innerHTML = favorites.map((lesson) => `
    <div class="lesson-item">
      <div>
        <h4>${lesson.title}</h4>
        <p>${lesson.language} • ${lesson.level}</p>
      </div>
      <div class="lesson-actions">
        <button class="action-btn favorite-btn favorited" data-favorite-id="${lesson.id}">★</button>
        <a class="action-btn" href="lesson.html?lessonId=${lesson.id}">فتح</a>
      </div>
    </div>
  `).join('');

  attachFavoriteEvents();
}

function renderDashboard() {
  const container = document.getElementById('dashboard');
  if (!container) return;

  const state = getProgressState();
  const allCourses = getAllCourses();
  const coursesStarted = allCourses.filter((course) => course.lessons.some((lesson) => state.completedLessons.includes(lesson.id))).length;
  const coursesCompleted = allCourses.filter((course) => course.lessons.length && course.lessons.every((lesson) => state.completedLessons.includes(lesson.id))).length;
  const favoriteCount = state.favorites.length;

  container.innerHTML = `
    <div class="stat-card reveal">
      <h3>إجمالي التقدم</h3>
      <strong>${getOverallProgress()}%</strong>
    </div>
    <div class="stat-card reveal">
      <h3>الدورات التي بدأت</h3>
      <strong>${coursesStarted}</strong>
    </div>
    <div class="stat-card reveal">
      <h3>الدورات المكتملة</h3>
      <strong>${coursesCompleted}</strong>
    </div>
    <div class="stat-card reveal">
      <h3>الدروس المفضلة</h3>
      <strong>${favoriteCount}</strong>
    </div>
    <div class="stat-card reveal">
      <h3>الدورة الحالية</h3>
      <strong>${state.currentCourse ? state.currentCourse : '—'}</strong>
    </div>
    <div class="stat-card reveal">
      <h3>المستوى اليومي</h3>
      <strong>${state.userSettings.learningStreak || 0} أيام</strong>
    </div>
  `;
}

function renderAllCoursesGrid() {
  const container = document.getElementById('all-courses-grid');
  if (!container) return;

  const courses = getAllCourses();
  container.innerHTML = courses.map((course) => renderCourseCard(course)).join('');
}

function renderCourseListPage() {
  const container = document.getElementById('all-courses');
  if (!container) return;

  const courses = getAllCourses();
  container.innerHTML = courses.map((course) => renderCourseCard(course)).join('');
}

function renderProjectList() {
  const container = document.getElementById('project-list');
  if (!container) return;

  container.innerHTML = (window.PROJECTS_DATA || []).map(renderProjectCard).join('');
  attachProjectEvents();
  const projectId = decodeURIComponent(window.location.hash.replace('#project-', ''));
  if (projectId && projectId !== window.location.hash.slice(1)) {
    document.querySelector(`[data-open-project="${CSS.escape(projectId)}"]`)?.click();
  }
}

function attachProjectEvents() {
  const dialog = document.getElementById('project-dialog');
  if (!dialog) return;

  const showProject = (projectId, selectedTab) => {
    const project = (window.PROJECTS_DATA || []).find((item) => item.id === projectId);
    if (!project) return;
    const source = createProjectDemo(project);
    let previewNeedsInitialLayout = selectedTab !== 'preview';
    document.getElementById('project-dialog-title').textContent = project.title;
    const demoFrame = document.getElementById('project-demo-frame');
    demoFrame.setAttribute('sandbox', 'allow-scripts allow-forms');
    document.getElementById('project-source').textContent = source;
    dialog.dataset.projectSource = source;
    dialog.showModal();
    selectProjectTab(selectedTab);
    if (!previewNeedsInitialLayout) {
      requestAnimationFrame(() => {
        demoFrame.srcdoc = source;
      });
    }

    if (previewNeedsInitialLayout) {
      dialog.querySelector('[data-project-tab="preview"]').addEventListener('click', () => {
        requestAnimationFrame(() => {
          demoFrame.srcdoc = source;
          previewNeedsInitialLayout = false;
        });
      }, { once: true });
    }
  };

  const selectProjectTab = (tabName) => {
    dialog.querySelectorAll('[data-project-tab]').forEach((button) => {
      button.classList.toggle('active', button.dataset.projectTab === tabName);
    });
    dialog.querySelectorAll('[data-project-view]').forEach((view) => {
      view.hidden = view.dataset.projectView !== tabName;
    });
  };

  document.querySelectorAll('[data-open-project]').forEach((button) => {
    button.addEventListener('click', () => showProject(button.dataset.openProject, 'preview'));
  });
  document.querySelectorAll('[data-view-project-code]').forEach((button) => {
    button.addEventListener('click', () => showProject(button.dataset.viewProjectCode, 'code'));
  });
  dialog.querySelectorAll('[data-project-tab]').forEach((button) => {
    button.addEventListener('click', () => selectProjectTab(button.dataset.projectTab));
  });
  dialog.querySelector('[data-close-project]')?.addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-copy-project]')?.addEventListener('click', async (event) => {
    const button = event.currentTarget;
    try {
      await navigator.clipboard.writeText(dialog.dataset.projectSource || '');
      button.textContent = 'تم النسخ';
    } catch (error) {
      button.textContent = 'تعذر النسخ';
    }
    setTimeout(() => { button.textContent = 'نسخ الكود'; }, 1400);
  });
}

function renderCourseDetail() {
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get('courseId');
  const container = document.getElementById('course-content');
  const list = document.getElementById('course-lesson-list');
  if (!courseId || !container) return;

  const course = findCourse(courseId);
  if (!course) {
    container.innerHTML = '<p>لم يتم العثور على الدورة.</p>';
    return;
  }

  saveCurrentLearning(course.id, course.lessons[0].id);

  list.innerHTML = course.lessons.map((lesson, index) => `
    <li>
      <a href="lesson.html?lessonId=${lesson.id}&courseId=${course.id}" class="${index === 0 ? 'active' : ''}">
        <span>${lesson.title}</span>
        <span>${index + 1}</span>
      </a>
    </li>
  `).join('');

  const completedCount = course.lessons.filter((lesson) => getProgressState().completedLessons.includes(lesson.id)).length;
  const percent = Math.round((completedCount / course.lessons.length) * 100);

  container.innerHTML = `
    <div class="lesson-section">
      <span class="eyebrow">${course.language}</span>
      <h1>${course.title}</h1>
      <p>${course.description}</p>
      <div class="progress-bar"><span style="width:${percent}%"></span></div>
      <div class="meta-row">
        <span class="meta-pill">${course.level === 'Beginner' ? 'مبتدئ' : course.level === 'Intermediate' ? 'متوسط' : course.level === 'Advanced' ? 'متقدم' : course.level === 'Expert' ? 'احترافي' : course.level}</span>
        <span class="meta-pill">${course.lessons.length} دروس</span>
      </div>
      <div class="lesson-nav">
        <a class="btn btn-secondary" href="courses.html">العودة إلى الكورسات</a>
        <a class="btn btn-primary" href="lesson.html?lessonId=${course.lessons[0].id}&courseId=${course.id}">ابدأ الدرس الأول</a>
      </div>
    </div>
  `;
}

function renderLessonDetail() {
  const params = new URLSearchParams(window.location.search);
  const lessonId = params.get('lessonId');
  const courseId = params.get('courseId');
  const container = document.getElementById('lesson-content');
  if (!lessonId || !container) return;

  const lessons = getAllLessons();
  const lesson = lessons.find((item) => item.id === lessonId);
  if (!lesson) {
    container.innerHTML = '<p>لم يتم العثور على الدرس.</p>';
    return;
  }

  const course = findCourse(courseId || lesson.courseId);
  const currentLessons = course ? course.lessons : [];
  const lessonIndex = currentLessons.findIndex((item) => item.id === lessonId);
  const previousLesson = lessonIndex > 0 ? currentLessons[lessonIndex - 1] : null;
  const nextLesson = lessonIndex >= 0 && lessonIndex < currentLessons.length - 1 ? currentLessons[lessonIndex + 1] : null;
  const isCompleted = getProgressState().completedLessons.includes(lesson.id);
  const favorited = getProgressState().favorites.includes(lesson.id);

  saveCurrentLearning(course ? course.id : lesson.courseId, lesson.id);

  const lessonsMarkup = `
    <article class="lesson-main reveal">
      <span class="eyebrow">${lesson.language} • ${lesson.level}</span>
      <h1>${lesson.title}</h1>
      <p class="thin-text">${lesson.description}</p>
      <div class="card-footer">
        <span class="completed-badge">${isCompleted ? '✓ مكتمل' : 'غير مكتمل'}</span>
        <button class="btn favorite-btn ${favorited ? 'favorited' : ''}" data-favorite-id="${lesson.id}">${favorited ? '★ مفضل' : '☆ أضف إلى المفضلة'}</button>
      </div>

      <section class="lesson-section">
        <h2>شرح الدرس</h2>
        <p>${lesson.explanation}</p>
      </section>

      <section class="lesson-section">
        <h2>أمثلة</h2>
        <ul>
          ${(lesson.examples || []).map((example) => `<li>${example}</li>`).join('')}
        </ul>
      </section>

      <section class="lesson-section">
        <h2>مثال الكود</h2>
        <div class="code-block">
          <div class="code-toolbar">
            <span class="lang-pill">${lesson.language}</span>
            <div class="code-actions">
              <button data-copy>نسخ</button>
              <button data-reset>إعادة</button>
            </div>
          </div>
          <pre data-code>${escapeHtml(lesson.code || '')}</pre>
        </div>
      </section>

      <section class="lesson-section">
        <h2>التمرين</h2>
        <p>${lesson.exercise}</p>
      </section>

      <section class="lesson-section challenge-box">
        <h2>التحدي</h2>
        <p>${lesson.challenge}</p>
      </section>

      <section class="lesson-section">
        <h2>نصائح</h2>
        <ul>
          ${(lesson.tips || []).map((tip) => `<li>${tip}</li>`).join('')}
        </ul>
      </section>

      <section class="lesson-section">
        <h2>أخطاء شائعة</h2>
        <ul>
          ${(lesson.commonMistakes || []).map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </section>

      <div class="lesson-nav">
        <a class="btn btn-secondary" href="${previousLesson ? `lesson.html?lessonId=${previousLesson.id}&courseId=${course ? course.id : lesson.courseId}` : `course.html?courseId=${course ? course.id : lesson.courseId}`}">${previousLesson ? 'الدرس السابق' : 'العودة للدورة'}</a>
        <button class="btn btn-primary" data-complete="${lesson.id}">${isCompleted ? 'تم إكمال الدرس' : 'إكمال الدرس'}</button>
        <a class="btn btn-primary" href="${nextLesson ? `lesson.html?lessonId=${nextLesson.id}&courseId=${course ? course.id : lesson.courseId}` : `course.html?courseId=${course ? course.id : lesson.courseId}`}">${nextLesson ? 'Next lesson' : 'إكمال الدورة'}</a>
      </div>
    </article>
  `;

  container.innerHTML = lessonsMarkup;
  attachLessonActions();
}

function attachFavoriteEvents() {
  document.querySelectorAll('[data-favorite-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const lessonId = button.getAttribute('data-favorite-id');
      toggleFavorite(lessonId);
      button.classList.toggle('favorited');
      button.textContent = getProgressState().favorites.includes(lessonId) ? '★' : '☆';
      renderLearningPage();
    });
  });
}

function attachLessonActions() {
  const completeButton = document.querySelector('[data-complete]');
  if (completeButton) {
    completeButton.addEventListener('click', () => {
      const lessonId = completeButton.getAttribute('data-complete');
      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('courseId') || findLesson(lessonId)?.courseId;
      markLessonCompleted(lessonId, courseId);
      renderLessonDetail();
    });
  }

  const copyButton = document.querySelector('[data-copy]');
  if (copyButton) {
    copyButton.addEventListener('click', async () => {
      const pre = document.querySelector('[data-code]');
      if (!pre) return;
      try {
        await navigator.clipboard.writeText(pre.textContent);
        copyButton.textContent = 'Copied';
        setTimeout(() => { copyButton.textContent = 'نسخ'; }, 1200);
      } catch (error) {
        copyButton.textContent = 'فشل';
      }
    });
  }

  const resetButton = document.querySelector('[data-reset]');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      const code = document.querySelector('[data-code]');
      const lesson = findLesson(new URLSearchParams(window.location.search).get('lessonId'));
      if (code && lesson) {
        code.textContent = lesson.code || '';
      }
    });
  }

  document.querySelectorAll('.favorite-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const lessonId = button.getAttribute('data-favorite-id');
      toggleFavorite(lessonId);
      renderLessonDetail();
    });
  });
}

function renderLearningPage() {
  renderContinueLearning();
  renderProgressOverview();
  renderLatestLessons();
  renderDashboard();
  renderFavoriteLessons();
  renderAllCoursesGrid();
  renderRecommendedCourses();
}

function renderRecommendedCourses() {
  const container = document.getElementById('recommended-courses');
  if (!container) return;
  const courses = getAllCourses().slice(0, 4);
  container.innerHTML = courses.map(renderCourseCard).join('');
}

function setupLearningSearch() {
  const input = document.getElementById('learning-search');
  if (!input) return;

  input.addEventListener('input', (event) => {
    const query = event.target.value;
    const results = searchCatalog(query);
    const container = document.getElementById('all-courses-grid');
    if (!container) return;

    if (!query.trim()) {
      renderAllCoursesGrid();
      return;
    }

    const courseIds = results.filter((item) => item.type === 'course').map((item) => item.id);
    const filteredCourses = getAllCourses().filter((course) => courseIds.includes(course.id));

    container.innerHTML = filteredCourses.length ? filteredCourses.map(renderCourseCard).join('') : '<p class="thin-text">لا توجد دورات مطابقة.</p>';
  });
}

function initNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const panel = document.querySelector('.nav-panel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', () => {
    const isOpen = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

window.renderCourseListPage = renderCourseListPage;
window.renderProjectList = renderProjectList;
window.renderCourseDetail = renderCourseDetail;
window.renderLessonDetail = renderLessonDetail;
window.renderLearningPage = renderLearningPage;
window.setupLearningSearch = setupLearningSearch;
window.attachFavoriteEvents = attachFavoriteEvents;
window.initNavigation = initNavigation;
