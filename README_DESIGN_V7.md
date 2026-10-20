# Space Daily V7 — Design Refresh

Cette version améliore uniquement la présentation visuelle : palette nutrition vert sauge, panneaux plus lisibles, navigation, cartes, contraste, responsive mobile, état focus accessible. Les scripts de fonctionnalités, routes API et intégrations Gemini/Open Food Facts restent inchangés.

## Déployer sur Vercel

1. Extraire le ZIP. Déposer le contenu de `Space_Daily_Pro_V5_Scientific/` à la racine du repository (en conservant le dossier `public/`).
2. Ne pas mettre `GEMINI_API_KEY` dans GitHub ; configurer dans Vercel > Settings > Environment Variables avec `GEMINI_MODEL`.
3. Vercel déploie les commits automatiquement. Tester l'accueil, les feuilles CSS, recherche produit, chat Gemini, lecture photo et appareil mobile.

Si l'ancien service worker met en cache une version précédente, actualiser sans cache ou effacer les données du site avant de juger le nouveau design.
