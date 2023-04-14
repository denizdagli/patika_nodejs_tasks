/*createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.*/

const http = require("http"); 
const port = 5000; 
const server = http.createServer((req, res) => { 
    const url = req.url; 
    if (url === "/") { res.writeHead(200, { "Content-Type": "text/html" }); 
    res.write("<h2>index sayfasina hosgeldiniz</h2>"); 
} 
else if (url === "/hakkimda") { 
    res.writeHead(200, { "Content-Type": "text/html" }); 
    res.write("<h2>hakkimda sayfasina hosgeldiniz</h2>"); 
} 
else if (url === "/iletisim") { 
    res.writeHead(200, { "Content-Type": "text/html" }); 
    res.write("<h2>iletisim sayfasina hosgeldiniz</h2>");
 } 
 else { res.writeHead(404, { "Content-Type": "text/html" }); 
 res.write("<h1>404 SAYFA BULUNAMADI</h1>"); } 
 res.end(); 
}); 



server.listen(port, () => { console.log(`Sunucu port ${port} de başlatıldı.`); });