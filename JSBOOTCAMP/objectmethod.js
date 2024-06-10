// object method object.create
// Initialize an object with properties and methods
const job = {
   position: 'cashier',
   type: 'hourly',
   isAvailable: true,
   showDetails() {
       const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

       console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
   }
};

// Use Object.create to pass properties
const barista = Object.create(job);

barista.position = "barista";
barista.showDetails();
 const course={
     lecture :10,
     section:3,
     title:"javascript",
     // nested object 
    notes: {
       introduction: "wellcome to JS course"
    },
     enrolment(){
        console.log(" you are successfully enrolled")
     }
   }
   console.log(course)
   course.enrolment()
 // factory function
  function createCuores(){
     const course1={
         lecture :10,
       section:3,
         title:"javascript",
// nested object 
         notes: {
           introduction: "wellcome to JS course"
      },
         enrolment(){
            console.log(" you are successfully enrolled but panding")
         }
        }
        return course1;
 }
 const course1=createCuores()
 course1.enrolment()
 console.log(course1)
//object method
// Create target object
const person1 = {
   firstName: "John",
   lastName: "Doe",
   age: 50,
   eyeColor: "blue"
 };
 
 // Create Source Object
 const person2 = {firstName: "nadeem",lastName: "ashraf"};
 const person3={age:40,eyeColor:"black"}
 
 // Assign Source to Target
 console.log(Object.assign(person1, person2,person3));