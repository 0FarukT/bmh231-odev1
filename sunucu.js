const http = require('http');
const dayjs = require('dayjs');

const PORT = 8000;

const server = http.createServer((req, res) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

    if (req.method !== 'GET') {
        res.writeHead(405, {
            'Content-Type': 'text/plain; charset=utf-8',
            'Allow': 'GET'
        });
        res.end('Yöntem Kabul Edilmiyor');
        return;
    }

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Ana Sayfa</h1><p><a href="/hakkimda">Hakkımda Sayfasına Git</a></p>');
    } 
    else if (req.url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Hakkımda</h1><p>Merhaba, ben Bilgisayar Mühendisliği öğrencisiyim. Web geliştirme üzerine çalışıyorum.</p>');
    } 
    else if (req.url === '/api/ders') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        const dersBilgisi = {
            kod: "BMH231",
            ad: "Web Programlama",
            gun: "Cuma"
        };
        res.end(JSON.stringify(dersBilgisi));
    } 
    else if (req.url === '/api/agep') {
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        const bugun = dayjs();
        const hedefTarih = dayjs('2026-11-01');
        const kalanGun = hedefTarih.diff(bugun, 'day');

        const agepBilgisi = {
            teslimTarihi: "01.11.2026",
            kalanGun: kalanGun
        };
        res.end(JSON.stringify(agepBilgisi));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Sayfa bulunamadı');
    }
});

server.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor...`);
});