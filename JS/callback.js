function saif (callback){
    setTimeout(()=>{
            console.log("calling first func")
            callback()
            
    },7000)
}

function sai (callback){
    setTimeout(()=>{
            console.log("calling second func")
            callback()
    },6000)
}

function sa (callback){
    setTimeout(()=>{
            console.log("calling third func")
            callback()
    },5000)
}

function s (callback){
    setTimeout(()=>{
            console.log("calling fourth func")
            callback()
    },4000)
}


saif((callback)=>{
    sai((callback)=>{
        sa((callback)=>{
            s((callback)=>{
                console.log("Hasta Alfo Ago")
            })
        })
    })
})

