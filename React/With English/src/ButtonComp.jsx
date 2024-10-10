import React from 'react'

const ButtonComp = () => {
    const handleClick=()=>{
        console.log(Math.round(Math.random()+100))
    }
  return (
    <div>
      {/* <button onClick={()=>console.log("You click me...")}>Click me</button> */}
      <button onClick={handleClick}>Click me</button>

    </div>
  )
}

export default ButtonComp
