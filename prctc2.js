// var student = new Object();
// student.Frstname = 'Muhammad';
// student.scondname = 'hussain';
// student.age = 25;

// console.log(student)

// var teacher = [
//     { Name: "nadia", age: 20, class: 12 },
//     { scndnm: "fauzia", age: 22, class: 12 },
//     { lstnm: "haseena", age: 19, class: 11 }
// ]
// for (var a = 0; a < teacher.length; a++) {
//     console.log(teacher[a])
// }

// console.log(teacher)

// var emp=new Object();
// emp.id=10;
// emp.name="Saira";
// emp.salery=20000;
// console.log(emp.id +"\n "+emp.name+" \n"+emp.salery);

function emp(id,name,salery){
 this.id=id;
 this.name=name;
 this.salery=salery;
}
e=new emp(102,"Saira",60000);
console.log("  "+e.id +" \n "+e.name+" \n "+e.salery);

