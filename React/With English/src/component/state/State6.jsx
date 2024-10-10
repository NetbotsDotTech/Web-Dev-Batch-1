import React from 'react'


const State6 = ({count,handler}) => {

    const handleClick=()=>{
        handler()
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Incremen</button>
    </div>
  )
}

export default State6
