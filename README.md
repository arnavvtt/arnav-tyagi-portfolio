# Arnav Tyagi — Portfolio

A responsive, dependency-free, multi-page portfolio for Python backend, GenAI, and software engineering work.

## Pages

- `index.html` — Home
- `about.html` — About and education
- `projects.html` — Five filterable project cards
- `certifications.html` — Six certification records
- `resume.html` — Resume highlights and downloadable PDF
- `contact.html` — Contact and professional profile links
- `projects/*.html` — Five separate project case studies

## Run locally

Open `index.html` in a browser, or serve this folder with Python’s built-in static server:

```powershell
cd "C:\Users\Arnav Tyagi\Documents\Codex\2026-10-15\create-a-simple-text-file-named\outputs\arnav-portfolio"
python -m http.server 8000
```

Then visit <http://localhost:8000>. No packages need to be installed.

## Implementation notes

- Each navigation item is a distinct HTML document and URL.
- `app.js` renders the shared navbar/footer, project cards, project case studies, and credential records from `project-data.js`.
- Project listing cards use clear “View Project” links; case studies use “GitHub Repository” and “Live Demo” labels.
- The resume PDF in `assets/Arnav_Resume.pdf` was supplied by the owner. Use the download on the Resume page.
- The whole site uses layered 3D-inspired surfaces, hover depth, and a research illustration with gentle motion. Reduced-motion and touch-device behavior are supported.
- Case-study caveats identify claims and scope that could not be verified from public repository content.
- The site uses no packages, external fonts, analytics, or contact form.

## Publish with GitHub Pages

This is a static site; it needs no build step or paid hosting. The files are ready to publish from the repository root, with `.nojekyll` and relative links for GitHub Pages.

1. On GitHub, create a **public** repository named `arnav-tyagi-portfolio`.
2. Upload the contents of this folder into the repository’s root (including the `projects` and `assets` folders and `.nojekyll`).
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then select **main** and **/(root)** and save.
4. After the Pages deployment completes, the expected URL is `https://arnavvtt.github.io/arnav-tyagi-portfolio/`.
5. Add that URL to LinkedIn’s **Featured** section with the title **Arnav Tyagi | AI & Software Portfolio**.

Suggested LinkedIn description: “Projects in Generative AI, backend development, and software engineering.”
