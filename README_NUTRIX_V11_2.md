# Nutrix V11.2 — Branding and UI consistency

## Changes
- Renamed visible Space Daily branding to Nutrix, including page title, PWA manifest, SVG icon and metadata.
- New square `N` + barcode favicon/logo illustration.
- Added `public/nutrix-v11-2.css` to unify card surfaces, reduce glass gradients, style language control, harmonize light/dark colors and improve Nutri-Score presentation.
- Added `public/nutrix-v11-2.js` for theme-color and accessible assistant label.
- Preserved existing script IDs, routes, API server, food scan, Gemini, health and data storage logic.

## Known limitations
- Existing Darija translations in `design-v11-1.js` only cover selected interface labels; complete localization of dynamic UI is not yet provided.
- Existing stylesheet layers remain for backward compatibility; override layer may need browser-specific refinement.
- Verify the light/dark selectors against real settings on the device.
- Functional device, camera and Gemini API checks are required after deployment.

## Deploy
Upload the contents of this folder (including the `public` directory) to the GitHub repository. Vercel redeploys on commit. Keep GEMINI_API_KEY in Vercel environment variables only.
