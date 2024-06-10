// const promiseOne=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("promise one is loading.........")
//         resolve()
//     }, 3000);
// })
// promiseOne.then(()=>{
//     console.log("Pormise one is consumed.......")
// })
// //practice 2
// const promisetwo=new Promise((resolve,reject)=>{
//     resolve()
// })
// promisetwo.then(()=>{
//     console.log("Pormise one is consumed.......")
// })
// //practice 3
// const promisethree=new Promise((resolve,reject)=>{
//     // resolve() // it is not the place of resolve
//     setTimeout(() => {
//         console.log("promise one is loading.........")
//         resolve()// it is the best place of resolve
//     }, 3000);
//     // resolve()// it is also not a place of resolve
// })
// promisethree.then(()=>{
//     console.log("Pormise one is consumed.......")
// })
//practice 4
// new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Promis four is loading ..........")
//         resolve()
//     }, 2000);
// }).then(()=>{
//     console.log("Promise four is consumed....")
// })
//Practice-5
// let promisefour=new Promise((resolve,reject)=>{
//     setTimeout(() => {
        
//         resolve([23,"basit",[3,4,56,3]])
//     }, 2000);
// })
// promisefour.then((value)=>{
//     console.log(value)
//     console.log(value[2])
// })
//practice-6

// const promisefive=new Promise((resolve,reject)=>{
//     let username="basit"
   
//         setTimeout(() => {
//             if(username=="basi"){
//             console.log("Information ...........")
//             resolve({
//                 age:23,
//                 address:"skardu",
//                 profission:"Student",
//                 goal:null
//             })
//         }

//             else{
//                 reject("rejected...............oh")
//             }
//         }, 5000);

//     })

// promisefive.then((value)=>{
//     console.log(value)
//     console.log(value.address)

// }).catch((value)=>{
//     console.log(value)
// }).finally(()=>console.log("Finally ends"))

let promiseSix=new Promise((resolve,reject)=>{
    setTimeout(() => {
        const number=1008
        if(number==100){
            resolve({
                username:"Apo_Ali 911",
                password:"12345",
                address:"Gound"

            })
            
        }
        else if(number==101){
            console.log("Resolve Section Section :")
            resolve({
                username:"Apo Abdu",
                password:"Basit911",
                address:"Koardo"
            })

        }
        else{
            console.log("Rejected Section :")
            reject({
                
                username:"AbduPong",
                password:"Apo Zaman"                
            })
        }
        
    }, 3000);
})
// .then((value)=>{
//     console.log(value)
// })
// .catch((value)=>{
//     console.log(value)
// })
//alternative of then and catch is async await
// async function promiseSixConsume() {
//let value=await promiseSix /*this block of code does not proper work in the rejected state to solve this problem we use trycatch build in function */ 
//     console.log(value)
// }
// promiseSixConsume()
// async function consumePromiseSix() {
//     try {
//         let value=await promiseSix
//         console.log(value)
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// consumePromiseSix()



let promiseSeven=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let work="Complete"
        if(work=="Compdlete"){
            resolve("You take you Check on the desk")
        }
        else{
            reject("You don't take the check,rejected")
        }
        
    }, 2000);
})
async function receiveCheck() {
    
    try {
        let check=await promiseSeven
        console.log(check)
    } catch (error) {
        console.log(error)
    }
    
}
receiveCheck()