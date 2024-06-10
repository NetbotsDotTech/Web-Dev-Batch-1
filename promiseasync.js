const helpPromise=function(){
    const promise=new Promise(function(resolved,rejected){
        let x="Saira";
        let y="Saira";
        if(x===y){
            resolved("String is same");
        }else{
            rejected("Strings are not same")
        }}
    );
    return promise;
};
async function damipromise (){
    try{
        let message=await helpPromise();
        console.log("Matched : "+message);
    }catch(error){
        console.log("Error : "+error)
    }
}

damipromise();
