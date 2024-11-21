
//Object decleration

let person = {
    name : "Muhammad Nadeem",
    age : 22,
    id : 101,
    phone_no : "03421713449",

};
console.log(person);

//Nested Object

 myObj = {
    name:"John",
    age:30,
    myCars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  };
  console.log(myObj);
  console.log(myObj.myCars);

  //example assign method
  let Myobj2 = {
    name: "ali",
    age: 22,
    DOB: 2005
};

let newObject = Object.assign({}, Myobj2);
console.log(newObject);

 

