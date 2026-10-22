# Tarun Punhani — Data Engineering Portfolio

A responsive, accessible, single-page portfolio focused on data engineering, cloud platforms, and professional engineering case studies.

## Quick start

This is a **static website**. There is no React build, Node dependency, GitHub token, or API key to configure.

- Open `index.html` in a browser, or run `python3 -m http.server 8000` and visit `http://localhost:8000`.
- Edit text, links, and career details in `index.html`.
- Edit the layout, colors, and typography in `styles.css`.
- Replace the portrait in `assets/tarun-punhani.png` and the PDF in `assets/Tarun_Punhani_Resume.pdf` when needed.

## Publish with GitHub Pages

1. Back up your current portfolio repository if you want to retain its previous history/files.
2. Upload **the contents of this folder** (not the outer folder) to your portfolio repository's default branch. Remove the old React app files so there is no confusion about the deployment source.
3. On GitHub, open **Settings → Pages → Build and deployment**.
4. Select **Deploy from a branch**, select your default branch (`main` or `master`), and choose **/(root)**. Save.
5. Wait for the Pages deployment, then open the URL shown in Settings → Pages. This works for project Pages (`username.github.io/repo/`) because all local asset paths are relative.
6. Add that live website URL to your GitHub profile and LinkedIn profile.

If GitHub Pages is already configured to use a GitHub Actions workflow, either switch to branch deployment or adjust that workflow to publish the repository root.

## Content notes

- Employer experience is presented as **high-level case studies**; no internal code, datasets, schemas, or URLs are included.
- The case studies do **not** claim to link to public repositories.
- The included resume PDF was taken from the updated resume provided in this conversation; check it before publishing.
- Review the impact numbers ($140K+, 500 TB, 10+ tables, 52 weeks) and job title wording before publishing publicly.
- The Airtel role is presented using the requested functional title; confirm it matches your employment records if needed.
- The GitHub link goes to your profile, not to a fabricated project.
- No third-party analytics or tracking are installed. Google Fonts and Font CDN are **not** required for function; the site uses fallback system fonts if Google Fonts is unavailable.

## Repository organization

```
index.html
styles.css
script.js
assets/
  tarun-punhani.png
  Tarun_Punhani_Resume.pdf
  favicon.svg
README.md
LICENSE
```

## Original project

This is a complete replacement for the older DeveloperFolio-based React website. The previous project contained outdated career information, unrelated template examples, and a build-time GitHub API dependency. The replacement prioritizes fast deployment and content accuracy.
