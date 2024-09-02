
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








// let firstTask = (callback) => {
//   console.log("Task Loading...!");

//   setTimeout(() => {
//     console.log("First Task");
//     callback()
//   }, 4000);
// }


// let SecondTask = (callback) => {
//   console.log("Task Loading...!");

//   setTimeout(() => {
//     console.log("Second Task ");
//     callback()
//   }, 3000);
// }

// let ThirdTask = (callback) => {
//   setTimeout(() => {
//     console.log("Third Task ");
//     callback()
//   }, 2000);
// }

// firstTask(()=>{
//   SecondTask(()=>{
//     ThirdTask(()=>{
//       console.log("All Done")
//     })
//   })

// })
