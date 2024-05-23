//======================All String Method on w3school================
// // // practice about the string method
// // let nam="BasitAli"
// // let str="kingoflife"
// // //------------------------------to find the length of any string-------------------
// // console.log("Length of string is:",str.length)
// // console.log("Length of string is:",nam.length)
// // //===========================Extracting any string====================
/*For extracting any substring from the string 
There are the following method to used to take extracting 
i-charat
ii-charCodeat
iii-at
iv-[]
the above methods are take only one argument or parameter
v-slice method
vi-substr method
vii-substring method
*/
// ------------------Extracting any stirng only one parameter or indexing----------------
console.log("extract from our string with charat funciton:",str.charAt(3))
console.log("extracting the string with charcodeat function",nam.charCodeAt(5))
console.log("extracting the string with [] ",nam[6])
console.log("Extracting with at function at ",nam.at(-2) )// it same to charat but here negative index can be given as a parameter but in chatat has not hold

//---------------------Extracting any string with two parameteres------------
console.log("Extracting string with slice method:",nam.slice(2,5))
console.log("Extracting string with slice negative indexing:",nam.slice(-5,-1))
console.log("Extracting string with slice only one parameter:",str.slice(-3))
console.log("Extracting string with substr",nam.substr(2,6))
console.log("Extracting string  with substring",str.substring(6,8))

// //===========================Convert into uppercase and LowerCase===========================

/*
For converting uppercase into lowercase and lowercase into uppercase
i-toupperCase method
ii-tolowerCas method
*/
// let fname="APOALI"
// let mname="safia"
// console.log("Convert lower into uper Case:",mname.toUpperCase())
// console.log("Convert upper to lower case:",fname.toLowerCase())



// //=============================Concatination of any two string================
// /There are some techniques to concatinate any two string/
// // let fname="basit"
// // let sname="ali"
// // console.log(fname.concat(sname))
// // console.log(sname.concat(fname))
// let father="ali"
// let mother="saf  ia"
// console.log(father+mother)// only it is possble to make any the concatination any string and not -,/,* which gives output Not a Number NaN
// console.log("safia"+"ali")

//===================Avoid the whiteSpace from the string==================
/*For remove white space in any string we used the method trim()
-> it is remove only those white space which is give in starting of the string 
->Syntaxn
        variable=variable.trim()
*/
// let king ="       Zaman vs Abdoo"
console.log("Name with out using trim function or method",king)

king=king.trim()
console.log("Name withusing trim function or method",king)
let subject="Discrete Structure         e "
console.log("Name with out using trim function or method",subject)
subject=subject.trimEnd()
console.log("Name with out using trim function or method",subject)

//=========================padding in string========================
/*
padding method:
 there are two new method in string name is padding start and padding end
 --> it does anything add on string at front or rear
 -->padStart(par1,par2)
--->padEnd(par1,par2)
par1:- is how many you want to add end or start of the string 
par2:- is which value you add to end or start of the string 

*/
let name1="ali"
console.log(name1)
console.log(name1.padStart(9,"b"))
console.log(name1.padEnd(5,"d"))


//===========================Repeat method in string===================
/*
Repeat method:
            it is used to if we repeat our string more than one time
            syntax:
                    variableName.repeat(number)
                    name.repeat(2)
*/

let ral="anything"
console.log(ral.repeat(5)," ")//  anything is repeat 5 times

//=========================replace method===============
/*
Replace:
 it is used to replace anything in our string
 --->It replace anything you want to replace mean if you chang letter or all string 
 syntax:
    variableName.repalce("Existing value/string ","Replace value/stirng ")



*/
let kaka="imtiyaz"
console.log(kaka.replace("im","ja"))
let fono="Muhammad"
console.log(fono.replace("Muhammad","basit"))

//==========================splite===========================
/*split:
-->it is used to split(break) into some part according to our condition
syntax:
    variableName.split("conditon/anythis which is include in your string")
*/
let king="zbs"
console.log(king.split(","))
let nameofst="basitaliabdu"
console.log(nameofst.split("a"))