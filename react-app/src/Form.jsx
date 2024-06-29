import React, { useState } from 'react'

export default function Form() {
    const [name,setName]=useState("")
    const funcHandleName=(e)=>{
        setName(e.target.value)
    }
    const funcHandleEmail=(e)=>{
      setName(e.target.value)
  }
  return (
    <div>
<form action="">
<h2>LoginForm</h2>
      <label htmlFor="">UserName: </label>
      <input onChange={funcHandleName} type="text" /><br />
      <label htmlFor="">Email_ID :</label>
      <input onChange={funcHandleEmail} type="text" /> <br />
     
</form>
<button onClick={alert(name)}  type="submit">submit</button>
      
    </div>
  )
}
