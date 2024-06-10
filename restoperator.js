function multiply(multiplier, ...theArgs) {
    return theArgs.map((element) => multiplier * element);
  }
  
  const arr = multiply(2, 15, 25, 42);
  console.log(arr)