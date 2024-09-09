// //promise
// const promiseOne=new Promise((resolve,reject)=>{
//     // resolve() it comes first the settime
//     setTimeout(()=>{
//         // console.log("I am a promise")
//     })
//     // resolve() it is also come before

// },1000)
// promiseOne.then(()=>{
//     // console.log("I am consuming the promise")
// })




// const promiseTwo=new Promise((resolve,reject)=>{
  
//     setTimeout(()=>{
//         // console.log("I am a promise")
//         resolve()
//     },1000)
   

// })
// promiseTwo.then(()=>{
//     // console.log("I am consuming the promise")
// })

//  new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("I am third promise")
//         resolve()
        
//     }, 1000);
//  }).then(()=>{
//     console.log("Third Promise consume")
//  })

//  const promisefour=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({userName:"Basit",email:"example@gmail.com"})
//     }, 2000);
//  })
//  promisefour.then((user)=>{
//     console.log("user:",user)
//     return user
    
//  })

//  let promiseFive=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error=true
//         if(error){
//             resolve({userName:"Basit",pass:1234})
//         }else{
//             reject("Something went Wrong!")
//         }
//     }, 2000);
//  })

//  promiseFive
//  .then((user)=>{
//     console.log(user)
//     return user.userName
//  })
//  .then((user)=>{
//     console.log(user)
//  })
//  .catch((error)=>{
//     console.log(error)
//  })

//  let promiseSix=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let error=true
//         if(error){
//             resolve({userName:"Basit",pass:1234})
//         }else{
//             reject("Something went Wrong!")
//         }
//     }, 2000);
//  })

//  promiseSix
//  .then((user)=>{
//     console.log(user)
//     return user.userName
//  })
//  .then((user)=>{
//     console.log(user)
//  })
//  .catch((error)=>{
//     console.log(error)
//  })
//  .finally(()=>{
//     console.log("The promise is either resolve or rejected")
//  })

const promiseSeven=new Promise((resovle,reject)=>{
    setTimeout(() => {
        let error=true
        if(!error){
            resovle({
                userName:"KubraBatool",
                password:"12345"
            })
        }else{
                reject("Something may be wrong execute again")
            }
           
        
    }, 3000);
})
async function ConsumepromiseSeven(){
    try {
        const response=await promiseSeven
    console.log(response)
    
        
    } catch (error) {
        console.log(error)
    }
}
ConsumepromiseSeven()

//Mostly do its part-1
async function allUser() {
    try {
        const response=await fetch("url")
        const data=await response.json()
        console.log(data)
        
    } catch (error) {
        console.log(error)
        
    }
    
}
allUser()

// part-2
fetch("url").then((response)=>{
    return response.json()
}).then((val)=>{
    console.log(val)
})
.catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("I am complete")
})
