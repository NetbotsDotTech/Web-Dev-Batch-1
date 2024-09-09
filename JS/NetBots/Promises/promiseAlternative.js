function fetchData() {
    return new Promise((resolve , reject) => {
        console.log("Fetching Data...!");
      setTimeout(() => {
        console.log("Data fetched");
        resolve();
      }, 3000); 
    });
  }
  function processData() {
    return new Promise((resolve) => {
        console.log("Processing Data...!");
      setTimeout(() => {
        console.log("Data processed");
        resolve();
      }, 2000); 
    });
  }
  function saveData() {
    return new Promise((resolve) => {
        console.log("Saving Data...!");
      setTimeout(() => {
        console.log("Data saved");
        resolve();
      }, 1000); 
    });
  }
    async function performOperations() {

          fetchData();
          processData();
          saveData();
        console.log("All done!");
   
    }
    
    performOperations();