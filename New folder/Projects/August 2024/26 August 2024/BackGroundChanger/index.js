let button=document.querySelectorAll('.box')
let body=document.querySelector('body')
button.forEach(function(btn){
btn.addEventListener('click',(e)=>{
    console.log("hello")
    if(e.target.id==='grey'){
        body.style.background=e.target.id
    }
    if(e.target.id==="white"){
        body.style.background="white"
    }
    if(e.target.id==="yellow"){
        body.style.background=e.target.id
    }
    if(e.target.id==='red'){
        body.style.background=e.target.id
    }
    if(e.target.id==="pink"){
        body.style.background="pink"
    }
})
})