let numbers = [10, 20, 30, 40, 50];
console.log('Original Array:', numbers);



const addNumber = [50, 34, 40];  

console.log('Adding Array Values:', addNumber);

addNumber.forEach(num => {
    if (numbers.includes(num)) {
        const index = numbers.indexOf(num);
        numbers[index] = num; 
        console.log(`Number ${num} already exists in array so overwrite.`);
    } else {
        numbers.push(num); 
    }
});
console.log('Updated Numbers addd array with Condition:', numbers);


const addNumber2 = [50, 38, ,100,40];  

addNumber2.forEach(num => {
    if (!numbers.includes(num)) {
        numbers.push(num);
    } else {
        console.log(`Number ${num} already exists in the array.`);
    }
});

console.log('Updated Numbers Array with Condition:', numbers);

