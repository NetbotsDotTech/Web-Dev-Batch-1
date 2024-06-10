let promise=new Promise(function (resolve,rejecte){
    let promised=false
    if(promised){
        resolve("success")
    }
    else{
        rejecte("something went wrong")
    }
})
promise.then(function(value){
    console.log(value)
})
.catch(function(value){
    console.log(value)
})