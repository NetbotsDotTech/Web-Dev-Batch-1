// let button=document.querySelector("#stop")
// const changeName=document.querySelector(".myname")
// const change=setTimeout(()=>{
//     console.log("basit")
//     changeName.innerHTML="king"
// },2000)
// button.addEventListener('click',()=>{
//     clearTimeout(change)
//     console.log("Stoop ...........")
// })

const arr = [1, 2, 3, 4, 5]
let button = document.querySelector("#stop")
const changeName = document.querySelector(".myname")
const change = setInterval(() => {
    arr.push(0)
    console.log(arr)

}, 2000)
button.addEventListener('click', () => {
    clearInterval(change)
    console.log("Stoop ...........")
})


