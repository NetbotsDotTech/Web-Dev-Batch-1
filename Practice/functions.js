function displays()
{
console.log("I am simple funtion")
}
 displays()  //Calling Function

function praise(name)
{
    console.log("Hey "+ name +" you are Good")
    console.log("Hey "+ name +" you are Nice")
    console.log("Hey "+ name +" you are Handsome")
}
praise("Shahid")
praise("Shehzad")

//ARGUMENTATIVE FUNTION
function sum(a,b)
{
    return a+b;
}
console.log("Sum : " ,sum(5,6))

const func1=(x)=>{
    console.log("Arrow Funtion ",x)
}//can be reused and can be used variable
func1(23)
func1(20)
func1(80)