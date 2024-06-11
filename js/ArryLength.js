//          Arry Length
let arry=["najm", "nadeem", "ashraf","muhammad","ALi"]
b=arry.length;
console.log(b)

//              toString 
let arry2=["najm", "nadeem", "ashraf","muhammad","ALi"]
b=arry2.toString();
console.log(b)

//          Arry At
let arry3=["najm", "nadeem", "ashraf","muhammad","ALi"]
b=arry3.at(3);
console.log(b)

let arryy3=["najm", "nadeem", "ashraf","muhammad","ALi"]
b=arryy3.at(-3);
console.log(b)


//          pop
let arry4=["najm", "nadeem", "ashraf","muhammad","ALi"]
b=arry4.pop();
console.log(arry4);


//      Push

let arry5=["najm", "nadeem", "ashraf","muhammad","ALi"]
arry5.push("hello");
console.log(arry5)

//      shift

let arry6=["najm", "nadeem", "ashraf","muhammad","ALi"]
arry6.shift();
console.log(arry6)

//      unshift
let arry7=["najm", "nadeem", "ashraf","muhammad","ALi"]
arry7.unshift("hussain");
console.log(arry7)

//      ARryLRNGTH
let arry8=["najm", "nadeem", "ashraf","muhammad","ALi"]
arry8[arry8.length]="hussain";
console.log(arry8)


//      Delete
let arry9=["najm", "nadeem", "ashraf","muhammad","ALi"]
delete arry9[4];
console.log(arry9)


//      Concat
let arry0=["najm", "nadeem", "ashraf","muhammad","ALi"];
let ar=["aaaa"]
let ary=arry0.concat(ar);
console.log(ary);


//      copyWithin
let Arry=["najm", "nadeem", "ashraf","muhammad","ALi"]
Arry.copyWithin(3,0);
console.log(Arry)

//      Flat
let Arry1=[[1,2],[3,4],[5,6]]
let as=Arry1.flat();
console.log(as)

//      splice
let Arry2=["12","121212","8989898","121212121","1212121"]
Arry2.splice(2,2,7878,878787);
console.log(Arry2)

//      tosplice
let Arry3=["najm","ali","haassan"]
aaa=Arry3.toSpliced(1,1,7878,878787);
console.log(aaa)


//      slice
let Arry4=["12","121212","8989898","121212121","1212121"]
A=Arry4.slice(1);
console.log(A)

//      indexOf()
let Arry5=["najm","ali","hussain","hassan","wali"]
pos=Arry5.indexOf("hussain") + 1;
console.log(pos)

//      lastindexOf()
let Arry6=["najm","ali","hussain","hassan","wali"]
let po=Arry6.lastIndexOf("hussain") + 0;
console.log(po)

//      includes()
let Arry7=["najm","ali","hussain","hassan","wali"]
let poo=Arry7.includes("hussain");
console.log(poo)