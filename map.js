console.log("merhaba map metodu")

const sayilar=[1,2,3,4,5,6]
console.log(sayilar)
//Şimdi sayılar dizi elemanlarının üç katından oluşan bir yeni dizi oluşturalım. Bunu map içinde arrow fonk. ile yapıcaz.
const ucKati=sayilar.map((sayi)=>sayi*3)
console.log(ucKati)

// ya da üçe bölüp yeni bir dizi oluşturalım..
const uceBolum=sayilar.map((sayi)=>sayi/3)
console.log(uceBolum)
