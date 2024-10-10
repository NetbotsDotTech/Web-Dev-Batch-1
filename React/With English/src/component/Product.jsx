import React from 'react'

const Product = ({productName,productPrice}) => {
  return (
    <div>
      <h3>Product Name:{productName}</h3>
      <h3>Product Price:{productPrice}</h3>
    </div>
  )
}

export default Product
