// first time:
let objectOne={
    number:12,
    firstName:"Apo_Zaman",
    male:true,
    edcuation:null,
    performanceInSocity:undefined,
    arr:[12,34,"Basit","Aahil"]
}
console.log(objectOne)
objectOne.male=false
objectOne.edcuation="intermediate"
objectOne.firstName="Apo Abdu"
objectOne.personalNumber=34
console.table(objectOne)

//Second time
const obejectTwo={
    number:12,
    firstName:"Muhammad Ali",
    male:true,
    edcuation:"primary",
    performanceInSocity:"Satisfactory",
    quatlities:["speak well","save him from bad thing"]

}

Object.freeze(obejectTwo)//the method freeze made our object immutable means you cann't modify anything but add anything object
console.log(obejectTwo)
obejectTwo.male=false // it does not work because we freeze out object so we access only not modifty it
obejectTwo.fav_dish="Haleem"// due to freez we cann't add anything new in object
console.log(obejectTwo)

//third Time
const obejectThree={
    number:120,
    firstName:"Haleembi",
    male:false,
    edcuation:"primary",
    performanceInSocity:"good",
    quatlities:{
        one:"amazing performace",
        two:"In study"
    }
    
}
Object.seal(obejectThree)// the seal method don't permite to add anything new in the object
console.log(obejectThree)
obejectThree.edcuation="middel"// change the exitence value
obejectThree.bestPerson="myfather"//not work
console.table(obejectThree)
