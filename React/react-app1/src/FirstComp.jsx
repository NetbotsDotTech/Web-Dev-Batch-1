import React from 'react'
import './FirstComp.css'
export default function FirstComp() {
  return (
   <>
   
   <h1>Login Form</h1>
   <div className="container">
    <form action="">
      <label htmlFor="">UserName:</label>
      <input type="text" name="username" id="username" placeholder='UserName' /><br />
      <label htmlFor="">Email-Id:</label>
      <input type="email" name="email" id="email" placeholder='Email'/><br />
      <label htmlFor="">Password:</label>
      <input type="password" name="password" id="password" /><br />
      <button>Submit</button>

    </form>
   </div>

   </>
  )
}
