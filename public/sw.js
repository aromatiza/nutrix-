const CACHE_NAME = 'nutrix-v11-2-minimal';
const APP_SHELL = ['./', './index.html', './style.css', './script.js', './space-ai.js', './explore.js', './space-tools.js', './space-nutri.js', './company-ui.js', './space-v5.js', './design-v11.css', './design-v11.js', './manifest.json', './icon.svg'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
