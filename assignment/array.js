let numbers = [10, 20, 30, 40, 50];
console.log('Original Numbers Array:', numbers);

const moreNumbers = [60, 70, 80];
const evenMoreNumbers = [90, 100];

console.log('Additional Numbers:', moreNumbers);
console.log('Even More Numbers:', evenMoreNumbers);

let allNumbers = [...numbers, ...moreNumbers, ...evenMoreNumbers];
console.log('Merged Numbers Array:', allNumbers);
const addNumber = [60, 34, 70];  
console.log('Numbers to Add:', addNumber);


addNumber.forEach(num => {
    if (!moreNumbers.includes(num)) {
        moreNumbers.push(num);
    } else {
        const index = moreNumbers.indexOf(num);
        moreNumbers[index] = num; 
        console.log(`Number ${num} already exists in moreNumbers so overwrite.`);
    }
});
console.log('Updated Numbers addd array with Condition:', moreNumbers);


const additionalNumbers = [30, 100, 110];

additionalNumbers.forEach(num => {
    if (!evenMoreNumbers.includes(num)) {
        evenMoreNumbers.push(num);
    } else {
        console.log(`Number ${num} already exists in the array.`);
    }
});

console.log('Updated Numbers Array with Condition:', evenMoreNumbers);

