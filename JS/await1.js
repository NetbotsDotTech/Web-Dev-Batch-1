//  async function  wait (){
//     let p1 = new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             console.log("I")
//         }, 5000);
//     })



    

//        await p1.then()
//         await p2.then()
// }

// wait()



let p2 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        resolve([12,3,4,5])
        
    }, 7000);
})

p2.then((value)=>{
    console.log(value)
})

console.log(p2)