let myPromise = new Promise(
  function (fullfilled, Rejected) {
    let Promised = false
    setTimeout( ()=> {
      if (Promised){
        fullfilled("successful!!");
      }else{
        Rejected("Something went Wrong");
      }
    }, 2000);
}
);

myPromise.then( (value)=> {
  console.log( value);
  console.log("King is win")
}).catch((error)=>{
  console.log(error);
  console.log("Quen is fail")
})


// let fun = ()=>{

//   console.log("Hello World")
// }

// fun();