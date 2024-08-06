// const setfunc=setTimeout(()=>{
//     console.log("basit")
// },5000)

// function sayName() {
//     console.log("basitAli")
//     document.querySelector('h1').innerText="KIng Apo Ali"
    
// }
// setTimeout(sayName,3000)

// function stop(){
//     document.querySelector("#stop").addEventListener('click',()=>{
//        document.querySelector('h1').innerText="Allah"
//     })
    
// }
// clearTimeout(stop)
//Mini project on setTimeOut
//  const changeText=function change() {
//     document.querySelector("h1").innerText='Baist Ali Basit'

   
//  }
//   const time=setTimeout(changeText, 4000);
  
//   document.querySelector('#stop').addEventListener('click',()=>{
//     console.log('Stopped')
//       clearTimeout(time)

// })
// document.querySelector("#start").addEventListener('click',()=>{
//     console.log('Start')
//     setTimeout(changeText,4000)
// })
//Mini project On setInterVal
const interval=function setInterVal() {
    document.querySelector('h1').innerText="King of Skardu"

}

//    setInterval(interval,1000)
document.querySelector("#start").addEventListener('click',()=>{
    console.log("change")

    setInterval(interval,1000)

})
 
