// filter metodu ile dizi elemanlarını döngüye alıp koşulu sağlayanları yeni bir dizi olşturarak çıktı verir.

const myCar=["mercedes","bmw","subaru","passat","audi"];
 // mycar dizisinden harf sayısı 4 e eşit ve küçük olanları alalım
 const newCar=myCar.filter(item=>item.length<=4)// buradaki item,herhangi bir değişken ismi. Farklı bir isim verilebilir.
 console.log(newCar);//bmw,audi çıktısını vericek.