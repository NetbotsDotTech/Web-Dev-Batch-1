function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}


async function msg1() {
  const msg =  helloWorld();
  console.log("Message from msg1 function:", msg);
}
async function msg2() {
  const msg =  helloWorld();
  console.log("Message from msg2 function:", msg);
}



msg1();
msg2();
