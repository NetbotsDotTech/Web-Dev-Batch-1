// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve("Hello, World!");
//     }, 2000); 
//   });
//   
//   promise.then((value) => {
//     console.log(value); 
//     console.error(error);
//   });
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("Failed to load data"));
//     }, 2000);
//   });
  
//   promise.catch((error) => {
//     console.error(error);
//   });
  
 
// async function getData() {
//     try {
//       const response = await fetch('(link unavailable)');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   getData();
// async function helloWorld() {
//     try {
//       const response = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("Hello, World!");
//         }, 4000);
//       });
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }

  
//   helloWorld();

  
  
async function getUserData() {
    try {
      const userId = 123;
      const user = await getUserById(userId);
      console.log(user.name);
    } catch (error) {
      console.error(error);
    }
  }
  
  function getUserById(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userId === 123) {
          resolve({ name: "sherbaz zahid" });
        } else {
          reject(new Error("User not found"));
        }
      }, 2000);
    });
  }
  
  getUserData();
  