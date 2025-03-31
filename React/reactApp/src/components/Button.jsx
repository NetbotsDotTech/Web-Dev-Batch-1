import React from 'react'

const Button = ({props,arrowName,clickHandler}) => {
  return (
    <div>
      <button title={arrowName} onClick={clickHandler}>
        <img src={props} alt={arrowName} />
      </button>
    </div>
  )
}

export default Button
