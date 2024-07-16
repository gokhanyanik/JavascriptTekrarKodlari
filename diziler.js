console.log("merhaba diziler...")

// javascripte dizi tanımlama ve kullanım şekilleri:

//1-dizi tanımlama 

let dizi1 = [1, 2, 3, 4, 5, 6]
let dizi2 = [1, "ahmet", true, dizi1]   // dizi içerisinde number string boolean ve dizi türünden öğeler tanımlayabiliriz...
let dizi3 = [];  // Boş dizi tanımlanabilir.
console.log(dizi2);


// 2-dizi ile ilgili işlemler
console.log(dizi2.length);  // dizi içerindeki eleman sayısını verir.
console.log(dizi2[3]);  //istenilen index numarasındaki öğeyi yazdırır.Burada 3 numaralı index yazdırılır.
console.log(dizi2[3].length);  // dizi içerisindeki dizinin öğe sayısını verir.
console.log(dizi2[0]);  // dizinin ilk elemanı
console.log(dizi2[dizi2.length - 1])  // dizinin son elemanı


console.log(typeof (dizi2));  // dizi2 değişkeninin dizi olup olmadığını kontrol ediyor ancak bu yöntem object olarak çıktı veriyor.
console.log(Array.isArray(dizi2));  // bu satırın çıktısı ise true olucaktır.  


// 3-Diziye eleman ekleme/çıkarma işlemleri

let ekleDizi = [1, 2, 3, 4, 5, 6, 7, 8, 9]

ekleDizi.push("eklenen");   // Sona ekleme yapar.
console.log(ekleDizi);

ekleDizi.unshift("eklenen 2");  // Başa ekleme yapar.
console.log(ekleDizi);

ekleDizi.pop();   // sondan eleman siler. İstersek çıkarılan elemanı yakalayıp bir değişkende tutabiliriz: let cikanOge=ekleDizi.pop();
console.log(ekleDizi);

ekleDizi.shift();  // Baştan eleman siler.
console.log(ekleDizi);


// splice metodu( diziden belirlenen öğeleri çıkarır ya da eleman ekleme yapar.)

let yeniDizi = ["mazda", "subaru", "mercedes", "bmw", "nissan", "opel"];
console.log(yeniDizi);
let spliceEdilen = yeniDizi.splice(1, 3);  // birinci indexten başlayıp 3 eleman çıkarır.
console.log("splice edildikten sonra diziden çıkarılan elemanlar: " + spliceEdilen)
console.log("Splice işleminden sonraki dizinin son hali: " + yeniDizi);


yeniDizi.splice(yeniDizi.length-1,0,"tofaş")  // splice ile eleman ekleme yaptık.
console.log(yeniDizi)



// indexof('value') (Dizi içerisindeki bir öğenin index numarasını bulur)

console.log(yeniDizi.indexOf('mazda'));  // 0
console.log(yeniDizi.indexOf('nissan'));  // 1
console.log(yeniDizi.indexOf('opel'));   // 2 
console.log(yeniDizi.indexOf('subaru'))  // -1 çıktı verir çünkü dizide boyle bir eleman bulunmuyor.

// slice metodu ile dizi kopyalama
let copyyeniDizi = yeniDizi;
console.log(copyyeniDizi);
copyyeniDizi = yeniDizi.slice();
console.log("*******************");
console.log(copyyeniDizi);

copyyeniDizi.pop()
console.log(copyyeniDizi)
console.log(yeniDizi)


//...ES6 metodu ile dizi kopyalama

let es6yeniDizi = [...yeniDizi];
console.log(es6yeniDizi);

//toString ve join ile dizi içerisindeki öğeleri string ifadeye çevirme...
console.log("++++++++++++++++++++++++++++++");
console.log(yeniDizi.toString());  // toString ile
console.log(yeniDizi.join("-"))    // join ile yaparken parantez içine yazılacak ifade dizi öğeleri arasına konucak ifadeyi belirtir.
                                    // buradaki örnekte dizi elemanları arsına - koyarak console'a yazdırı.//mazda-nissan-opel  gibi.

//...ES6 ile iki diziyi birleştirme...
let ilkDizi=[1,2,3,4];
let sonDizi=["a","b","c"] 
console.log(ilkDizi+" "+ sonDizi)

let topDizi=[...ilkDizi, ...sonDizi ]
console.log(topDizi);