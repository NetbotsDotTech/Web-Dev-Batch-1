const studentInfo = {
    Name: "Abdullah",
    F_Name: "Kareem",
    Age: 23,
    subject: ["Math", "Urdu", "English", "Computer"],
    isFemale: false
};
let uperCase = {};
let booleanString
const isArray = Array.isArray;
for (var key in studentInfo) {
    const value = studentInfo[key];
    if (typeof studentInfo[key] === 'string') {
        uperCase[key] = studentInfo[key].toUpperCase();
    }
    else if (isArray(value)) {       
            uperCase[key] = value.map(item => typeof item === 'string' ? item.toUpperCase() : item); 
    }
    else if (typeof value === 'boolean') {
        booleanString = value.toString();
        uperCase[key]=studentInfo[key];
    }
    else {
        uperCase[key] = studentInfo[key];
    }
}

console.log('Uper case', uperCase);
console.log("Boolean type is :",typeof (booleanString));


const ObkectToArray = Object.entries(studentInfo).map(([key, value]) => ({ [key]: value }));

console.log('Obect into array:', ObkectToArray);