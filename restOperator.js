//Rest operator example 1

function myFunc(...values){
    console.log(values);
}
myFunc(12,12,12);

//Example 2

function func2(...num) {
    let sum = 0; // Initialize sum outside the loop
    
    for (let i = 0; i < num.length; i++) {
        sum = sum + num[i]; // Update sum with each element
    }
    
    console.log(sum);
}

func2(1, 2, 3, 4, 5);

//example 3

function func3(...argu) {
    let sum = 0;
    for(let i = 0; i < argu.length; i++) {
        sum = sum + argu[i];
    }

    let avg = sum / argu.length; // Calculate average by dividing sum by the number of arguments
    console.log("Total sum ", sum);
    console.log("Average ", avg);
}

func3(10, 20, 30, 40, 50);

//example 4
//Find max number of array


function func4(...numbers) {
    let maximum = numbers[0]; // Initialize maximum with the first number

    for(let i = 1; i < numbers.length; i++) { // Start from the second number
        if (numbers[i] > maximum) {
            maximum = numbers[i]; // Update maximum if the current number is greater
        }
    }

    console.log("Maximum ", maximum);
}

func4(1, 2, 3, 4, 5);

//example 5
//Find min number of array


function func5(...numb) {
    let min = numb[0]; // Initialize minimum with the first number

    for(let i = 1; i < numb.length; i++) { // Start from the second number
        if (numb[i] < min) {
            min = numb[i]; // Update minimum if the current number is less
        }
    }

    console.log("Maximum ", min);
}

func5(1, 2, 3, 4, 5);