function fetchApi1(){
    let url = 'https://jsonplaceholder.typicode.com/todos/2'
    console.log("fetching api 2.....")
    return new Promise((resolve)=>{
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then((url)=>url.json())
            .then((url)=>console.log(url.json))
        resolve("resolve successfull...")
        resolve();
        }, 3000);
    })
}

async function All(){
    await fetchApi();
    await fetchApi1();
}

