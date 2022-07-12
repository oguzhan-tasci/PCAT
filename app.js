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




const fn = function () {
    console.log("Function working");
}