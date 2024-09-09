 function helloWorld() {
  return new Promise((resolve )=>{
setTimeout(() => {
  resolve("Succesfull")
}, 3000);

  });
}
async function Fun1() {
  const msg = await  helloWorld();
  console.log("Message from  function 1:", msg);
}
async function Fun2() {
  const msg =  await helloWorld();
  console.log("Message from  function 2:", msg);
}

Fun1()
Fun2()



