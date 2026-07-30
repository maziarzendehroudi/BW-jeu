self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installation');
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Interception valide pour activer les critères PWA
    event.respondWith(
        fetch(event.request).catch(() => {
            return new Response('Hors ligne');
        })
    );
});
