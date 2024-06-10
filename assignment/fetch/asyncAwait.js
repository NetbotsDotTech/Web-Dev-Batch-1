async function fun1() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; 
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null; 
    }
}

async function fun2() {
    const apiUrl = 'https://dummyjson.com/products/1'; 
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Failed to fetch data:', error);
        return null; 
    }
}

async function display() {
    let data1 = await fun1();
    if (data1) {
        console.log('Fetched data1 from first API:', data1);
    } else {
        console.log('No data fetched from the first API due to an error.');
    }

    let data2 = await fun2();
    if (data2) {
        console.log('Fetched data2 from second API:', data2);
    } else {
        console.log('No data fetched from the second API due to an error.');
    }
}

display();
