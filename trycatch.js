console.log("merhaba try/catch metodu....")

let products;
try{
    products.forEach(element => console.log(element))
}catch(error){
console.log("error: "+ error)
}
console.log("hata yönetimi düzgün çalışıyor")