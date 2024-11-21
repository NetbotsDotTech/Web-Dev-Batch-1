//             < =========Functions==========>

// 
function sum(a, b) {
    return a + b;
  }
  
  const numbers = [5, 10];
  const resultApply = sum.apply(null, numbers);
  console.log(resultApply); 
  
  // bind() 
  const person = {
    firstName: "Saira",
    lastName: "Batool",
  };
  
  function FUN() {
    console.log(`Welcome, ${this.firstName} ${this.lastName}!`);
  }
  
  const boundGreet = FUN.bind(person);
  binddFUN(); 
  
  // call() example
  const resultCall = sum.call(null, 3, 7);
  console.log(resultCall); a``
  
  // toString() example
  const number = 42;
  const numberAsString = number.toString();
  console.log(numberAsString); 

  //Arrow function
  const add=function(a,b){
    return a+b;
  }
  const addArrow=(a,b)=>a+b;
  console.log(addArrow(10,20));


  //Invoke function

  function funinvoke(name){
    return `hello,${name}`;
  }
  const message=funinvoke("Saira");
  console.log(message);