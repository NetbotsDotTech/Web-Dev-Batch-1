// promise 
/*
There are three state of promises
    ->pending
    ->fullfill
    ->rejected
*/
const promiseOne=new Promise((resolve,reject)=>{
  
  setTimeout(()=>{
    console.log("I am a setTimeout function ")
    

  },1000)
})
promiseOne.then(
    console.log("I am resolve")
)