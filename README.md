# Beshoy Code

Beshoy Code is a static Arabic-first website and front-end learning platform built with HTML, CSS, and JavaScript. It is developed in parts. **Part 2 is the current release** and brings together the learning platform, browser-based practice editors, and interactive project demos.

## Features

- Responsive Arabic RTL interface with English technical names and code examples
- Dedicated Home, About, Services, Contact, Search, Learning, Courses, Course, Lesson, Projects, and Practice pages
- Search across courses, lessons, projects, challenges, training, services, and posts, with Arabic/English aliases, relevance ranking, filters, and local search history
- Structured HTML, CSS, JavaScript, and Python learning paths with course and lesson pages
- Progress, favorites, current lesson, theme preference, and practice code stored locally in the browser
- HTML and CSS preview editors, an isolated JavaScript console, and a Python editor powered by lazily loaded Pyodide
- Interactive project previews with source viewing
- Dark and light themes

## Project Structure

```text
.
├── index.html
├── about.html
├── services.html
├── contact.html
├── learning.html
├── courses.html
├── course.html
├── lesson.html
├── projects.html
├── practice.html
├── search.html
├── style.css
├── components.css
├── responsive.css
├── animations.css
├── practice.css
├── search.css
├── app.js
├── ui.js
├── progress.js
├── storage.js
├── theme.js
├── search.js
├── search-page.js
├── practice.js
├── project-demos.js
├── html.js
├── css.js
├── javascript.js
├── python.js
├── projects.js
├── challenges.js
├── sample.json
├── .gitkeep
├── README.md
├── validate.js
└── vercel.json
```

All current HTML, CSS, JavaScript, and JSON files are in the repository root. The current interface uses no local image or font files; Cairo and the first-use Pyodide runtime are loaded from external CDNs.

## Run Locally

No package installation, build step, backend, or database is required. Serve the repository root with any static file server. For example:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/index.html`. Python execution in the Practice page requires an internet connection the first time Pyodide is selected; the other editors run in the browser.

To syntax-check the project scripts with Node.js:

```bash
node validate.js
```

## GitHub Pages

All site pages are in the repository root, and local page, stylesheet, script, and data references are relative. To publish:

1. Push this repository to GitHub.
2. Open **Settings → Pages** for the repository.
3. Choose **Deploy from a branch**, select the publishing branch, and set the folder to `/ (root)`.
4. Save and open the Pages URL shown by GitHub.

The links are relative, so the site also works from a repository subpath such as `https://username.github.io/repository/`. `vercel.json` is only for the optional Vercel deployment and is not required by GitHub Pages.

## Browser Storage

Progress, favorites, current learning position, theme, practice code for each language, and recent searches use `localStorage` on the visitor's device. Clearing browser storage removes that local data. No account or server-side persistence is configured.
