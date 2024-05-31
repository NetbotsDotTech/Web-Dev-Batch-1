//async make a function and return a promesis:
//await make a function and return wait for promises:
async function myFunction(){
 let myPromises=new Promise((resolve, reject) => {
    setTimeout( function(){
        console.log("hello world");},4000)
 } )
 myFunction= await myPromises
}
myFunction()
//**** */
function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("slow");
        console.log("slow promise is done");
      }, 2000);
    });
  }
resolveAfter2Seconds() 