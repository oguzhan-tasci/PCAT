// Prettier'i kullanmak için şunları yaptık : 
//-> Extension'u indirdik
//-> Sonra 'CTRL + SHIFT + P' ile prettier'i seçtik ve dosyamızı 'select'ledik
//-> Daha sonra prettier'in dokumantasyonundaki 'npm install'i yaptık
//-> Bazı ek isteklerimizi '.prettierrc'e ekledik. Örneğin : semi : true --> noktali virgul eklemesi icin  "singleQuote": false -> tek tırnak kullanması icin
// -> Böylelikle her 'SHIFT + ALT+F' yaptıgımızda documantasyon düzelecektir.

// Bazı dosyaların 'repository'de olmasını istemeyiz , onların değişikliğini takip etmek istemeyiz. Bunun için 'gitignore' kullanmamız gerekir.
// Google'a 'gitignore' yazıyoruz ve karşımıza 'toptal'ın bir sitesi çıkıyor.
// 'node' yazarak nodeJs için oluşuturulan '.gitignore' dosyasını indiyoruz.

// Sayfamızı github'a pushlamamız gerekir. Bunun için :
// -> git status (status durumuna göz atmamız için , değiştirilen dosyaları görmek için)
// -> git add . (takip edilen , değiştirilen tüm dosyaları eklemek için)
// -> git commit -m 'Workspace created'
// -> git push (En sonunda da github'a pushlamak için)

// Uygulamamızı sürekli aç-kapat yapmak yerine otomatik olarak yenilenmesini istiyoruz.
// Bu yüzden 'nodemon' package'ini indireceğiz. ---> npm i --save-dev nodemon
// Daha sonra 'package.json'ın içindeki 'scripts' içine ekliyoruz : "start" : nodemon app.js
// Artık terminale 'nodemon app.js' yazdığımız zaman server otomatik olarak başlıyacak ve her değişikliği algılayacak.


const express = require('express');
const ejs = require("ejs");
const app = express();


app.set("view engine","ejs");

app.use(express.static("public"));

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/add_post', (req, res) => {
    res.render('add_post');
 });

 app.get('/about', (req, res) => {
    res.render('about');
 });

 app.get('*', (req, res) => {
    res.send("404 ! SAYFA BULUNAMADI !");
 });

const port = 3000;

app.listen(port, () => {
    console.log(`Sunucu ${port} içerisinde calistirildi`);
})