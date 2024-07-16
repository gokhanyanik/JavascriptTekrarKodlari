console.log("if/else konu örnekleri");

let userName=prompt("kullanıcı adınızı giriniz...");

if(userName){
    console.log(`kullanıcı adınız: ${userName}`)
}else{
    console.log("eksik ya da hatalı bilgi giriş yaptınız")
}


// ternary operatörü ile if/else döngüsü oluşturulabilir.
// kullanım şekli : KOŞUL ? 2.PARAMETRE : 3.PARAMETRE 
let age=prompt('yaşınızı giriniz...')

age>=18? console.log("ehliyet alabilirsiniz.."):console.log("ehliyet alamazsınız...");
