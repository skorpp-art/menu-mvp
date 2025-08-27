
const CACHE_NAME = 'fuego-y-sal-v1';
const urlsToCache = [
    './',
    'index.html',
    'style.css',
    'app.js',
    'menu.json',
    'manifest.json',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Lora:wght@400;600&display=swap'
    // Agrega aquí las rutas a las imágenes cuando las tengas, ej: 'img/hamburguesa.jpg'
];

// Evento de instalación: se abre la caché y se añaden los archivos del App Shell
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierta');
                return cache.addAll(urlsToCache);
            })
    );
});

// Evento de activación: se limpia la caché antigua si existe una nueva
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Evento fetch: decide si servir desde la caché o desde la red
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Si la respuesta está en la caché, la devuelve
                if (response) {
                    return response;
                }

                // Si no, la busca en la red
                return fetch(event.request).then(
                    (response) => {
                        // Si la respuesta no es válida, no la cacheamos
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Clonamos la respuesta para poder guardarla en caché y devolverla al navegador
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});
