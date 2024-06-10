// const getData1 = async () => {
//     let data = "Hello World";
//     return data;
// }

// getData1().then(data => console.log(data));

//////////////////////////////////////////
// const getData2 = async () => {
//     let y = await "Hello World";
//     console.log(y);
// }

// console.log(1);
// getData2();
// console.log(2);
////////////////////////////////////////////////

// async function test() {

//          await  console.log("A");
//            console.log("B");
//         await  console.log("C");


// }

// console.log(" hello")
// test()


function asynchronous_operational_method() {
    let first_promise = new Promise((resolve, reject) => resolve("Hello"));
    
    let second_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" GeeksforGeeks..");
        }, 1000);
    });
    
    let combined_promise =  Promise.all([first_promise, second_promise]);
    return combined_promise;
}

async function display() {
    let data = await asynchronous_operational_method();
    console.log(data);
}



display();