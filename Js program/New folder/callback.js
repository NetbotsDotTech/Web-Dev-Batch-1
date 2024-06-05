// //Practice-1
// function sum(a,b) {
//   console.log(a+b)
  
// }
// let calculator=function(a,b,callback){
//   callback(a,b)
// }
// //Practice-2
// calculator(2,3,sum)

// calculator(2,3,(a,b)=>{
//   console.log(a+b)
// })
// //Practice-3
// function printfunc() {
//   console.log("Hi I am Basit")
  
// }
// setTimeout(printfunc,1000)// it print after 1second
// //Practice-4
// let func1=function (callback) {
//   setTimeout(() => {
//     console.log("First function .......1")
//     callback()
    
//   }, 1000);
  
// }

// let func2=function (callback) {
// setTimeout(() => {
//   console.log("Second function......2") 
//   callback()
// }, 2000); 
// }
// function func3(callback) {
//   setTimeout(() => {
//     console.log("Third function.....3")
//     callback()
    
//   },3000);
  
// }
// func3(()=>{
//   func2(()=>{
//     func1(()=>{
//       console.log("Done.............")
//     })
//   })
// })
// // Practice-5
// function infoSon(callback){
 
//   let no=71103
//   if(no==71103){
//     setTimeout(() => {
//       let detail={
//         fname:"Basit",
//         sname:"ali",
//         add:"kushmarah gound"
//       }
//       console.log(detail)
//       callback()
//     }, 10000);
//   }
//   else{
//     setTimeout(()=>{
//       console.log("CINC is wrong")
//     },1500)
//   }
// }
// let infofather=function(callback){
//   let CINC=71104
//   if(CINC==71104){
//     setTimeout(() => {
//       const detail={
//         fname:"Ali",
//         lname:null,
//         add:"Skardu",
//         ph_No:3419468911
//       }
//       console.log(detail)
//       callback()
      
//     }, 2000);
//   }
// }

// infofather(()=>{
//   infoSon(()=>{
//     console.log("End...............")
//   })
// })
//Practice-6
// function one(callback) {
//   setTimeout(() => {
//     console.log(1)
//   }, 1000);
//   callback()
  
// }
// function tow(callback) {
//   setTimeout(() => {
//     console.log(2)
    
//   }, 2000);
//   callback()
  
// }
// function three(callback) {
//   setTimeout(() => {
//     console.log(3)
//   }, 3000);
//   callback()
  
// }
// function four(callback) {
//   setTimeout(() => {
//     console.log(4)
//   }, 4000);
//   callback()
  
// }

// function five(callback) {
//   setTimeout(() => {
//     console.log(5)
//   }, 5000);
//   callback()
  
// }

// function six(callback) {
//   setTimeout(() => {
//     console.log(6)
//   }, 6000);
//   callback()
  
// }

// function seven(callback) {
//   setTimeout(() => {
//     console.log(7)
//   }, 7000);
//   callback()
  
// }

// function eight(callback) {
//   setTimeout(() => {
//     console.log(8)
//     callback()
//   }, 8000);
  
// }

// function nine(callback) {
//   setTimeout(() => {
//     console.log(9)
//     callback()
//   }, 9000);
  
// }

// function ten() {
//   setTimeout(() => {
//     console.log(10)
//     // callback()
//   }, 1000);
  
// }

// ten(()=>{
//   nine(()=>{
//     eight(()=>{
//       seven(()=>{
//         six(()=>{
//           five(()=>{
//             four(()=>{
//               three(()=>{
//                 tow(()=>{
//                   one(()=>{
//                     console.log("Successfully print all the function.........Hurrah!")
//                   })
//                 })

//               })
//             })
//           })
//         })
//       })
//     })
//   })
// })

function eleven(callback){
  setTimeout(() => {
    console.log("first")
    callback(value)
  }, 1000);
  
}
function twelve(callback) {
  setTimeout(() => {
    console.log("Second")
    callback(value)
  }, 2000);
  
}
//by default js execute anything as it is
// eleven(()=>{
//   twelve(()=>{
//     console.log("finised......")
//   })
// })
twelve(()=>{
  eleven(()=>{
    console.log("finished")
  })
})