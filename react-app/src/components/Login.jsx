import React from 'react';
import "./style.css";

export const Login = () => {
  return (
    <div className="form-container">
      <h1>Login</h1>
      <label htmlFor="email">Email Address : </label>
      <input type="text" name="email" id="email" />
      <label htmlFor="u-pass">Password : </label>
      <input type="password" name="pass" id="u-pass" />
      <button type='submit'>Login</button>
    </div>
  );
}
export default Login;