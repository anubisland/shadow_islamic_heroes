const CACHE='shadow-heroes-v1';
const ASSETS=[
  './',
  './index.html',
  'assets/hubab.png',
  'assets/nuaym.png',
  'assets/rabia.png',
  'assets/amr.png',
  'assets/dhu-al-nijadayn.png',
  'assets/three-heroes.png',
  'assets/intro.jpg',
  'assets/heroes-desert-collage.png'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  e.respondWith(fetch(e.request).then(r=>{var cl=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cl));return r}).catch(()=>caches.match(e.request)));
});
