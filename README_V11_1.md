# Space Daily V11.1 — Modifications

- Darija optional UI labels (French by default), saved on each device. Some advanced and generated text remains French; this is **not a full translation** of every possible content or Gemini response.
- Meal images from products with Open Food Facts URLs are stored locally as references and shown in Santé for the selected day and meal. Older meals/custom foods do not automatically have a photo.
- A–E Nutri-Score display from the **declared** database grade, never computed from the proprietary /100 score. Missing grades indicated.
- FAQ replaced with an academic product presentation, preserving page route id.
- Full-screen barcode camera UI with central alignment overlay; permission & HTTPS still required.
- Gradient styling on key panels and actions.

Tests: JS syntax passed. Browser visual/mobile/camera tests, Vercel Gemini integration, accessibility and actual scan require manual verification.

For Vercel deploy files at repository root maintaining `public/` folder. Keep GEMINI_API_KEY and GEMINI_MODEL in Vercel environment settings only.
