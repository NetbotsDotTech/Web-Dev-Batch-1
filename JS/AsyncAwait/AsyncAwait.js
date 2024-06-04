 async function DisplayData() {
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("Hello from Amazon Server");
    }, 2000);
  });
 let  FullfilledPromise =   await myPromise;
 console.log(FullfilledPromise)
}

DisplayData();