import React, { useState } from 'react'

export default function Form() {
    const [name,setName]=useState("")
    const funcHandle=(e)=>{
        setName(e.target.value)
    }
  return (
    <div>
      <h2>LoginForm</h2>
      <label htmlFor="">UserName: </label>
      <input onChange={funcHandle} type="text" /><br />
      <label htmlFor="">Email_ID :</label>
      <input onChange={funcHandle} type="text" /> <br />
      <button onClick={alert(naem)}  type="submit">submit</button>
      
    </div>
  )
}
