//Here's the complete program that applies all the mentioned methods on the given trainee data:
let name = "saqlain ";
let details = ["saqlain", [232, 433, "zaheer",], 26, true]
let objDetails = { 
name:"saqlain",
fatherName:"Zaheer",
age:26,
isMale: true,
}

console.log(objDetails.name)

//array of trainees name
let trainees = [
  "aliya",
  "malika",
  "mehmooda",
  "mudeera",
  "shahina",
  "fatima",
  "qamar",
  "akbar",
  "zakir",
  "shehbaz",
  "javed",
  "tehzeeb",
];

// Using String methods


let traineeString = trainees.join(", "); // Convert array to a string separated by commas
console.log("\n Apply join  ");
console.log(traineeString);

let slicedTraineeString = traineeString.slice(16, 8); // Slice a part of the string
console.log("\n Apply slice");
console.log(slicedTraineeString);

let substringTraineeString = traineeString.substring(0, 5); // Get a substring of the string
console.log("\n Apply substring");
console.log(substringTraineeString);

let replacedTraineeString = traineeString.replace("aliya", "Aliya Ejaz"); // Replace a string with another string
console.log("\n Apply replace  ");
console.log(replacedTraineeString);

let upperCaseTraineeString = traineeString.toUpperCase(); // Convert string to uppercase
console.log("\n Apply toUpperCase ");
console.log(upperCaseTraineeString);

let lowerCaseTraineeString = traineeString.toLowerCase(); // Convert string to lowercase
console.log("\n Apply toLowerCase ");
console.log(lowerCaseTraineeString);

let concatenatedTraineeString = traineeString.concat(" are trainees."); // Concatenate a string
console.log("\n Apply concat ");
console.log(concatenatedTraineeString);

let trimmedTraineeString = traineeString.trim(); // Trim whitespace from the beginning and end of the string
console.log("\n Apply trim ");
console.log(trimmedTraineeString);

let trimmedStartTraineeString = traineeString.trimStart(); // Trim whitespace from the beginning of the string
console.log("\n Apply trimStart  ");
console.log(trimmedStartTraineeString);

let trimmedEndTraineeString = traineeString.trimEnd(); // Trim whitespace from the end of the string
console.log("\n Apply trimEnd  ");
console.log(trimmedEndTraineeString);

let paddedTraineeString = traineeString.padStart(traineeString.length + 4, "*"); // Pad the string with a specified character from the beginning
console.log("\n Aplly Pad Start  ");
console.log(paddedTraineeString);

let paddedEndTraineeString = traineeString.padEnd(
  traineeString.length + 4,
  "-"
); // Pad the string with a specified character from the end
console.log("\n Apply padEnd ");
console.log(paddedEndTraineeString);

let charAtTraineeString = traineeString.charAt(0); // Get the character at a specific index of the string
console.log("\n Apply CharAt ");
console.log(charAtTraineeString);

let charCodeAtTraineeString = traineeString.charCodeAt(0); // Get the ASCII value of the character at a specific index of the string
console.log("\n Apply charCodeAt");
console.log(charCodeAtTraineeString);

let splitTraineeString = traineeString.split(","); // Split the string into an array based on a specified separator
console.log("\n Apply Split  ");
console.log(splitTraineeString);

// Using Array methods

let traineesArray = [
  "aliya",
  "malika",
  "mehmooda",
  "mudeera",
  "shahina",
  "fatima",
  "qamar",
  "akbar",
  "zakir",
  "shehbaz",
  "javed",
  "tehzeeb",
];

traineesArray.push("Amina"); // Add an element to the end of the array
console.log("\n Apply push ");
console.log(traineesArray);

traineesArray.unshift("Khadija"); // Add an element to the beginning of the array
console.log("\n Apply Unshift ");
console.log(traineesArray);

traineesArray.pop(); // Remove the last element from the array
console.log("\n Apply Pop  ");
console.log(traineesArray);

traineesArray.shift(); // Remove the first element from the array
console.log("\n Apply Shift  ");
console.log(traineesArray);

let slicedTraineesArray = traineesArray.slice(3, 7); // Slice a part of the array
console.log("\n Apply Slice ");
console.log(slicedTraineesArray);

let isArray = Array.isArray(traineesArray); // Check if the variable is an array
console.log("\n Apply is Array  ");
console.log(isArray);

let arrayLength = traineesArray.length; // Get the length of the array
console.log("\n Apply Array Length  ");
console.log(arrayLength);

let filteredTraineesArray = traineesArray.filter(
  (trainee) => trainee.charAt(0) === "m"
); // Filter elements based on a condition
console.log("\n Apply Filter");
console.log(filteredTraineesArray);

let mappedTraineesArray = traineesArray.map((trainee) => trainee.toUpperCase()); // Map elements to a new array based on a condition
console.log("\n Apply Map  ");
console.log(mappedTraineesArray);

console.log("\n Apply Switch  ");


switch (
  traineesArray[0] // Use a switch statement
) {
  case "aliya":
    console.log("First trainee is Aliya");
    break;
  case "malika":
    console.log("First trainee is Malika");
    break;
  default:
    console.log("First trainee is not Aliya or Malika");
    break;
}

console.log("\n For Loop ");
let result = "";
for (let i = 0; i < traineesArray.length; i++) {
  result += traineesArray[i] + " ";
}
console.log(result);
