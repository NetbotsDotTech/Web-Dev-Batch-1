
// let firstTask = new Promise((resolve)=>{
//   setTimeout(() => {
//     resolve("First Task");
//     resolve()
//   }, 4000);
// })


// let SecondTask =  new Promise((resolve)=>{
//     setTimeout(() => {
//       resolve("Second Task");
//     }, 3000);
//   })

  
// let ThirdTask =  new Promise((resolve)=>{
//   setTimeout(() => {
//     resolve("Third Task");
//   }, 2000);
// })


// firstTask
// .then((a)=>console.log(a))
// .then()
// .then(ThirdTask())
// .then(()=>{console.log("All Done")})


let fetchData= ()=> {
  return new Promise((resolve) => {
      console.log("Fetching Data...!");
    setTimeout(() => {
      console.log("Data fetched");
      resolve();
    }, 2000); 
  });
}

function processData() {
  return new Promise((resolve) => {
      console.log("Processing Data...!");
    setTimeout(() => {
      console.log("Data processed");
      resolve();
    }, 2000); 
  });
}

function saveData() {
  return new Promise((resolve) => {
      console.log("Saving Data...!");
    setTimeout(() => {
      console.log("Data saved");
      resolve();
    }, 2000); 
  });
}

fetchData()
  .then(() => processData())
  .then(() => saveData())
  .then(() => {
    console.log("All done!");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });



 