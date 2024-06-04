function fun1(a, b, c) {
  const userData = [a, b, c];
  //person = person1;
  console.log("Array 1", userData);
}

let num1 = 10,
  num2 = 20,
  num3 = 30;
fun1(num1, num2, num3);

let fun2 = function (a, b, c) {
  const userData = [a, b, c];
  //person = person1;
  console.log("Array 2 ", userData);
};

let num4 = 10,
  num5 = 20,
  num6 = 30;
fun2(num4, num5, num6);

let fun3 = (a, b, c) => {
  const userData = [a, b, c];
  //person = person1;
  console.log("Array 3 ", userData);
};

let num7 = 10,
  num8 = 20,
  num9 = 30;
fun3(num4, num5, num6);

let param = 50;

let case1 = () => {
  console.log("Case 1");
  console.log("Case 1");
};
let case2 = param = {
  console.log(`Case 2 ${param}`);
  console.log(`Case 2 ${param}`);
};
let case3 = param => console.log(`Case 3 ${param}`);
let case4 = () => console.log("Case 4");

case1();
case2(param);
case3(param);
case4();



