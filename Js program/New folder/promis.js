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

const promisefive=new Promise((resolve,reject)=>{
    let username="basit"
    if(username=="basit"){
        setTimeout(() => {
            console.log("Information ...........")
            resolve({
                age:23,
                address:"skardu",
                profission:"Student",
                goal:null
            })
        }, 5000);

    }
    else{
        reject("rejected...............oh")
    }
})

promisefive.then((value)=>{
    console.log(value)
    console.log(value.address)

}).catch((value)=>{
    console.log(value)
}).finally(()=>console.log("Finally ends"))