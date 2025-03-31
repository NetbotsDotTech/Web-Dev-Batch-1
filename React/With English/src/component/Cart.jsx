import React from 'react'
import card1 from '../db/image/card/card1/1.avif'
import  Rating  from '@mui/material/Rating'
import  ShoppingBagIcon  from '@mui/icons-material/ShoppingBag'

const Cart = ({id,image,title,star,prevPrice,newPrice,reviews}) => {
  
  return (
<section className="card">
        <img src={image} alt={title}  className='card-img'/>
        <div className="card-detail">
          <h3 className='card-title'>{title}</h3>
          <section className="card-reviews">
            <Rating className='rating-star' value={star} readOnly/>
            <span className="total-review">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del>{newPrice}
            </div>
            <div className="bag">
              <ShoppingBagIcon className='bag-icon'/>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Cart
