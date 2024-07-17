console.log("merhaba fetchApi örneği..")

// fetchApi örneği:

// get işlemi
const adress = "https://jsonplaceholder.typicode.com/users"
fetch(adress)
    .then(res => res.json())
    .then(data => console.log(data))


// post işlemi

let payload = {
    title: "Blok Title",
    body: "lorem ipsum",
    userId: 1
}

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: { "Content-type": "application/json;charset=UTF-8" }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

    // put işlemi 

    let payload2={
        id:1,
        title:'fooo',
        body:'bar',
        userId:1,
    }
    fetch("https://jsonplaceholder.typicode.com/posts/1",{
        method:"PUT",
        body:JSON.stringify(payload2),   // put edilecek verinin tipini değiştirdik.
        headers:{"Content-type": "application/json;charset=UTF-8"}  // gönderilecek verinin tipini belirttik.
    })

    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))