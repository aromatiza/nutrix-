# Space Daily V11 — Mobile Minimal

- Source: V10 reference design. Frontend changes are limited to `public/index.html`, `public/design-v11.css`, `public/design-v11.js`.
- Existing backend `server.js`, `server.ts`, Open Food Facts, Gemini API, barcode scanner, local data logic retained.
- Minimal home: Scanner/Photo/Recherche; nutrition daily; recent products; actions Comparer/Labo/Santé.
- AI globally accessible via floating icon; existing real AI chat elements are reparented into a drawer so API handlers are retained.
- Light white/green and dark forest green/lime; existing auto/manual theme control retained.
- Deploy via GitHub repository root containing server.ts, server.js, package.json, public/; Vercel environment GEMINI_API_KEY/GEMINI_MODEL.
- Tests required after deployment: AI chat, barcode camera, photo, compare, lab, mobile sidebar, service-worker update.
