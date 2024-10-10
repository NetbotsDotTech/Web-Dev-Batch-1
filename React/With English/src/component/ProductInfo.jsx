import React from 'react'

const ProductInfo = () => {
   let obj={
    id:1,
    name:"Rice",
    price:3223
   }

  return (
    <div>
        <h1>Name: {obj.name}</h1>
        <h1>Name: {obj.price}</h1>
    </div>
  )
}

export default ProductInfo
