
//callback function

// function FetchingApi1(callback) {
//     console.log("Fetching data 1 .........");
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then((res)=>res.json())
//         .then((res)=>console.log(res.json))
//         setTimeout(() => {
//             console.log("Data 1 fetched : ")
//             callback();
//         }, 2000);
// }

// function FetchingApi2(callback) {
//     console.log("Fetching data 2 .........");
//     fetch('https://jsonplaceholder.typicode.com/todos/2')
//         .then((res)=>res.json())
//         .then((res)=>console.log(res.json))
//         setTimeout(() => {
//             console.log("Data 2 fetched : ")
//             callback();
//         }, 2000);
// }

// function FetchingApi3(callback) {
//     console.log("Fetching data 3 .........");
//     fetch('https://jsonplaceholder.typicode.com/todos/3')
//         .then((res)=>res.json())
//         .then((res)=>console.log(res.json))
//         setTimeout(() => {
//             console.log("Data 3 fetched : ")
//             callback();
//         }, 2000);
//     }

// FetchingApi1(()=>{
//     FetchingApi2(()=>{
//         FetchingApi3(()=>{
//             console.log("All done")
//         })
//     })
// });


// promises function

// function fetchApi(){
//     let url = 'https://jsonplaceholder.typicode.com/todos/1'
//     console.log("fetching api 1.....")
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then((url)=>url.json())
//             .then((url)=>console.log(url.json))
//         resolve("resolve successfull...")
//         resolve();
//         }, 3000);
//     })
// }

// function fetchApi1(){
//     let url = 'https://jsonplaceholder.typicode.com/todos/2'
//     console.log("fetching api 2.....")
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             fetch('https://jsonplaceholder.typicode.com/todos/2')
//             .then((url)=>url.json())
//             .then((url)=>console.log(url.json))
//         resolve("resolve successfull...")
//         resolve();
//         }, 3000);
//     })
// }

// fetchApi(()=>{
//     fetchApi1(()=>{

//     })
    
// })

//async await


function fetchApi(){
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    console.log("fetching api 1.....")
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((url)=>url.json())
            .then((url)=>console.log(url.json))
        resolve("resolve successfull...")
        resolve();
        }, 3000);
    })
}

function fetchApi1(){
    let url = 'https://jsonplaceholder.typicode.com/todos/2'
    console.log("fetching api 2.....")
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then((url)=>url.json())
            .then((url)=>console.log(url.json))
        resolve("resolve successfull...")
        resolve();
        }, 3000);
    })
}

async function All(){
    await fetchApi();
    await fetchApi1();
}

