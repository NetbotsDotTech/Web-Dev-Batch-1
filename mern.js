function add(a,b){
 var c=a+b;
 return c;
 }
 function sub(a,b){
var c=a-b;
return c;
}
function Mult(a,b){
   var c=a*b;
    return c;
 }
function cal(nam,a,b){
  var res=nam(a,b);
  console.log(`${res}`);
 }
 //var num1= Number(prompt('Enter number 1'));
//var num2= Number(asdasdprompt('Enter number 2'));
 cal(add,3,4);