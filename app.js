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


const mongoose = require('mongoose');
const express = require('express');
const ejs = require("ejs");
const app = express();
const Blog = require('./model/Blog');
const connectDB = require('./db/connection')
require('dotenv').config()


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({
   extended: true
}));
app.use(express.json());

app.get('/', async (req, res) => {
   const blogs = await Blog.find({}).sort('-dateCreated');
   res.render('index', {
      blogs
   })
})

app.get('/add_post', async (req, res) => {
   res.render('add_post')
})

app.get('/about', async (req, res) => {
   res.render('about')
})




app.get('/:id([0-9a-fA-F]{24})', async (req, res) => {
   const blogID = req.params.id;
   const blog = await Blog.findById(blogID);
   res.render('individual', {
      blog
   })
})



















app.post('/blog', async (req, res) => { // form'un içinde 'action'a verdiğim isim ile aynı işmi kullandık : "/blog"
   const {
      title,
      description
   } = req.body; // destructive yapısı olsa dahi, isimler aynı olmak zorunda otherwise 'undefined' :/:/::/
   const blog = await Blog.create({
      title,
      description
   });
   res.redirect('/');
})
app.get('*', (req, res) => {
   res.send("404 ! SAYFFA BULUNAMADI !");
});

const port = 3000;
connectDB(process.env.MONGO_URl).then(result => {
   app.listen(port, () => {
      console.log(`Server running on ${port}`)
   })
}).catch(error => {
   console.log(error);
})