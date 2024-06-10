// Step 1: Create an object with different data types
const myObject = {
    number: 42,
    string: "Hello",
    boolean: true,
    array: [1, 2, 3],
    nestedObject: { key: "value" }
};

// Log the initial object
console.log("Initial object:", myObject);

// Convert the object into an array of its values
const myArray = Object.values(myObject);

// Log the array
console.log("Array from object values:", myArray);

// Step 2: Create a copy of the object to work with
const uppercaseObject = { ...myObject };

// Change string values to uppercase
for (const key in uppercaseObject) {
    if (typeof uppercaseObject[key] === 'string') {
        uppercaseObject[key] = uppercaseObject[key].toUpperCase();
    }
}

// Log the object with uppercase strings
console.log("Object with uppercase strings:", uppercaseObject);

// Step 3: Convert boolean values to strings in the uppercaseObject
for (const key in uppercaseObject) {
    if (typeof uppercaseObject[key] === 'boolean') {
        uppercaseObject[key] = String(uppercaseObject[key]);
    }
}

// Log the object with boolean values as strings
console.log("Object with boolean values as strings:", uppercaseObject);

// Check and log the data types
for (const key in uppercaseObject) {
    console.log(`Type of ${key}:`, typeof uppercaseObject[key]);
}
