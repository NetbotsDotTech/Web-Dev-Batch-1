// fetch('https://fakestoreapi.com/products/1')
//   .then(
//   // view the  complete content of the response
//   response => response.json())
//   .then(
//   //access the actual data 
//   data => console.log(data))

//   fetch('https://dummyjson.com/products/1')
//     .then(response => {
//   console.log(response.status) // check the status code of the response object
//   console.log(response.statusText) // an interpretation of the code 
//   return response.json() // read the actual data from body of the response object
// })
//     .then(data => console.log(data))
//     .catch(err => console.error(err));



function Add(callback) {
    console.log("Fetching Data...!");
    setTimeout(() => {
        fetch('https://fakestoreapi.com/products/1')
            .then(
                response => response.json())
            .then(
                data => console.log(data))
        callback()
    }, 3000);
}

function mul(callback) {
    console.log("Fetching Data...!");
    setTimeout(() => {
        fetch('https://dummyjson.com/products/1')
            .then(
                response => response.json())
            .then(
                data => console.log(data))
        callback()
    }, 1000);
}


Add(() => {
    mul(() => {
        console.log("All done!");
    })
})