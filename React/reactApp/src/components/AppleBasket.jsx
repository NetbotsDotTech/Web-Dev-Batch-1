import React from 'react'

const AppleBasket = ({appleCount,basketName}) => {
  return (
    <div className='appleBasket'>
      <h1><span>{appleCount}</span>Apples</h1>
      <p>{basketName}</p>
    </div>
  )
}

export default AppleBasket
