import React from 'react'


const State7 = ({count,handler}) => {

    const handleClick=()=>{
        handler()
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Decrement</button>
    </div>
  )
}

export default State7
