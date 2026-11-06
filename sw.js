// Địa chỉ DIP: lưu sẵn ứng dụng trên máy để mở được khi không có mạng.
// build_pwa.py thay số phiên bản mỗi lần đóng gói, máy anh em tự lấy bản mới khi có mạng.
const CACHE = 'dia-chi-dip-202611061820';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-180.png', './icon-192.png', './icon-512.png'];
// tải thêm nếu được (phông chữ); thiếu thì app vẫn chạy
const EXTRA = ['https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Be+Vietnam+Pro:wght@400;500;600&family=JetBrains+Mono:wght@500;700&display=swap'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(async c => {
    await c.addAll(SHELL);
    await Promise.all(EXTRA.map(u => fetch(u).then(r => c.put(u, r)).catch(() => {})));
  }).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('dia-chi-dip-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// lấy bản mới trên mạng, quá `ms` mili giây hoặc lỗi thì thôi
const fetchTimeout = (req, ms) => new Promise((ok, bad) => {
  const t = setTimeout(() => bad(new Error('timeout')), ms);
  fetch(req).then(r => { clearTimeout(t); ok(r); }, err => { clearTimeout(t); bad(err); });
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // trang chính: mở ngay bản đã lưu (kể cả sóng yếu), có mạng thì cập nhật ngầm cho lần mở sau
  if (req.mode === 'navigate') {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match('./index.html');
      const net = fetchTimeout(req, 4000).then(r => { if (r.ok) c.put('./index.html', r.clone()); return r; });
      if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
      return net.catch(() => new Response('<meta charset="utf-8"><p style="font:16px sans-serif;padding:24px">Chưa tải được Địa chỉ DIP. Mở app 1 lần khi có mạng để lưu về máy.</p>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } }));
    }));
    return;
  }
  // phông chữ và file của ứng dụng: dùng bản đã lưu, có mạng thì cập nhật ngầm
  if (url.origin === location.origin || url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req, { ignoreSearch: url.origin === location.origin });
      const net = fetchTimeout(req, 6000).then(r => { if (r.ok || r.type === 'opaque') c.put(req, r.clone()); return r; });
      if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
      return net.catch(() => Response.error());
    }));
  }
});
