function fun(){
   let promise=  new promise((resolve,rejected)=>{
        setTimeout(()=>{
            console.log("i am a promise")
            resolve("sucses")
            // rejected("some thing went wrong")
        },5000)
    })
}
let p1=fun();
p1.then((res)=>{
    console.log("res",res)

})
// p1.catch((rej)=>{
//     console.log("fail",rej)
// })
