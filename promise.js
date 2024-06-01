let p1= new Promise((resolve , reject)=> {


    setTimeout(()=>{
        console.log('The first promise has resolved');
        resolve(10);
               }, 1*1000 );
    });


let p2 = new Promise((resolve ,reject)=> {

    setTimeout(() =>{

        console.log('The second promise has resolved')
       } , 2*1000)
 });


 let p3 = new Promise((resolve ,reject)=> {

    setTimeout(() =>{

        console.log('The third  promise has resolved')
       } , 3*1000)
 });


 Promise.all([p1,p2,p3]).then((result)=>{
    console.log(`Results:${results}`);
 }).catch((error)=>{
    console.log(`Error : ${error}`);
 });





