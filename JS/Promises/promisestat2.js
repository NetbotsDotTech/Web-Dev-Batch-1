let promise=new Promise((x,y)=>{
    res=false
    console.log("proccessing on promised")

  setTimeout(() => {
    if(res){
        
        x("congortulatiion you are success")
    }
    else{
        
        y("some thing went wrong")
    }
  }, 2000);
})
console.log(promise)
promise.then((value)=>{
    console.log("res=",value)
})
.catch((value)=>{
    console.log("res=",value)
})