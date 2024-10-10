import React, { useState } from 'react'

const State3 = () => {
    const [dost,setDost]=useState(['basit','muhammad','Sakina', 'kubra','khadija'])
    const addFirend=()=>{
        setDost([...dost, 'Ali'])
    }
    const remove =()=>{
        setDost(dost.filter((f)=>f!=='basit'))
    }
    const update=()=>{
        setDost(dost.map((f)=>f==='Ali'?'safia':f))
    }

  return (
    <div style={{textAlign:'center'}}>
      <h1>Firend are:</h1>
      {
        dost.map((dost,index)=>(
            <li style={{listStyle:"none" ,marginTop:'10px'}} key={index}>Firend{index+1} : {dost}</li>
        ))
      }

      <button onClick={addFirend}>add</button>
      <button onClick={remove}>remove</button>
      <button onClick={update}>update</button>
    </div>
  )
}

export default State3
