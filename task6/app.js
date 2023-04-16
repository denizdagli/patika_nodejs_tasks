/*koa paketini indirelim.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h1 başlıkları yazdıralım.
port numarası olarak 3000'i kullanalım.*/

const Koa= require('koa');
const Router = require('koa-router'); // router paketini ekledik
const app= new Koa();
const router = new Router(); // router nesnesini oluşturduk
const PORT =3000;


app.use(router.routes()); // router'ı uygulamaya ekle

// index sayfası
router.get('/index', async (ctx) => {
    ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
  });
  
  // hakkimda sayfası
  router.get('/hakkimda',async (ctx) => {
    ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
  });
  
  // iletisim sayfası
  router.get('/iletisim',async (ctx) => {
    ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
  });


app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT} `);
})