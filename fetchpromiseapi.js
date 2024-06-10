function fetchapi1() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data 1.");
        fetch('https://dummyjson.com/test')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    console.log(data);
                    resolve();
                }, 3000);
            })
            .catch(error => reject(error));
    });
}

function fetchapi2() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data 2..");
        fetch('https://dummyjson.com/test')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    console.log(data);
                    resolve();
                }, 3000);
            })
            .catch(error => reject(error));
    });
}

function fetchapi3() {
    return new Promise((resolve, reject) => {
        console.log("Fetching data 3...");
        fetch('https://dummyjson.com/test')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    console.log(data);
                    resolve();
                }, 3000);
            })
            .catch(error => reject(error));
    });
}

fetchapi1()
    .then(() => fetchapi2())
    .then(() => fetchapi3())
    .then(() => console.log("All is done"))
    .catch(error => {
        console.log("Something went wrong, please try again.");
        console.error(error);
    });