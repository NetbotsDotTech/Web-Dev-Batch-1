// Object with data types
const person = {
    name: "Shahid",
    age: 20,
    isStudent: true
};

// Convert object values to an array
const Array1 = Object.values(person);
console.log(Array1);

// Convert string values to uppercase
console.log(person.name.toUpperCase());

// Store Boolean value of object in a variable as string
const boolString =String(person.isStudent)
console.log(boolString); // "True"
console.log(typeof boolString); // "string"
