import React from 'react'
import './Product.css'
import  Rating  from '@mui/material/Rating'
import  ShoppingBagIcon  from '@mui/icons-material/ShoppingBag'
import Cart from '../component/Cart'

function Product({result}) {
  return (
<>
<section className="card-container">{result} </section>
    

</>
  )
}

export default Product
