// const job = {
//     position: 'cashier',
//     type: 'hourly',
//     isAvailable: true,
//     showDetails() {
//         const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

//         console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
//     }
// };

// const vacancy = Object.create(job);

// vacancy.position = "HR";
// vacancy.showDetails();



// const employees = {
// 	boss: 'Michael',
// 	secretary: 'Pam',
// 	sales: 'Jim',
// 	accountant: 'Oscar'
// };

// const keys = Object.keys(employees);

// console.log(keys);


// Initialize an object
// const session = {
//     id: 1,
//     time: `26-July-2018`,
//     device: 'mobile',
//     browser: 'Chrome'
// };

// // Get all values of the object
// const values = Object.values(session);

// console.log(values);


// // Initialize an object
// const operatingSystem = {
//     name: 'Ubuntu',
//     version: 18.04,
//     license: 'Open Source'
// };

// // Get the object key/value pairs
// const entries = Object.entries(operatingSystem);

// console.log(entries);

// Initialize an object
// const name = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// // Initialize another object
// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// // Merge the objects
// const character = Object.assign(name, details);

// console.log(character);


// Initialize an object
const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = 'wwwwwww'
newUser.active = true;

console.log(newUser);