var a = [1,2,3]
var b = [4,5,6]
var d = [7,8,9]

console.log("By concat")
var c = a.concat(b)
console.log(c)


a.push(4)
a.push(5)
a.push(6)
console.log("By push")
console.log(a)

console.log("Add third")
let e = c.concat(d)
console.log(e)

console.log("By Spread")
let normal = [...a,...b,...d]
console.log(normal)

let [one ,two,...rest] = normal
console.log("Destructuring")
console.log(one)
console.log(two)
console.log(rest)

console.log("===================REST====================")
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));


function myFun(...manyMoreArgs) {
    // console.log("a", a);
    // console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
    return manyMoreArgs
  }
myFun("one", "two", "three", "four", "five", "six")
myFun("Ali","Ahmad","Aslam","Abid","Arif")
console.log("manyMoreArgs",myFun("Aslam","Abid","Arif","four", "five", "six"))