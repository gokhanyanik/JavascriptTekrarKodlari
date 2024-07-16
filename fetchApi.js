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