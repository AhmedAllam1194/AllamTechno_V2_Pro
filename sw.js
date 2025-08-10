
const CACHE='allamtechno-full-beta-v1';
const ASSETS=['./','./index.html','./styles/app.css','./scripts/app.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./assets/login_logo.png','./assets/active_map.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const c=res.clone(); caches.open(CACHE).then(cc=>cc.put(e.request,c)); return res;}).catch(()=>caches.match('./index.html'))))});
