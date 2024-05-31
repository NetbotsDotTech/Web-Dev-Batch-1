
// const myPromise = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//       const success = true; 
//       if (success) {
//         resolve('Operation was successful!');
//       } else {
//         reject('Operation failed.');
//       }
//     }, 2000);
//   });
  
  
//   myPromise
//     .then((message) => {
//       console.log('Success:', message); 
//     })
//     .catch((error) => {
//       console.error('Error:', error); 
//     });
  
    
    
    const firstPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let promise = true
            if (promise)
                {
                    resolve('First promise resolved!');
                }
                else
                {
                    reject("first promise is rejected")
                }
        }, 1000);
      });
      
      const secondPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let promise=false
            if(promise)
                {

                    resolve('Second promise resolved!');
                }
                else
                {
                    reject('second promise is rejected')
                }
        }, 2000);
      });
      
      firstPromise
        .then((result) => {
          console.log(result); 
          return secondPromise;
        })
        .then((result) => {
          console.log(result); 
        })
        .catch((error) => {
          console.error(error);
          return secondPromise;

        })
        .catch((error) => {
            console.error(error);
        });
      

        const promise1 = new Promise((resolve) => {
            setTimeout(() => {
              resolve('Promise 1 resolved first!');
            }, 1000);
          });
          
          const promise2 = new Promise((resolve) => {
            setTimeout(() => {
              resolve('Promise 2 resolved first!');
            }, 500);
          });
          
          Promise.race([promise1, promise2])
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.error(error);
            });
          