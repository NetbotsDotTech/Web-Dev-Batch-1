// // Comparison Operator
console.log(2>7)
console.log(2<0)
console.log(2>=1)
console.log(2<=4)
console.log(2==8)
console.log(2==2)
console.log(2!=7)
console.log(2===9)
console.log(2!==7)
console.log(null>0)
console.log(null>=0)
console.log(null==0)
/*
== and === totally change == only check value not datatype and === is totally check all thing like datatype and number therefore it is called stricly 
*/
console.log( 'it is equal:','2'===2)


// Symbol dataTypes:
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id, "and it tyep is",typeof id)// it's type also a symbol
console.log(anotherid, "and it tyep is",typeof anotherid)// it's type also a symbol
console.log(id===anotherid)
// Memory:
/*
There are two types of memory 
i-Stack :- it used with the premitive data type when we take value from stack then we have a copy of our value and the original value does not change if we want to change 
ii-Queue:-It is used with the non-premitive data type whenn we take value form queue then we have a referrence or address of that value therefore we can change the original value because we have the original address of that value not a copy of that value
*/