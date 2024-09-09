var pass=document.querySelector("#password")
var mesg=document.querySelector("#message")
var str=document.querySelector("#strength")

pass.addEventListener('input',(e)=>{
    if(pass.value.length>0){
        mesg.style.display="block"
    }else{
        mesg.style.display="none"
    }
    if(pass.value.length<4){
        str.innerHTML="Weak"
        pass.style.borderColor="#ff5925"
        mesg.style.color="#ff5925"
    }
    else if(pass.value.length>=4 && pass.value.length<9){
        str.innerHTML="Medium"
        pass.style.borderColor="yellow"
        mesg.style.color="yellow"
    }
    else if(pass.value.length>=9){
        str.innerHTML="Strong"
        pass.style.borderColor="#26d730"
        mesg.style.color="#26d730"
    }
})
