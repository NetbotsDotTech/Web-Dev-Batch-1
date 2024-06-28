import React, { useRef } from 'react';
import "./login.css"

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
   
    // handle login logic here
    alert('Login');
  };

  return (
    <form onSubmit={handleSubmit} className='formlogin'>
      <h2>Login</h2>
      <div >
        <label>
          Email_ID : 
          <input type="email" placeholder='Enter Email' className='inputlogin1' />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" placeholder='Enter Password'  className='inputlogin2'/>
        </label>
      </div>
      <button type="submit" className='logbutton'>Login</button>
    </form>
  );
};

export default Login;
