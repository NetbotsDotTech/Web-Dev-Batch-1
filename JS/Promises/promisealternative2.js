 function saif(){
  return  new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("data fatch")
        resolve();   
        },3000 );
    })
}
 function saif2(){
    new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("data process")
        resolve();   
        },2000 );
    })
}
async function performedoperation(){
await saif();
    saif2()
}
performedoperation()