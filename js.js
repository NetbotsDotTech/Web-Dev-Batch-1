function MyFunc(a,b,c,others)
{
console.log(a,b,c,others);
}

MyFunc(1,2,3,4);

let myPromise = new Promise(function(myResolve, myReject) {    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
