import React from 'react'
import './navigation.css'
import { Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import GridViewIcon from '@mui/icons-material/GridView'
import {Link} from 'react-router-dom'
import  HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined'
import first from '../../../assets/images/header/first.jpeg'


const Navigation = () => {
  return (
   <div className="nav d-flex align-items-center">
    <div className="container-fluid ">
        <div className="row position-relative">
            <div className="col-sm-2 part1 position-static">
               <Button className='bg-success text-white catTab'><GridViewIcon/> &nbsp;  All Category <KeyboardArrowDownIcon/> </Button>

            </div>
            <div className="col-sm-8 part2">
                <nav>
                    <ul className='list list-inline'>
                        <li className='list-inline-item'>
                            <Button><Link>Home</Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>About</Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Shop</Link></Button>
                            <div className="dropdwon_menu">
                                <ul>
                                    <li><Button><Link to='/about'>About Us</Link></Button></li>
                                    <li><Button><Link to='/contact'>Contact Us</Link></Button></li>
                                    <li><Button><Link to='/account'>My Account</Link></Button></li>
                                    <li><Button><Link to='/loing'>Login</Link></Button></li>
                                    <li><Button><Link to='/register'>Register</Link></Button></li>
                                    <li><Button><Link to='/forget'>Forget password</Link></Button></li>
                                    <li><Button><Link to='/reset'>Reset password</Link></Button></li>
                                    <li><Button><Link to='/guide'>Purchase guide</Link></Button></li>
                                    <li><Button><Link to='/policy'>Privacy Policy</Link></Button></li>
                                    <li><Button><Link to='/service'>Term of Services</Link></Button></li>
                                    <li><Button><Link to='/not'>404 Page</Link></Button></li>
                                    
                                </ul>
                            </div>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Vendors</Link></Button>
                        </li>
                        <li className='list-inline-item position-static '>
                            <Button><Link>Mega Menu  <KeyboardArrowDownIcon/></Link></Button>
                            <div className="dropdwon_menu mega w-100 ">
                                <div className="row ">
                                    <div className="col">
                                        <h5 className='text-g'>Fruit and Vegetable</h5>
                                        <ul >
                                            <li className=''><Link to=''>Meat & Poultry</Link></li>
                                            <li><Link to=''>Fresh Vegetable</Link></li>
                                            <li><Link to=''>Herbs & Seasonings</Link></li>
                                            <li><Link to=''>Cuts & Sprouts </Link></li>
                                            <li><Link to=''>Exotic Fruit & Veggies </Link></li>
                                            <li><Link to=''>Packaged Produce </Link></li>

                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h5 className='text-g'>Breakfast and Dairy</h5>
                                        <ul >
                                            <li className=''><Link to=''>Meat & Poultry</Link></li>
                                            <li><Link to=''>Fresh Vegetable</Link></li>
                                            <li><Link to=''>Herbs & Seasonings</Link></li>
                                            <li><Link to=''>Cuts & Sprouts </Link></li>
                                            <li><Link to=''>Exotic Fruit & Veggies </Link></li>
                                            <li><Link to=''>Packaged Produce </Link></li>

                                        </ul>
                                    </div>
                                    <div className="col">
                                        <h5 className='text-g'>Meat and Seafood</h5>
                                        <ul >
                                            <li className=''><Link to=''>Meat & Poultry</Link></li>
                                            <li><Link to=''>Fresh Vegetable</Link></li>
                                            <li><Link to=''>Herbs & Seasonings</Link></li>
                                            <li><Link to=''>Cuts & Sprouts </Link></li>
                                            <li><Link to=''>Exotic Fruit & Veggies </Link></li>
                                            <li><Link to=''>Packaged Produce </Link></li>

                                        </ul>
                                    </div>
                                    <div className="col">
                                        <img src={first} width={300}  />
                                    </div> 
                                </div>
                               
                            </div>
                        </li>    <li className='list-inline-item'>
                            <Button><Link>Blog</Link></Button>
                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Pages  <KeyboardArrowDownIcon/></Link></Button>
                            <div className="dropdwon_menu">
                                <ul>
                                    <li><Button><Link to='/about'>About Us</Link></Button></li>
                                    <li><Button><Link to='/contact'>Contact Us</Link></Button></li>
                                    <li><Button><Link to='/account'>My Account</Link></Button></li>
                                    <li><Button><Link to='/loing'>Login</Link></Button></li>
                                    <li><Button><Link to='/register'>Register</Link></Button></li>
                                    <li><Button><Link to='/forget'>Forget password</Link></Button></li>
                                    <li><Button><Link to='/reset'>Reset password</Link></Button></li>
                                    <li><Button><Link to='/guide'>Purchase guide</Link></Button></li>
                                    <li><Button><Link to='/policy'>Privacy Policy</Link></Button></li>
                                    <li><Button><Link to='/service'>Term of Services</Link></Button></li>
                                    <li><Button><Link to='/not'>404 Page</Link></Button></li>
                                    
                                </ul>
                            </div>

                        </li>
                        <li className='list-inline-item'>
                            <Button><Link>Contact</Link></Button>
                        </li>

                    </ul>
                </nav>

            </div>
            <div className="col-sm-2 part3 d-flex align-items-center">
                <div className="Phno d-flex align-items-center ml-auto">
                    <span><HeadphonesOutlinedIcon/></span>
                    <div className="info ml-3">
                        <h3 className='text-g mb-0'>0008-9105</h3>
                        <p className='mb-0'>24/7 Support Center</p>
                    </div>
                    
                </div>

            </div>
        </div>
         
    </div>
   </div>
  )
}

export default Navigation
