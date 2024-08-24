
function fetchData(innerFunction) {
  console.log("Fetching Data...!");
  setTimeout(() => {
    console.log("Data fetched");
    innerFunction()
  }, 4000);
}

function processData(innerFunction) {
  console.log("Processing Data...!");
  setTimeout(() => {
    console.log("Data processed");
    innerFunction()
  }, 3000);
}

function saveData(innerFunction) {
  console.log("Saving Data...!");
  setTimeout(() => {
    console.log("Data saved");
    innerFunction()
  }, 2000);
}

fetchData(()=>{
  processData(()=>{
    saveData(()=>{
      console.log("All done!");
    })
  })
})








// // let firstTask = (callback) => {
// //   console.log("Task Loading...!");

// //   setTimeout(() => {
// //     console.log("First Task");
// //     callback()
// //   }, 4000);
// // }


// // let SecondTask = (callback) => {
// //   console.log("Task Loading...!");

// //   setTimeout(() => {
// //     console.log("Second Task ");
// //     callback()
// //   }, 3000);
// // }

// // let ThirdTask = (callback) => {
// //   setTimeout(() => {
// //     console.log("Third Task ");
// //     callback()
// //   }, 2000);
// // }

// // firstTask(()=>{
// //   SecondTask(()=>{
// //     ThirdTask(()=>{
// //       console.log("All Done")
// //     })
// //   })

// // })

// function func1(callback) {
//   setTimeout(() => {
//     console.log("First fucntion calling ............1")
//     callback()
//   }, 5000);
  
// }
// function func2(callback){
//   setTimeout(() => {
//     console.log("Second Function calling ............2")
//     callback()
//   }, 4000);
// }
// function func3(callback) {
//   setTimeout(() => {
//     console.log("Third Function calling..........3")
//     callback()
    
//   }, 3000);
  
// }
// let func4=function (callback) {
//   setTimeout(() => {
//     console.log("Fouring function calling ....................4")
//     callback()
    
//   }, 2000);
  
// }
// func1(()=>{
//   func2(()=>{
//     func3(()=>{
//       func4(()=>{
//         console.log("End function............hello") 
//       })
//      })
//   })
// })
// func4(()=>{
//   func3(()=>{
//     func2(()=>{
//       func1(()=>{
//         console.log("Hello world")
//       })
//     })
//   })
// })