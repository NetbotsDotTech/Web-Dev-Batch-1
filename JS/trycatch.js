var OBJECT = {
    name: "Abdul Ghaffar",
    age: 23,
    email: "abdulkharfaqi30@gmail.com",
    job:  "Student",
};
try {
    let JASON_DATA = JSON.stringify(OBJECT);
    console.log("JSON DATA", JASON_DATA);

let OBJECT_DATA = JSON.parse(JASON_DATA);

console.log("OBJECT_DATA",OBJECT_DATA);

}
catch(e) {
    console.error('Invalid data')
}
