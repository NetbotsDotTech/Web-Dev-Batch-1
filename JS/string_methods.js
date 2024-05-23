//  chacking for included or not
let a = "Zeeshan , Basit ,shahid"
console.log("if the given alphabet is present return \"True\"")
console.log(a.includes('e'))


// chacking for slice
let name = "Mitti_full_Baltistan"
let stu = name.slice(0,10)
console.log("Give the part of string required")
console.log(stu)


// chacing for length of string 
let text = "sdcnasdjkvnjofsdnsd"
let len = text.length;
console.log("Gives the lenght of string ")
console.log(len)


// chacking for charat and charcodeat
let man = "Zeeshan"
let kul = man.charAt(0)
console.log("Give the character at by charat 0 \"can't accapt nagation but wil not generate error\"")
console.log(kul)
// for asscii code of alphabets cannot accapt nagation return undifen
let yan = man.charCodeAt(2)
console.log("Give the Asscii num at 2")
console.log(yan)


// for chacking alphabet at "it can accapt negative values"
let xol = man.at(-1)
console.log("Gives the character at 0 \" can accapt nagation\"")
console.log(xol)

// for finding the alphabet at given indux
let kh = man[1]
console.log("Give the alpha at 0 index")
console.log(kh)


// for chaking substring 
let substr = man.substring(-3)
console.log("Gives the alphabet between")
console.log(substr)

//for chacking substr can accapt nagation 
let cut = man.substr(-3)
console.log("Gives the alpha between independent of range can accapt nagation")
console.log(cut)


// Changing to Lower case
let chunchay = man.toLowerCase()
console.log("Changing to lower case alphabets")
console.log(chunchay)


//Changing to upper case
let chogo = man.toUpperCase()
console.log("Changing to upper cas")
console.log(chogo)

