import Database from './database.js';

export type {};
declare const self: ServiceWorkerGlobalScope;

const cacheName =  'cacheName';
const version = '0';

let DB: Database | undefined;
if (!DB) DB = new Database('trelloClone', DB);

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(version + cacheName).then(cache => cache.addAll(['/']))
  );
});

self.addEventListener('activate', (event) => {
});

self.addEventListener('fetch', (event) => {


});
