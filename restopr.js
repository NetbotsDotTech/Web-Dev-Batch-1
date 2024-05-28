
let a=[1,2,3],
b=[4,5,6,7],
c=[];

c.concat(a,b)

console.log(c)


// JavaScript code for concat() method
function func() {
	let num1 = [11, 12, 13],
		num2 = [14, 15, 16],
		num3 = [17, 18, 19];
	console.log(num1.concat(num2, num3));
    console.log(...num1,...num2,...num3);

}
func();
