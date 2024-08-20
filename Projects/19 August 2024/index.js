alert("If do you see then press Ok...")
const inputInfo=document.querySelector('input').innerText
document.querySelector('.submit').addEventListener('click' ,()=>{
    alert(`Name ${inputInfo}`)
})