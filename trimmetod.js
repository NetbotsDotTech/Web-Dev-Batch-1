// let a="mustafa"
// let b=a.replace("mustafa","Ali");
// console.log(b)
const ages = [32, 33, 16, 40];
let chk=ages.filter(checkAdult);
function checkAdult(age) {
    return age >= 18;
  }
  console.log(chk);