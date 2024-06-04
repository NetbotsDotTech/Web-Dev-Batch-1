/*
            Basic Of JavaScript
==============================================================================            
In this program we learn about the following topic and also practice each one
1-Comments
2-Variables and its Data types
3-Operator
4-Conditional Statements
5-Loop
6-Array
7-Function
8-Array
*/
/*Program-1
This program illustrate variable, operator and fucntion and alos data type
*/
/*
1-Comments:
        There are two types of comment in javaScript
        i-Single line Comment
        ii-Multi-line Comment
        
*/ 
/*
2-Variable and its Data Types
 Variable:
        Variables are container which is used to store the data
        There are four way to declare or initialize the js Variables
        i-  Automatically
        ii- Using Var keyword
        iii-Using let keyword
        iv- Using const keyword

        Now we practice below of the following topics

*/
x=2
y=3
z=9
console.log(x) // console.log() is used to  display anything in the browser or screen
console.log(y)
console.log(z)
console.log(typeof x)// typeof used to check the data type of the variable
console.log(typeof y)

//This  practice is understand bad practice in industry therefore avoid this
var num1=12
var num2=34
console.log(num1+num2)

/*Avoid declare or initialize any variable with the keyword  var now a days due to its behaviour
it is mostly used from 1995 to 2015 when luanch the ECMAScript they introduce let and const  
*/

let num3=90
let num4=87
const result=num3*num4
console.log(result)
// result=4343
 /* it generate error b/c const  after initialize one time become only accessfier not modifier therefore it should be required to initial it at the declare time
 const is not mutable after assign a value      
 */
console.log(result)

let person="Basit"
let person1
let person3=null
console.log(person)
console.log(person1)
console.log(person3)





