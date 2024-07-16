console.log("merhaba fonksiyonlar...")

// Fonksiyonlarda birkaç farklı yöntem vardır . Aşagıda bunları örneklerle açıklayalım...


// 1-Parametresiz Fonksiyonlar.
function parametreszFonksiyon() {
    // Bu bölüme yapılmasını istediğimiz işlemleri yazıyoruz.

    console.log("parametresiz fonksiyon örneği..")
};

parametreszFonksiyon();

//2-Parametreli Fonksiyonlar.
function parametreliFonksiyon(parametre1, parametre2) {
    console.log("birinci parametre: " + parametre1 + " ikinci parametre: " + parametre2)
}
parametreliFonksiyon(3, 5);

//3-Değişkene Atanan Fonksiyonlar.

const degiskeneAtanan = function (a, b) {
    //console.log(a+b)
    return a + b;
}

//degiskeneAtanan(3,8);
console.log(degiskeneAtanan(2, 8))

//4-Arrow fonksiyonları

let arrowFonksiyonu = (a, b) => { }   // genel kullanım şekli 

let kare = a => a * a ;   // Eğer tek parametre ve tek işlemden oluşucaksa parantezleri kullanmadan da yazabiliriz.

console.log(kare(5));


// while döngüsü örneği..

