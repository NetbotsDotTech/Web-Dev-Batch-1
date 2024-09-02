for(let i=0;i<10;i++)
    {
        console.log("printing :",i);
    }

let obj = {
    name: "Shahid",
    role: "Programmer",
    company: "Noori Tech"
        }
//For In Loop
 for (const key in obj) {
        const element=obj[key]
        console.log(key,element)
 }

 //For Of Loop
 for (const c of "Shahid") {
    console.log(c);
 }
 
 //While Loop
 let i=2;
 while(i<6)
    {
        console.log("While no: ",i)
        i++;
    }
//Do-While Same as C++
