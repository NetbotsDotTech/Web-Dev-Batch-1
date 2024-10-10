import React from 'react'
import './TopProducts.css'
import carrotImg from '../../../assets/images/slider/carrot.jpeg'
import { Link } from 'react-router-dom'
import  Rating  from '@mui/material/Rating'

const TopProducts = (props) => {
  return (
    <>
    <div className="topSellingbox">
    <h4>{props.title}</h4>
    <div className="items d-flex align-items-center ">
           
            <div className="img">
            <Link to="">
                <img src={carrotImg} className='w-100' />
                </Link>
            </div>
           
            <div className="info px-3">
                <Link to=''><h6>Nest Original Coffee-Mate Coffee Creamer</h6> </Link>
                <Rating name='read-only ' value={4} readOnly/>
                <div className="d-flex align-items-center ">
                <span className='price text-g font-weight-bold '>$28.85</span> <span className='oldPrice'>$32.8</span>
            </div>
                

            </div>
    </div>
    <div className="items d-flex align-items-center ">
           
           <div className="img">
           <Link to="">
               <img src={carrotImg} className='w-100' />
               </Link>
           </div>
          
           <div className="info px-3">
               <Link to=''><h6>Nest Original Coffee-Mate Coffee Creamer</h6> </Link>
               <Rating name='read-only ' value={4} readOnly/>
               <div className="d-flex align-items-center ">
               <span className='price text-g font-weight-bold '>$28.85</span> <span className='oldPrice'>$32.8</span>
           </div>
               

           </div>
   </div>
   <div className="items d-flex align-items-center ">
           
           <div className="img">
           <Link to="">
               <img src={carrotImg} className='w-100' />
               </Link>
           </div>
          
           <div className="info px-3">
               <Link to=''><h6>Nest Original Coffee-Mate Coffee Creamer</h6> </Link>
               <Rating name='read-only ' value={4} readOnly/>
               <div className="d-flex align-items-center ">
               <span className='price text-g font-weight-bold '>$28.85</span> <span className='oldPrice'>$32.8</span>
           </div>
               

           </div>
   </div>

    </div>
      
    </>
  )
}

export default TopProducts
