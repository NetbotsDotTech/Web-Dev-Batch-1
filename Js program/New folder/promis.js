let mypromis=new Promise(function(Resovle,Reject){
    let x=0
    setTimeout(() => {
        if(x==0){
            Resovle("Successfully....")
        }
        
    }, 3000);
    


});

mypromis.then(
    function(value){
        console.log("Print",value)
    },
    function(value){
        console.log("Print",value)
        
    }
)
mypromis