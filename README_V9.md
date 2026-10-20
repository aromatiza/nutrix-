# Space Daily V9 — Premium Health Tech

Refonte design mobile-first à partir de V8, avec préservation des modules existants.

- Accueil Smart Dashboard, accès équivalent Caméra / Photo / Recherche, 5 onglets mobiles.
- Scanner et analyses Open Food Facts et Gemini conservés.
- Nutrition colorée et détails repliables hérités de V8.
- Thème suivant la préférence du système, bouton en haut pour alterner Auto / Clair / Sombre. Stockage local.
- Page Santé avec fonctionnalités d’origine, suivi 7 jours; Labo accessible via Explorer.
- Pour le déploiement : conserver `public/` et les fichiers `server.js`, `server.ts`, `package.json` à la racine. Ajouter GEMINI_API_KEY et GEMINI_MODEL comme variables Vercel. Ne jamais publier la clé.
- Tests sur téléphone, caméra et appels Gemini restent nécessaires après publication.
