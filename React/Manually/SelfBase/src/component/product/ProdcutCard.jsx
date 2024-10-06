import React from 'react'
import './ProductCard.css'
import image1 from '../../assets/images/slider/main3.jpg'
import Rating  from '@mui/material/Rating'
import  Button  from '@mui/material/Button'
import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined'
import  RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined'
const ProdcutCard = (props) => {
  return (
    <div className='productThumb'>
        {
            props.tag!==null && props.tag!==undefined && 
            <span className={`badge ${props.tag}`}>{props.tag}</span>
        }

        <Link>
        <div className="imageWraper">
            <img src={image1} alt="" className='w-100 '/>
            <div className="overlay transition">
                <ul className="list list-inline mb-0">
                    <li className="list-inline-item">
                        <a  className="cursor">
                                 <FavoriteBorderOutlinedIcon/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a  className="cursor">
                                 <CompareArrowsOutlinedIcon/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a  className="cursor">
                                <RemoveRedEyeOutlinedIcon/>
                        </a>
                    </li>

                </ul>
            </div>
        </div> 
        </Link>
        <div className="info">
            <span className='d-block catName'>Snack</span>
            <h6 className='title'><Link>Seed of Change Organic, Brown & Red Rice</Link></h6>
            <Rating name='read-only ' value={3} readOnly/>
            <span className='d-block brand text-g'>By <Link className='text-g'>NestFood</Link></span>
        </div>
        <div className="d-flex align-items-center mt-3">
            <div className="d-flex align-items-center ">
                <span className='price text-g font-weight-bold '>$28.85</span> <span className='oldPrice'>$32.8</span>
            </div>
            <Button className='bg-success ml-auto'><ShoppingCartOutlinedIcon/> Add</Button>
        </div>
      
    </div>
  )
}

export default ProdcutCard
