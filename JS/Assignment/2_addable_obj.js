// Step 1: Create the initial object
const car = {};

// Step 2: Define a property 'make' and make it non-writable
Object.defineProperty(car, 'Name_of_car', {
    value: 'Toyota',
    writable: false,
    configurable: false,
    enumerable: true
});


// Step 3: Define a property 'model' and make it non-writable
Object.defineProperty(car, 'Model', {
    value: 'Updated TX 2024',
    writable: false,
    configurable: false,
    enumerable: true
});

// Step 4: Add new properties
car.color = 'White';

// Step 6: Attempt to modify an existing property
car.Name_of_car = 'Honda';
car.Model = "v8"
console.log(car.Name_of_car); // Output: Toyota (modification failed)

// Step 7: Add another new property
car.owner = 'FAME Hyder';
console.log(car.owner); // Output: Alice


console.log(car)