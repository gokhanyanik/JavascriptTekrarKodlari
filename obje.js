console.log("merhaba objeler...")

// Obje tanımı

let obje1={};  // birinci tanım yöntemi
let obje2=new Object() // ikinci tanım yöntemi 


let person={
    firstName:"gökhan",
    lastName:"yanik",
    age:25,
    mail:"gokhamyanik@gmail.com"
}

console.log(person)
console.log("***************************************************")
console.log(person.age) // obje içerisindeki bir elemana . ile ulaşırız.
console.log(person.mail)

person.age=35;  // obje içerisindeki bir öğeyi değiştirme..
console.log(person.age)
console.log(person)

person["firstName"]="afife"  // obje içerisindeki bir öğeyi değiştirme ikinci yöntemi...
console.log(person)