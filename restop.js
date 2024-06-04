// function sum(Name, ...args) {
//     console.log(arguments)
//     let sum = 0;
//     for (let i in args) {
//         sum += args[i];
//     }
//     console.log(sum);
// }
// sum("Saira batool", 20, 10, 20);


// const vehicles = ['BMW', 'N-3506', 'Premio'];// old way
// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];
// console.log(car,truck,suv)

const myarray=[1,2,3,4,5,6,7]
const [first,...rest]=myarray;
const lastelement=myarray[myarray.length-1];
console.log(first+"\n",rest,"\n"+lastelement);

let [c,d,e,f,g,h]=rest;
