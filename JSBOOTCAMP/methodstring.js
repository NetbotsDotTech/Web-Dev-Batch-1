///method of lengthstring
let text="abcdefghijklmn"
let length =text.length
console.log(length)
//methods of string  charectar
//string charector have four extracting  type.
///1 .at()
//2.charAt()
//3.charCodeAt()
//4.[] array
let text1="nadeem"
let charAt=text1.charAt(0)
console.log(charAt)
//at()
let text2="nadeem"
let at=text2.at(0)
console.log(at)
//charCodeAt()
let text3="nadeem"
let charCodeAt=text3.charCodeAt(0)
console.log(charCodeAt)
//[] like array
let text4="nadeem"
console.log(text4[2])
//string method slice
let letter="banana,kivi ,apple";
let part=letter.slice(7,12);
console.log(part)
//negative slice method(-7)
let letter1="banana,kivi ,apple";
let part1=letter1.slice(-7);
console.log(part1)
//negative slice method(-12,-7)
let letter2="banana,kivi ,apple";
let part2=letter2.slice(-12,-7);
console.log(part2)
//substring(start, end)
let letter3="banana,kivi,apply";
let part3=letter3.substring(7,12)
console.log(part3)
//substr method
let nam="banana,kivi,apply";
let part4=nam.substr(7,7)
console.log(part4)