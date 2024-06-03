
// //array of trainees name
// let trainees = [
//     "aliya",
//     "malika",
//     "mehmooda",
//     "mudeera",
//     "shahina",
//     "fatima",
//     "qamar",
//     "akbar",
//     "zakir",
//     "shehbaz",
//     "javed",
//     "tehzeeb",
//   ];
  
// // console.log(trainees)
// //   let traineeString = trainees.join(" , "); // Convert array to a string separated by commas
// //   console.log("\n Apply join  ");
// //   console.log(traineeString);
  
// //   let slicedTraineeString = traineeString.slice(0, 54); // Slice a part of the string
// //   console.log("\n Apply slice");
// //   console.log(slicedTraineeString);

// let text = "5";
// let padded = text.padStart(4,"0");
// console.log(padded)

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




let filteredTraineesArray = traineesArray.filter(
  (trainee) => trainee.charAt(0) === "m"
); // Filter elements based on a condition
console.log("\n Apply Filter");
console.log(filteredTraineesArray);