import React, { useState } from 'react'

const State8 = () => {
    const [count,setCount]=useState(()=>{
        const initialValue=29;
        return initialValue;
    })
    const handleClick=()=>{
        setCount(prev=>prev+1)

    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default State8
