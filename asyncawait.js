// function display(){
//     let promised = new Promise (function(resolved,rejected)
//     {
//         setTimeout(() => {
//             resolved("Great Work !")
//         }, 2000);
//     })
//     let fullfillpromised=promised;
//     console.log(fullfillpromised)
// }

// display();



async function display() {
    let promised = new Promise(function (resolved, rejected) {
        setTimeout(() => {
            resolved("Great Work !")
        }, 2000);
    })
    let fullfillpromised = await promised;
    console.log(fullfillpromised)
}

display();