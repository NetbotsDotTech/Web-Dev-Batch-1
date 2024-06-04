let promise = new Promise(
    function (fullfill, rejected) {
        let promise = falses
        if (promise) {
            fullfill("Successfull!")
        } else {
            rejected("Somethimg went wrong")
        }
    }
)
promise
    .then((value) => {
        console.log("Promised resolved " + value);
    })
    .catch((error) => {
        console.log("Promised is rejected " + error)
    });

