var myObject = {
  name: "John Doe",
  age: 15,
  email: "test@test.com",
  job: "Auditor",
};
try {
  let userJSON = JSON.stringify(myObject);
  console.log("JSON Data" ,userJSON);
  let userObj = JSON.parse(myObject);
  console.log("Object Data", userObj);
} catch (e) {
  console.error(`Invalid  data!`);
}
