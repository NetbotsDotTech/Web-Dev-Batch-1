
//  <===========1st========>
var obj1 = {
    name: "Fatima",
    age: 10,
    hobbies: ["reading", "cooking"],
    address: "Street#10 House#156",
    details: {
        height: 175,
        weight: 70.5
    }
}

console.log(Object.entries(obj1))

let mixarr = Object.values(obj1,);
console.log(mixarr)


//     <======== 2nd ===============>

// Original object with mixed values
let myObject = {
    numberValue: 10,
    stringValue: "Hello",
    booleanValue: true,
    arrayValue: [1, 2, 3],
    nestedObject: {
        Number: 5,
        String: "",
        Boolean: false,
        Array: [4, 5, 6]
    }
};

//   <========Values in UpperCase=========>

function convertToUpperCase(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            obj[key] = obj[key].toUpperCase();
        } else if (Array.isArray(obj[key])) {
            obj[key].forEach((element) => {
                if (typeof element === 'string') {
                    element = element.toUpperCase();
                } else if (typeof element === 'object') {
                    convertToUpperCase(element);
                }
            });
        } else if (typeof obj[key] === 'object') {
            convertToUpperCase(obj[key]);
        }
    }
}

convertToUpperCase(myObject);
console.log(myObject);

//   <========Keys$Values in UpperCase=========>

function convertKeysToUpperCase(obj) {
    let newObj = {};
    for (let key in obj) {
        let newKey = key.toUpperCase();
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[newKey] = convertKeysToUpperCase(obj[key]);
        } else if (Array.isArray(obj[key])) {
            newObj[newKey] = obj[key].map((element) => {
                if (typeof element === 'object') {
                    return convertKeysToUpperCase(element);
                }
                return element;
            });
        } else {
            newObj[newKey] = obj[key];
        }
    }
    return newObj;
}

let updatedObject = convertKeysToUpperCase(myObject);
console.log(updatedObject);


//boolean value of object in a variable as a string
var Objects = {
    name: "Sania",
    age: 40,
    isStudent: true,
    hobbies: ["reading", "cooking"],
    address: "Street#10 House#156",
    details: {
        height: 65,
        weight: 23.5
    }
}






//data type of boolean as a string 
let typestring = typeof Objects.isStudent;
console.log(typestring)

//      <=====2nd method=======>
let myvar = Objects.isStudent;
let typeofbool = typeof myvar;
console.log("Type of isStudent : " + typeofbool);

//      <=====3rd method=======>
let boolToString=Objects.isStudent.toString();
console.log("The value of boolean =  "+boolToString+"\n")



// Print All boolean values of object

var Object2 = {
    name: "Sania",
    age: 40,
    isStudent: true,
    key1:true,
    key2:false,
    key3:false,
    key4:true,
    hobbies: ["reading", "cooking"],
    address: "Street#10 House#156",
    details: {
        height: 65,
        weight: 23.5
    }
}
function prntbool(Object2){
    console.log("All boolean values in an object are : ")

    for(let key in Object2){
        if(typeof Object2[key]==="boolean"){
            console.log(key+" : "+Object2[key]);
        }
    } 
}
prntbool(Object2)

