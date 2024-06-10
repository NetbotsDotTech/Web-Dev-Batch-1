let mypromise=new Promise(function(resolve,reject){
    x=2
    if(x===0){
        resolve("sucess")
    }
    else{
      reject("some thing went wrong")  
    }
})
mypromise.then((f)=>{
    console.log(f)
})
.catch((u)=>{
console.log(u)
})