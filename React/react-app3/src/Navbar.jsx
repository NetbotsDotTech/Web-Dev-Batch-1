import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="container">
        <div className="left-nav">
            <span>LOgo</span>
        </div>
        <div className="center-nav">
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Menu</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                </ul>
            </nav>
        </div>
        <div className="right-nav">
            <input type="text" name="" id="" placeholder='Search' />
            <img src="./img1.png" alt="" />
        </div>
    </div>
    
    </>
  )
}

export default Navbar
