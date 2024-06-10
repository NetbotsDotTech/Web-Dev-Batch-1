// let Academy={
//     Name :"NetBot.Tech",
//     Course : "Full StacK Web-Development"
    
// }

// let {Name:StartName=aDefault,Course:OfferingCourse}=Academy;

// console.log(" "+StartName+"\n",OfferingCourse);

async function populate(){
    const requestURL="file:///C:/Users/Administrator/Desktop/bluetooth_content_share%20(2).html";
    const request=new Request(requestURL);

    const response=await fetch(request);
    const superbHrs=await response.json();

    populateHeader(superbHrs);
    populateHrs(superbHrs);

} 
console.log(populate());