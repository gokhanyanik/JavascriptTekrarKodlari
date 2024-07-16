console.log("merhaba");
 let userName="gökhan";
 let mail="gokhnynk@gmail.com";

let info=`merhaba ${userName} sitemize hoşgeldiniz...
 mail adresiniz${mail}`;


let domain=mail.slice(mail.search('0')+1);
console.log(domain);
//console.log(mail.search('0')+1);
console.log(domain.slice(0,domain.indexOf('.'))); //çktı gmail olması gerekiyor demişler ama burada gokhnynk@gmail çıktısını veriyor ?
//console.log(mail.slice(0,mail.indexOf('.')));
//console.log(mail.indexOf('.'));

console.log(mail.slice(9,14)); // çıktı gmail olarak verildi. ama yukarıdaki işlemde aynı çıktı elde edemedik ?

userName=userName.replace('gökhan','afife');
console.log(userName);
let fullName=`${userName[0].toUpperCase(0)}${userName.slice(1).toLowerCase()}`;
console.log(fullName);
console.log(Math.floor(1.3));
