// Offline-first shell cache. Bump VERSION on each release.
const VERSION = 'bc-v8';
const SHELL = ['app.html', 'css/app.css', 'js/main.js', 'js/data.js', 'js/store.js', 'js/entitlements.js',
  'js/words/en.js', 'js/words/hi.js', 'js/words/mr.js', 'js/words/gu.js', 'js/words/pa.js', 'js/words/ta.js', 'js/words/te.js', 'js/words/bn.js', 'js/words/art.js',
  'manifest.webmanifest', 'icons/icon.svg', 'icons/icon-192.png',
  // starter-deck art (keep in sync with ART in js/data.js)
  'img/art/apple.webp', 'img/art/aunt.svg', 'img/art/aunt2.svg', 'img/art/bird.webp', 'img/art/boy.svg', 'img/art/cat.webp', 'img/art/egg.webp', 'img/art/elephant.webp', 'img/art/father.svg', 'img/art/fish.webp', 'img/art/girl.svg', 'img/art/grandfather.svg', 'img/art/grandmother.svg', 'img/art/lion.webp', 'img/art/mango.webp', 'img/art/mother.svg', 'img/art/rabbit.webp', 'img/art/uncle.svg'];
self.addEventListener('install', (e) => e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  // stale-while-revalidate for shell + Google Fonts
  e.respondWith(caches.open(VERSION).then(async (c) => {
    const hit = await c.match(e.request, { ignoreSearch: true });
    const net = fetch(e.request).then((r) => { if (r.ok || r.type === 'opaque') c.put(e.request, r.clone()); return r; }).catch(() => hit);
    return hit || net;
  }));
});
