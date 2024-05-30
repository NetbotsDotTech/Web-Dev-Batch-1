let a=[12,13,14,12,13,14,17]

const [a1,b,...arr]=a
console.log(arr)
//rest method in function
function sum(num1,...number){
    let total=num1;
    for(let num of number){
      total +=num;
    }
    return total
}
const num1=12;
const number=[1,2,3,4,7,8];
const total=console.log(sum(num1,...number))
//
function calculateTotalAgeOfGuest(hostAge, ...guestAges) {
    let totalAge = hostAge;
    for (const age of guestAges) {
      totalAge += age;
    }
    return totalAge;
  }
  
  const hostAge = 30;
  const guestAges = [25, 28, 10, 5];
  
  const totalAge =console.log( calculateTotalAgeOfGuest(hostAge, ...guestAges));
  // more example of restmethod
 function myFun(a,b,...ky){
        console.log("a",a);
        console.log("b",b);
        console.log("ky :" ,ky);
 }
 myFun('one','two','tree','four','five','six')
