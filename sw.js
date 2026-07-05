const CACHE_NAME = 'footballbot-v1';
const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/manifest.json'
];

// Install
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(STATIC_ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch - Network first with cache fallback
self.addEventListener('fetch', (event) => {
    // Skip API calls
    if (event.request.url.includes('api.telegram.org') ||
        event.request.url.includes('api-sports') ||
        event.request.url.includes('football-data.org') ||
        event.request.url.includes('rapidapi')) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Cache successful responses
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // Return cached version when offline
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    // Return the index page for navigation requests
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                });
            })
    );
});

// Push Notifications
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const options = {
        body: data.body || 'Novo alerta do FootballBot!',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚽</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%2310b981"/><text x="50" y="70" text-anchor="middle" font-size="60">⚽</text></svg>',
        vibrate: [200, 100, 200],
        data: data.url || '/',
        actions: [
            { action: 'open', title: '👀 Ver' },
            { action: 'dismiss', title: '✕ Dispensar' }
        ]
    };

    event.waitUntil(
        self.registration.showNotification(data.title || 'FootballBot Pro', options)
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    if (event.action === 'dismiss') return;

    event.waitUntil(
        clients.openWindow(event.notification.data || '/')
    );
});
