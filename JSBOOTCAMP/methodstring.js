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
//toUppercase method
let text11="banana,kivi,apply"
let text12=text11.toUpperCase()
console.log(text12)
//toLowercase method
let text13="Banana,Kivi,Apply"
let text14=text13.toLowerCase()
console.log(text14)
//concat method
let a="nadeem"
let b="ashraf"
let c=a.concat(' ',b)
console.log(c)
//trim method
let s="    hello world!    "
let r=s.trim()
console.log(r)
//trimstart and trimend method
let s1="    hello world!.........    "
let s2="     ....hello world   ...     "
let r1=s1.trimStart()
let r2=s2.trimEnd()
console.log(r1)
console.log(r2)
//padstart and padend method
let y="8"
let v="9"
let z=y.padStart(4,"11")
let x=v.padEnd(4,"11")
console.log(z)
console.log(x)
//repeat stringmethod
let y1="nadeem ashraf"
let v1=y1.repeat(10)
console.log(v1)
//replace stringmethod
let y2="Please Visit our software house uuuu"
let v2=y2.replace("uuuu","Netbotstech campany")
console.log(v2)
// split string method
let txt="hello world,nadeem,ashraf,muhammad,najm ul hassan,afzal,shahid"
let prt=txt.split()
console.log(prt)
//string are being completed here and i im so acxited about the next tasked..allhamdullellah