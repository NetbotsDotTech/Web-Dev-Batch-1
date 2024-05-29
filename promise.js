// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve("Hello, World!");
//     }, 2000);
//   });
  
//   promise.then((value) => {
//     console.log(value); 
//     console.error(error);
//   });
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Failed to load data"));
    }, 2000);
  });
  
  promise.catch((error) => {
    console.error(error);
  });
  
  