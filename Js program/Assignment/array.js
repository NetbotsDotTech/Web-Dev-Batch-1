let arr1=["basit",23,true,null,]
// console.log(arr1)
arr1.push("muhammad")
arr1.unshift(47)
arr1[4]="YO-YO"
console.log(arr1)

const arr2=[12,44,"king ","netBots",null]
Object.seal(arr2)
console.log(arr2)
// arr2.push(34) // it does not work
arr2[0]=45
arr2[4]="abdu"
arr2[5]="king"// it does not work b/c array has only 0 to 4 index we can modify not add any thing in array due the seal method
console.log(arr2)

const arr3= [1, 2, 3];

Object.freeze(arr3);

arr3[0] = 10; // not work
arr3.push(4); // not work
arr3[3] = 4; // not work because array totaly freez

console.log(arr3); // Output: [1, 2, 3]      

////






   