// Step 1: Declare and assign objects

// First object (can be modified)
const obj1 = {
    number: 42,
    string: "Hello",
    boolean: true,
    array: [1, 2, 3],
    nestedObject: { key: "value" }
  };
  
  // Log initial obj1
  console.log("Initial obj1:", obj1);
  
  // Modify obj1
  obj1.number = 100;
  obj1.array.push(4);
  obj1.nestedObject.key = "new value";
  
  // Log modified obj1
  console.log("Modified obj1:", obj1);
  
  // Second object (cannot be modified)
  const obj2 = {
    number: 42,
    string: "Hello",
    boolean: true,
    array: [1, 2, 3],
    nestedObject: { key: "value" }
  };
  
  // Freeze obj2 to prevent modification
  Object.freeze(obj2);
  
  // Log initial obj2
  console.log("Initial obj2:", obj2);
  
  // Attempt to modify obj2 (will not change due to freeze)
  try {
    obj2.number = 100;
    obj2.array.push(4);
    obj2.nestedObject.key = "new value";
  } catch (error) {
    console.error("Cannot modify obj2:", error);
  }
  
  // Log obj2 after attempted modification
  console.log("Attempted modification obj2:", obj2);
  
  // Third object (new values can be added, old values should not be modified)
  const obj3 = {
    number: 42,
    string: "Hello",
    boolean: true,
    array: [1, 2, 3],
    nestedObject: { key: "value" }
  };
  
  // Log initial obj3
  console.log("Initial obj3:", obj3);
  
  // Function to add new values to obj3 without modifying old values
  function addNewValue(object, key, value) {
    return { ...object, [key]: value };
  }
  
  // Modify obj3 using the function
  const newObj3 = addNewValue(obj3, 'newKey', 'newValue');
  
  // Log newObj3
  console.log("New obj3:", newObj3);
  
  // Log original obj3 to show it has not been modified
  console.log("Original obj3 after modification:", obj3);