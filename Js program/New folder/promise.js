// const promiseOne=new Promise((resolve,reject)=>{
  
//     setTimeout(() => {
        
//         console.log("Task1 Loading........")
//         resolve()
       
        
//     }, 2000);
    

// })
// promiseOne.then(()=>{
//     console.log("Task1 Completed........")
// })
 
// new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//         console.log("Task2 Loading........")
//         resolve()
        
//     }, 3000);
// }).then(()=>{
//     console.log("Task2 is Complete.........")
// })

// let promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(() => {
        
//         resolve([12,34,"Basit ali"])
        
//     }, 1000);
// })

// promiseThree.then((value)=>{
//     console.log(value)
// })

// let promisefour=new Promise((resolve,reject)=>{
//     setTimeout(() => {
        
//         resolve({
//             fname:"Basit",
//             lname:"Ali",
//             age:22,
//             profission:"Student"
//         })
        
//     }, 4000);
// })

// promisefour.then((value)=>{
//     console.log(value)
// })


const promisefive=new Promise((resolve,reject)=>{
    setTimeout(() => {
        let password=12345
        if(password==12345){
            console.log("Your password Match........")
            resolve({
                fatherName:"Ali",
                age:45,
                address:"Kushmarah gound"
            })

        }else{
            reject("Your Password is not match....Please try again")
            
        }
    }, 3000);
})

promisefive.then((obj)=>{
    console.log(obj.fatherName)
}).catch((obj)=>{
    console.log(obj)
})
// promisefive.catch((obj)=>{
//     console.log(obj)

// })

