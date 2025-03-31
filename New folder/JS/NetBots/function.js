// function Fun1 (){
//     console.log("Hello ")
// }

// let Fun2 = function  (){
//     console.log("Hello 1 ")
// }


// let Fun3 = ()=>{console.log("Hellow")}


// Fun1()
// Fun2()
// Fun3()

// const sentence = "Hello, world!";
// const words = sentence.split(" ");

// console.log(words)


// const mixedArray = [
//     { name: "Saqlain" },
//     42,
//     "hello",
//     { hobby: "programming" },
//     13,
//     "world"
//   ];

//   console.log("mixedArray",mixedArray);
  
//   const slice1 = mixedArray.slice(0, 3); 
//   const slice2 = mixedArray.slice(3);   
//   const reversedSlice2 = slice2.map(item =>
//     typeof item === "string" ? item.split("").reverse().join("").toUpperCase() : item
//   );
//   const concatenatedArray = slice1.concat(reversedSlice2);
//   const copiedArray = [...concatenatedArray];
//   console.log("copiedArray",copiedArray);
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


function collectBooleans(obj) {
    let booleans = [];
    for (let key in obj) {
        if (typeof obj[key] === 'boolean') {
            booleans.push(obj[key]);
        } 
    }
    return booleans;
}

let booleanValues = collectBooleans(myObj);
console.log(booleanValues);//Object 
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
};//Object 
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
};//Object 
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