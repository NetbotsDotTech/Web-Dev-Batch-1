async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
 let  FullfilledPromise =  await myPromise;
 console.log(FullfilledPromise)
}

myDisplay();