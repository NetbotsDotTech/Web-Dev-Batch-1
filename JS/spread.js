const fruits = ["apple", "banana"];
const vegetables = ["carrot", "lettuce"];
const proteins = ["chicken", "tofu"];

const food = [...fruits, ...vegetables, ...proteins];
console.log('Spread 3 arrays :',food); 

const person = { name: "Alice", age: 25 };
const job = { role: "Developer", company: "Tech Corp" };
const location = { city: "New York", country: "USA" };




const mergObj = { ...person, ...job, ...location };
console.log('spread 3 onjects :',mergObj); 

