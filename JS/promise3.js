let mypromises = new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Job Done")
        resolve([1,2,3,4,5])
    })
})

mypromises.then(function(user){
    console.log(user)
})