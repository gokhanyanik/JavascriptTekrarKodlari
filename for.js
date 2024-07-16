// for döngüsüne örnek olarak tanımladığımız bir diziyi for ile ekrana yazdıralım..

let dizi = ["elma", "armut", "kiraz", "çilek"];

for (i = 0; i < dizi.length; i++) {
    console.log(dizi[i]);
}


//break/continue örneği....break:sonlandır/ continue:devam ettir

//ilk örnek break örneği çıktısında 5 i dahil etmez. 0,1,2,3,4 vericek çünkü kontrolü yazmadan önce yapıyoruz 
for(i=0;i<10;i++){
    
    if(i==5){
        break;
    }

    console.log(i)
}

// Bu örnekte ise 5 i dahil edicek çünkü ilk önce yazdırılır daha sonra kontole eder.
for(i=0;i<10;i++){
    console.log(i)
    if(i==5){
        break;
    }
}
console.log("****continue******")


// ikinci örnek continue örneği ve çıktısı 0,1,2,3,4,6,7,8,9 olacak 5 i yazmayıp es geçicek
for(i=0;i<10;i++){
    if(i==5){
        continue
    }
    console.log(i)
}