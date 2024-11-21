//Different type function

function fun1 (x) {
    for(let i = 0; i<=x; i++){
        console.log(i);
    }
}
fun1(5); //function call

//errow function

const fun2 = ((y)=>{
    for(let j = 0; j<=y; j++){
        if(j%2==0){
            console.log("Even numbers are : ","\t",j);
        }
    }
})
fun2(10); //function call

//function which return some value

const fun3 = ((a,b)=>{
    return(a+b);
})
let sum = fun3(3,4);
console.log("Sum : ",sum)

//forEach function for array 

let arr = [1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
});

//callBack function

function calSum(r, s) {
    return r + s;
}

function display(sum) {
    console.log(sum);
}

let su = calSum(2, 3);
display(sum);