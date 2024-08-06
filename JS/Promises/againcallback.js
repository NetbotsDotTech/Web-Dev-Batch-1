function sakinaBatool(innerFunction) {
    console.log("Sakina is Comming..........")
    setTimeout(() => {
        console.log("Sakina Comes")
        innerFunction()
    }, 3000);
    
}
function khadija(innerFunction) {
    console.log("Khatija is Coming........")
    setTimeout(() => {
        console.log("Api Aschoo comes")
        innerFunction()
        
    }, 2000);

    
}
function kubra(innerFunction) {
    console.log("Kubra is coming...............")
    setTimeout(() => {
        console.log("Kubra is comes.......")
        innerFunction();
        
    }, 1000);
    
}
sakinaBatool(()=>{
    khadija(()=>{
        kubra(()=>{
            sakinaBatool(()=>{
                khadija(()=>{
                    kubra(()=>{
                        console.log("Hello sisters.............")
                    })
                })
            })
        })
       
    })
})
