// Step 1: Create an object with various data types
let myObject = {
    name: 'John',
    age: 30,
    isActive: true,
    city: 'New York'
  };
  // Convert object values to an array
  let valuesArray = Object.values(myObject);
  console.log('Initial values array:', valuesArray);
  // Step 2: Convert the array values to uppercase (only applicable for strings)
  let upperCaseArray = valuesArray.map(value => {
    if (typeof value === 'string') {
      return value.toUpperCase();
    }
    return value;
  });
  console.log('Uppercase values array:', upperCaseArray);
  // Step 3: Store the boolean value of the object in a variable as a string
  let isActiveString = String(myObject.isActive);
  console.log('Boolean as string:', isActiveString);
  // Step 4: Print the variable's data type and ensure it is a string
  console.log('Data type of isActiveString:', typeof isActiveString);
  