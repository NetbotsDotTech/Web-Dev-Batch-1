 let p1 =   new  Promise((resolve,reject)=>{

          setTimeout(() => {
            console.log("I")
        }, 5000);
    })



let p2 = new Promise((resolve,reject)=>{

        setTimeout(() => {
            
            console.log("Love")
            
        }, 1000);
    })


await p1.then(function(){
    console.log("Hi")
})
p2.then()