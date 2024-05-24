const person={
    fname:"Saira",
    lname:"Batool",
    age:20,
    eyecolor:"Blue",
    family : ["saira","maira","bushra","maryam"],
    distance:function(){
        return 20;
    }
};

let text=Object.entries(person);
console.log(text);

console.log(person.family[1])

console.log(person.distance())