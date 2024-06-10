const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  // Create Source Object
  const person2 = {firstName: "Anne",lastName: "Smith"};
  const person3 = {heights: "7 feets",chest: "33 inch"};
  
  // Assign Source to Target
  let object = Object.assign(person1, person2,person3);
  console.log("Object=",object)

  let text = Object.entries(person1);

  console.log("Entries=",text)

  let values = Object.values(person1);
  console.log("Values=",values)

  let keys = Object.keys(person1);
  console.log("Keys=",keys)

  let Create = Object.create(person1);
  console.log("Keys=",Create)
