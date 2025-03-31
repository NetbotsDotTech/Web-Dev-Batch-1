function DsiplayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello World!");
    }, 2000);
  });
}
const FirstFunction =async function () {
  const result =await DsiplayMessage();
  console.log("FirstFunction :", result);
};
const SecondFunction = async () => {
  const result =  await DsiplayMessage();
  console.log("SecondFunction :", result);
};

FirstFunction();
SecondFunction();
