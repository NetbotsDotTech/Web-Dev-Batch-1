export const createError = (status, message) => {
  const err = new Error();
  console.log('errro form error is :',err)
  err.status = status;
  err.message = message;
  return err;
};


