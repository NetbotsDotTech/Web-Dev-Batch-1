
 
// function myFun(a, b, ...manyMoreArgs) {
//     console.log("a", a);
//     console.log("b", b);
//     console.log("manyMoreArgs", manyMoreArgs);
//   }
  
 // myFun("one", "two", "three", "four", "five", "six");
  
  // a, "one"
  // b, "two"
  // manyMoreArgs, ["three", "four", "five", "six"] <-- an array
  
  let a1=[1,2,3,...4,5];
  let [a,b,c , ...rest]=a1
  let [e,f]=rest
  console.log(rest)
  console.log(a)

