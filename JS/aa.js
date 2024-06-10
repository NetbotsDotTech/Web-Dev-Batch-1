function saif (j){
    setTimeout(()=>{
            console.log("calling first func")
            j()
//console.log("g",j)
            
            
    },7000)
}

function sai (j){
    setTimeout(()=>{
            console.log("calling second func")
            j()
    },6000)
}

function sa (j){
    setTimeout(()=>{
            console.log("calling third func")
            j()
    },5000)
}

function s (j){
    setTimeout(()=>{
            console.log("calling fourth func")
            j()
    },4000)
}


saif((l)=>{
    sai((j)=>{
        sa((j)=>{
            s((j)=>{
                console.log("Hasta Alfo Ago")
            })
        })
    })
})
