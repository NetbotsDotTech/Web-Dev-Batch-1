//Create an Array
let numbers = [5, 10, 15, 20, 25]
//Access Array Elements:
console.log(numbers[0],numbers[4])
//Modify Array Elements:
numbers[1] = 12
//Add Elements to the Array:
numbers.push(30)
numbers.unshift(0)
console.log(numbers)
//Remove Elements from the Array:
numbers.pop()
numbers.shift()
console.table(numbers)
//Loop Through the Array:
len = numbers.length
for (let i=0; i<len; i++){
    console.log(numbers[i])
}
//Array Methods:
let Dublicate = numbers.map(function(num){
    return num*2;
})
console.log(Dublicate)
console.log(typeof(Dublicate))

