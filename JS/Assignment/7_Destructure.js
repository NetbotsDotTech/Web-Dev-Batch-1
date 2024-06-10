console.log("Destructuring given array");
const numbers = [1, 2, 3, 4, 5];
const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);

console.log("Destructuring and adding to given array");
const a = [1, 2];
const [chik,nis, sume = 3] = a;
console.log(sume); 


console.log("Destructuring given array");
const b = [1, 2, 3];
const [aik,doo,...res] = b;
console.log(aik);   
console.log(doo);   
console.log(res); 


console.log("Destructuring given Object");
const person = {
    name: 'Zeeshan',
    age: 25
};
const { name, age } = person;
console.log(name); 
console.log(age); 



console.log("Destructuring and addinggiven Object");
const insaan = {
    mantakh: 'Shahid'
};

const { mantakh, loo = 30 } = insaan;
console.log(mantakh);  
console.log(loo);  


console.log("Destructuring Object part 2");
const persn = {
    nam: 'Basit',
    umr: 25
};
const { nam: fullName, umr: years } = persn;
console.log(fullName); 
console.log(years); 



console.log("Destructuring Object part 3");
const Mee = {
    name: 'Alice',
    address: {
        city: 'Wonderland',
        zip: '12345'
    }
};

const { address: { city, zip } } = Mee;
console.log(zip);  
