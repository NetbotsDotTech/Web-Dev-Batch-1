let promis1= new Promise((resolve)=>{
    console.log("Promis is fetching........")
    setTimeout(() => {
        console.log("Hi I am coming.......")
        resolve("Baist")
    },4000 );
})
console.log("Hello ...............this is Promise.............")
promis1.then((value)=>{
    console.log(value)
})