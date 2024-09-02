fetch("url").then(
  (response) => {
    console.log(response);
  },
  (rejection) => {
    console.error(rejection.message);
  }
);

