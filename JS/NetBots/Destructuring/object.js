let { title, author } = {
  title: "MERN Stack Course",
  author: "Saqlain Shah",
};


let data = {
  username:"saqlain", 
  Age: 70, 
  No:432423,
  isMale: true
};
const {username, Age, ...abc} = data

console.log(`username : ${username} , Age : ${Age}, Other Values :${abc}`)

console.log(abc)