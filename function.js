
function age (x){
    if (x>=18)
        {
            console.log("You are eligible age is ", x)
        }
    else
        {
            console.log("You are not eligible")
        };
};

age(22)

let sum = function(x,y)
{
    if(x===y)
        {
            console.log("Values and data types are equal")
        }
    else if(x==y)
        {
            console.log("Values are same but data type is different.")
            console.log("x value data type is",typeof(x), " and y value data type is",typeof(y))
        }
    else{
        console.log("Values and data types are not equal")
    }
}

sum(12,'12')

const Name=(x,y)=>{
    let z =x* y
    return z;
}

const a = Name(5,5)
console.log("Multiply of two values = ",a)



console.log("Student MarkSheet")

function percentage(sub1, sub2,sub3,sub4,sub5)
{
    optainMarks = sub1+sub2+sub3+sub4+sub5;
    let per = (optainMarks*100)/500;
    return per;
};

let percen = percentage(75,65,80,95,43)

console.log("Per%",percen)