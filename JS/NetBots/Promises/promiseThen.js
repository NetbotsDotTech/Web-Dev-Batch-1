const result = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved Result");
  }, 2000);
});


result.then(
  (x) => {
    console.log(x);
  },
  (err) => {
    console.error(err);
  }
);
