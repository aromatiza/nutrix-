# Nutrix V11.3 — UI Fix

Scope: better contrast, light-mode white surfaces, dark-mode deep green surfaces, consistent typography and accessible French/Darija segmented switch. All API and nutrition business-logic files kept unchanged.

Files changed: `public/index.html`; added `public/nutrix-v11-3.css`, `public/nutrix-v11-3.js`, `README_NUTRIX_V11_3.md`.

Test manually: light/dark/automatic; switch FR -> Darija -> FR and reload; check mobile header; verify scanner, Nutri-Score, Open Food Facts, Gemini. Language translation uses the existing V11.1 dictionary and remains partial for dynamic labels.

Deployment: commit entire `public/` directory along with backend files to a GitHub test branch/repository. Keep `GEMINI_API_KEY` in Vercel environment, never in Git.
