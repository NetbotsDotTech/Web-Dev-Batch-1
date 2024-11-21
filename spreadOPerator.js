//spread operator on array

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [...arr1,...arr2];
console.log(...arr3);


//spread operator on object

let obj1 = {a:1,b:2,c:3};
let obj2 = {d:4,e:5,f:6};
let obj3 = {...obj1,...obj2};
console.log(obj3);

//convert array into object

let array = [5,6,7,8,9];
let object = {...array};
console.log(object);

//object changing

let myobj = {name:"ALI",
            age:22,
            remarks:"pass"
};

console.log({...myobj,name:"john"});

//calculate sum

let arr5 = [2,3,5,6];

function calSum(v1,v2,v3,v4){
    return v1+v2+v3+v4;
}

console.log(calSum(...arr5));

// //Task

let arr7 = [3, 4, 5, 6, 7];
let [f, g, h, ...res] = arr7;
let firstThree = [f, g, h];
let [j, e] = res;

console.log(firstThree); // [3, 4, 5]
console.log(j);          // 6
console.log(e);          

// //Task

let arr8 = [1,2,3,4,5,6];
let [ k,l,...m] = arr8;
let newarr = arr8.slice(0,4);
console.log("New arr : ",newarr);
 k = arr8.slice(4,5);
 l = arr8.slice(5)
console.log("value of k : ",...k," value of l : ",...l);


//Task

let detail = {
    title: "Mern stack course",
    auther: "Saqlain shah"
};

let {title: courseTitle, auther: name} = detail;

console.log(courseTitle);
console.log(name);


