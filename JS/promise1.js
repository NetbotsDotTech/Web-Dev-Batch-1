let myPromises = new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})

myPromises.then(function(){
     console.log("Promise consumed")
})


new Promise(function (resolve , reject){

    setTimeout (function(){
        console.log("Second promse is complete")
        resolve()
    },1000)

}).then(function(){
    console.log("Job Done")
})