// producing code : is code that take sometime
//consuming code : is code that must take time for the result
//promises is a object that link producing code and comsuming code 
function myDisplayer(some) {
    myDisplayer= some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  console.log(myPromise)