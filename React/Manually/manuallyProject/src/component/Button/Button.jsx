import React from 'react'

const Button = ({
    children,
    type="button",
    backgroundColor="silver",
    textColor="white",
    ...props
}) => {
  return (
    <div>
      <button style={{fontWeight:"bolder"} `${type} ${backgroundColor}`}  {...props} >
        {children}
     
        
      </button>
    </div>
  )
}

export default Button
