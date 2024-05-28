// object method object.create
// const job={
//     position:"cashair",
//     type :"hourly",
//     isAvailable:"true"
// }
// showDetail(){
//     const accepting= this.isAvailable ? 'is accepting application':"is not currently accepting application";
//     console.log('the',${this.position},'position is',${this.type},"and",${acccepting})
// }
const course={
    lecture :10,
    section:3,
    title:"javascript",
    // nested object 
    notes: {
       introduction: "wellcome to JS course"
    },
    enrolment(){
        console.log(" you are successfully enrolled")
     }
}
console.log(course)
course.enrolment()
// factory function
function createCuores(){
    const course1={
        lecture :10,
        section:3,
        title:"javascript",
        // nested object 
        notes: {
           introduction: "wellcome to JS course"
        },
        enrolment(){
            console.log(" you are successfully enrolled but panding")
         }
        }
        return course1;
}
const course1=createCuores()
course1.enrolment()
console.log(course1)
