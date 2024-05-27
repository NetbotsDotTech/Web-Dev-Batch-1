// // Create Target Object
// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Create Source Object
//   const person2 = {firstName: "Anne",lastName: "Smith"};
  
//   // Assign Source to Target
//   const person3= Object.assign(person1, person2);
//   console.log(person3)
// Initialize an object
// const user = {
// 	username: 'AzureDiamond',
// 	password: 'hunter3'
// };

// // Freeze the object
// const newUser = Object.freeze(user);

// newUser.password = '******';
// newUser.active = true;

// console.log(newUser);
// Initialize an object
// const user = {
// 	username: 'AzureDiamond',
//     email:"kamal@gmail.com",
// 	password: 'hunter2'
// };

// // Seal the object
// const newUser = Object.seal(user);

// newUser.password = '*******';
// newUser.username= "kamal";
// newUser.active = true;


// console.log(newUser);

// Initialize an object
const operatingSystem = {
    name:'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);