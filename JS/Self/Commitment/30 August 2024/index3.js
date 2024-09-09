const age=30
if(age>=18){
    // console.log("Eligible to cast Vote")
}

const weight=10
if(weight<=10){
    // console.log("You are not fit")
}else{
    // console.log("You are fit")
}

const percentage=28
if(percentage>=90 && percentage<=100){
    // console.log("Excelent")
}
else if(percentage>=80 && percentage<=89){
    // console.log("very Good")
}
else if(percentage>=70 && percentage<=79){
    // console.log("Good")
}
else if(percentage>=60 && percentage<=69){
    // console.log("Pass")
}
else if(percentage>=50 && percentage<=59){
    // console.log("Statisfactory")
}
else{
    // console.log("Unstatisfactory")
}

const count=1
switch (count) {
    case 1:count+2
    // console.log("basit")
        
        break;
    case 2:count+3
    break;
    case 3:count+4
        
        break;
    case 4:count+5
    break;

    default:
        console.log("basit ali")

        break;
}

for(let i=0;i<=50;i++){
    if(i%2==0){
      

        continue
     
    }
    // console.log(i)
}
let sum=0
while(sum<=5){
    
//   console.log(sum)

    sum++
}
let add=0
do {
    // console.log("less then five")
    add++
    // console.log("less then five",add)

} while (add<5);

const arr=[1,2,3,4,5]
for (const elem of arr) {
    // console.log(elem)
}
for (const elem in arr) {
    // console.log(elem)
}

const info={
    firstName:"basit",
    lastName:"ali",
    course:[1,2,3,4,5]
}
for(let i in info){
    // console.log(i)
    console.log(i)
}