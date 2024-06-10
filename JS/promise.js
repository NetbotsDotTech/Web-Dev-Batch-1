
async function myDisplayer(){
  return new Promise ((resolve)=>{
    setTimeout(()=>{
      resolve("Hellow world")
    },2000);
  })
}
const FirstFunction = function(){
  const result = myDisplayer();
  console.log("FirstFunction:",result);
}

const SecondFunction = function(){
  const result = myDisplayer();
console.log("secondFunction:",result);
};

const ThirdFunction = function(){
  const result = myDisplayer();
  console.log("ThirdFunction:",result);
};
FirstFunction()
SecondFunction()
ThirdFunction()