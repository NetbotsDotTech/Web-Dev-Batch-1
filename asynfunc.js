 function mydata(){
return new Promise((resolve)=>{
    console.log("Fetching")
    setTimeout(()=>{
    console.log("Data Fetch")
    resolve();
    },2000);
    
})
}
function mydeclared(){
    return new Promise((resolve)=>{
        console.log("Declaring")
        setTimeout(()=>{
        console.log("Data decalred")
        resolve();
        },2000);
      
    })
    }
    function myExcute(){
        return new Promise((resolve)=>{
            console.log("Excuting")
            setTimeout(()=>{
            console.log("Data Excute")
            resolve();
            },2000);
            
        })
        }
        async function mydisplay(){
            try {
                await mydata();
                await mydeclared();
                await  myExcute();
            } catch (error) {
                console.log("something wrong");
            }
          
        }
        mydisplay();