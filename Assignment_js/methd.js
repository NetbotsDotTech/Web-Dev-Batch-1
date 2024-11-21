//Object 
let myObj = {
    name: "Muhammad Nadeem",
    age: 22,
    isFollow: true,
    percentage: 75.5,
    newObj: {
        remarks: true,
        cgpa: 3.5,
        institution: "Netbots"
    }
};

console.log(myObj);

let arr = Object.values(myObj);
console.log(arr);

//try to pront dataType of boolean
console.log(typeof(myObj.isFollow));
//store a boolean value in a variable and print typeOf variable that is string
let follow = "true";
console.log(typeof(follow));
//Try to onvert all values in uppercase
console.log(myObj.name.toUpperCase());
console.log(myObj.newObj.institution.toUpperCase());//object inside object 
//try to print all boolean value in an object
function collectBooleans(obj) {
    let booleans = [];
    for (let key in obj) {
        if (typeof obj[key] === 'boolean') {
            booleans.push(obj[key]);
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            booleans = booleans.concat(collectBooleans(obj[key]));
        }
    }
    return booleans;
}

let booleanValues = collectBooleans(myObj);
console.log(booleanValues);


