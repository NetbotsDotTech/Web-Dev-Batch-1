let myPromises = new Promise(function (s,y){
    setTimeout(function(){
        console.log("Async task is complete")
        // s({username :"fame hyder", email : "famehyder9999@gmail.com"})

        y({username :"fame hyder", email : "famehyder9999@gmail.com"})

    },1000)
})

myPromises.then(function(user){
     console.log("Resolve")
}).catch(function(user){

        console.log("Reject")

})