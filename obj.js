// // Object create()
// const person = {
//     name: "John",
//     age: 30,
//     showDetails: function() {
//       console.log(`Name: ${this.name}, Age: ${this.age}`);
//     }
//   };
  
//   const employee = Object.create(person);
//   employee.id = 123;
//   employee.department = "Sales";
  
//   employee.showDetails(); // Output: "Name: John, Age: 30"
//   console.log(employee.id); // Output: 123
//   console.log(employee.department); // Output: "Sales"

// Object.key()
// const person = {
//     name: "John",
//     age: 30
//   };
  
//   const keys = Object.keys(person);
//   console.log(keys); // Output: ["name", "age"]

  // Object.values()
  const person = {
    name: "John",
    age: 30
  };
  
  const values = Object.values(person);
  console.log(values); // Output: ["John", 30]
  
  // Object.entries()
  const person1 = {
    name: "John",
    age: 30
  };
  
  const entries = Object.entries(person1);
  console.log(entries); // Output: [["name", "John"], ["age", 30]]
  
  // Object.assign()
  const person2 = {
    name: "John",
    age: 30
  };
  
  const person3 = {
    address: "123 Main St"
  };
  
  const merged = Object.assign(person2, person3);
  console.log(merged); // Output: {name: "John", age: 30, address: "123 Main St"}
  
  // Object.freeze()
  const person4 = {
    name: "John",
    age: 30
  };
  
  Object.freeze(person4);
  person4.name = "Jane";
  console.log(person4); // Output: {name: "John", age: 30}

  // Object.seal()
  const person5 = {
    name: "John",
    age: 30
  };
  
  Object.seal(person5);
  person5.name = "Jane";
  console.log(person5); // Output: {name: "Jane", age: 30}

  // Object.isSealed()
  const person6 = {
    name: "John",
    age: 30
  };
  
  const isSealed = Object.isSealed(person6);
  console.log(isSealed); // Output: false

  // Object.isFrozen()
  const person7 = {
    name: "John",
    age: 30
  };
  
  const isFrozen = Object.isFrozen(person7);
  console.log(isFrozen); // Output: false

  // Object.isprototypeof()
  const person8 = {
    name: "John",
    age: 30
  };
  
  const isPrototypeOf = Object.isPrototypeOf(person8, person8);
  console.log(isPrototypeOf); // Output: true