

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(response=> console.log(response))
.catch(err=>console.log(err.message))


