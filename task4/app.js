/*FS File System Modülü
Node.js FS Modülü kullanarak CRUD işlemleri yapacağız.

employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
Bu veriyi okuyalım. (READ)
Bu veriyi güncelleyelim.
Dosyayı silelim.*/
//********* */

//modül projeye aktarılır
const fs = require("fs");

//dosya oluşturlması ve içeriye veri girilmesi
fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}','utf8',(err)=>{
    if (err) console.log(err);
});
//dosyanın okunması
fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});
fs.writeFile('employees.json', '{"durum":"Bu dosyanın güncellenmiş icerigidir"}','utf8', (err) => {
    if (err) throw err;
    console.log('Dosya güncellendi');
});

fs.readFile('employees.json','utf8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});
  
//dosyanın silmesi
/*fs.unlink('employees.json',(err)=>{
    if(err) console.log(err);
});*/