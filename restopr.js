
 
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  
  // a, "one"
  // b, "two"
  // manyMoreArgs, ["three", "four", "five", "six"] <-- an array
  