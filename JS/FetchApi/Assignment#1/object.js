// Object
let car = {
    make: 'Toyota',
    model: 'Camry'
  };
  console.log('Initial car:', car); 
  // Reassigning the car object
    car.make= 'Honda';
    car.model='Civic';
  console.log('Reassigned car:', car); 
  
  // Object with const:
  const person = {
    name: 'John',
    age: 30
  };
  person.city = 'New York';
  
  console.log('Person after adding new property:', person);
  Object.freeze(person);
  person.name = 'Jane'; // This will not change the name
  person.age = 25; // This will also not change the age
  
  console.log('Person after attempting modifications:', person);