const person = {
    fname: "Saira",
    lname: "Batool",
    age: 20,
    eyecolor: "Blue",
    objct: {
        frstname: "saira",
        scndname: "fizza",
        thrdnme: "rehana",
        lstnme: "zuleekha"
    },
    fullname : function(){
        return this.fname+" "+this.lname;
    }
};
let text = Object.entries(person);
console.log(text)
console.log(person.objct)
console.log(person.fullname())