function fetchingdata(innerfunction) {
    console.log("Fetching data...")
    fetch('https://fakestoreapi.com/products/1')
        .then(res => res.json())
        .then(json => console.log(json))
    setTimeout(() => {
        console.log("First Data Fetched "+"\n\n")
        innerfunction();
    }, 1000);
}

function Processingdata(innerfunction) {
    console.log("Fetching data...")
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => console.log(json))
    setTimeout(() => {
        console.log("Second Data Fetched"+"\n\n")
        innerfunction();
    }, 1000);
}
function Savedata(innerfunction) {
    console.log("Fetching data...")
    fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(res => res.json())
    .then(json => console.log(json))
    setTimeout(() => {
        console.log("Third Data Fetched"+"\n\n")
        innerfunction();
    }, 1000);
}

fetchingdata(() => {
    Processingdata(() => {
        Savedata(() => {
            console.log("All done...!")
        })
    })
})


//       <============ Promises ===============>

// function fetchingdata() {
//     return new Promise((resolved, rejected)=>
//     {
//         console.log(" Fetching First data...")
//         fetch('https://fakestoreapi.com/products/1')
//             .then(res => res.json())
//             .then(json => console.log(json))
//         setTimeout(() => {
//             console.log(" Data Fetched")
//             resolved();
//         }, 1000);
//     })
// }


function Processingdata() {
    return new Promise((resolved)=>{
    console.log("Fetching Second data...")
    fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => console.log(json))
    setTimeout(() => {
        console.log(" Data Fetched")
        resolved();
    }, 1000);}
    )
}
// }
// function Savedata() {
//     return new Promise((resolved)=>{
//     console.log("Fetching Third data...")
//     fetch('https://fakestoreapi.com/products/category/jewelery')
//     .then(res => res.json())
//     .then(json => console.log(json))
//     setTimeout(() => {
//         console.log(" Data Fetched")
//        resolved();
//     }, 1000);})
// }

// async function Dataformate(){
//     try{
// fetchingdata(()=>{
//     Processingdata(()=>{
//         Savedata(()=>{})
//     })
// })
//     console.log("All Done...!")
// }catch(error){
//     console.log("Showing Some "+error)
// }}

// Dataformate();


// const fetchpromise =fetch("https://fakestoreapi.com/products/category/jewelery");
// fetchpromise.then(Response=>{
//     return Response.json();
// }).then(people=>{
//     const names=people.map(person=>person.names).join("\n");
//     console.log(names);
// })

// const fetchData = async () => {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products/category/jewelry");
//         const data = await response.json();
//         const names = data.map(item => item.name).join("\n");
//         console.log(names);
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// };

// fetchData();

async function exampleFetch() {
    const response = await fetch('https://reqres.in/api/users/2');
    const json = await response.json();
    console.log(json);
}

exampleFetch()