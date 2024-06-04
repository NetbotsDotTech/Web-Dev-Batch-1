function fetchData() {
  setTimeout(function () {
    const data = "Data Retrieved Successfully";
    const fun = (data) => {
      console.log(`${param}`);
    };
    fun();
  }, 2000);
}

fetchData();
