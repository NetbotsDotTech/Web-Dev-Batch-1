function average(...values) {
  console.log("Args", values);
  var sum = 0;

  for (var i = 0; i < values.length; i++) {
    sum = sum + values[i];
  }

  var avg = sum / values.length;
  console.log(`Average of the args: ${avg}`);
}
let a= [10, 23, 45];
let b= 23;
let c = {
  Number:90
}
average(10, 20, 22, 30 );
average(10, 20 );
average(10, 20, 22, 30 , 54, 65, 76);