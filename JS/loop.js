let factorial =1;
for(i=1; i<=5; i++)
    {
        factorial *= i;
    }
console.log("Factorial of 5 = ",factorial)


let numbers = [45, 4, 9, 16, 25];

let total =0;
let txt = "";
for (let x in numbers) {
  txt += numbers[x];
  total += numbers[x];
}

console.log("for in loop :",txt)
console.log("Sum of array values = ",total)

const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "\n";
}
console.log(text)