// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
// }

// const updateMyVehicle = {
//     type: 'car',
//     year: 2021,
//     color: 'yellow'
// }

// const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }
// console.log(myUpdatedVehicle);

const numbersOne = [1, 2, 3,4,5,6];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)


function sum(Name,...args){
    console.log(arguments)
    let sum=0;
    for(let i in args){
        sum+=args[i];
    }
    console.log(sum);
}
let arr=[2,4,5,6,7,5,7,6];
sum("NetBotTech",...arr)
sum("Saira batool",20,10,20);

