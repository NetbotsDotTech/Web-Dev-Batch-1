import React from 'react'

const JSXRule = () => {
    let name="Basit Ali"
  return (
    <div style={{fontSize:"40px"}}>

        <h2>JSX Rule</h2>
        <p>JSX must return a single parent element</p>
        <p>JSX element must be properly Closed</p>
        <p>JSX attribute are written using camelCase (e.g., className instead of class)</p>

        <p>2+2 is = {2+2}</p>
        <p>My name is : {name}</p>
      
    </div>
  )
}

export default JSXRule
