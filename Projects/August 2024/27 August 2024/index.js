let scorllContainer=document.querySelector(".gallery")
let nextBtn=document.querySelector("#nextbtn")
let backbtn=document.querySelector("#backbtn")

scorllContainer.addEventListener("wheel",(e)=>{
    e.preventDefault()
    scorllContainer.scrollLeft+=e.deltaY

})
nextBtn.addEventListener("click",()=>{
    scorllContainer.style.scorlBehavior="smooth"
    scorllContainer.scrollLeft+=900;
})
backbtn.addEventListener("click",()=>{
    scorllContainer.style.scrolBehavior="smooth"

    scorllContainer.scrollLeft-=900
})