/* DCS-PWA-ADDALL-SAFE — one missing precache URL must not fail SW install */
try{if(self.Cache&&self.Cache.prototype&&self.Cache.prototype.addAll){var _dcsAddAll=self.Cache.prototype.addAll;self.Cache.prototype.addAll=function(u){var self2=this;return Promise.allSettled((u||[]).map(function(x){return self2.add(x).catch(function(){})})).then(function(){})}}}catch(_e){}
self.addEventListener('install', (event) => {
  // Activate the new service worker as soon as it finishes installing.
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of all clients as soon as the service worker becomes active.
  event.waitUntil(clients.claim());
});

const CACHE_NAME = 'haveli-static-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/manifest.json',
  '/icon.svg',
  '/icon.svg',
  // Add additional static assets (CSS, JS, images) as needed.
];

self.addEventListener('fetch', (event) => {
  // Only handle GET requests.
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found, otherwise fetch from network.
      return (
        cachedResponse ||
        fetch(event.request).then((networkResponse) => {
          // Cache successful responses for future use.
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === 'basic'
          ) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
          return networkResponse;
        })
      );
    })
  );
});