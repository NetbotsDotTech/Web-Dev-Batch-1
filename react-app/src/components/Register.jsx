import React from 'react';
import "./style.css";

export const Register = () => {
  return (
    <div className="form-container">
      <h1>Registration</h1>
      <label htmlFor="fname">First Name : </label>
      <input type="text" name="fname" id="fname" />
      <label htmlFor="lname">Last Name : </label>
      <input type="text" name="lname" id="lname" />
      <label htmlFor="age">Age : </label>
      <input type="number" name="age" id="age" />
      <label htmlFor="u-email">Gmail : </label>
      <input type="email" name="email" id="u-email" />
      <label htmlFor="phone-no">Phone Number : </label>
      <input type="number" name="phone-no" id="phone-no" />
      <button type='submit'>Submit</button>
    </div>
  );
}
export default Register;