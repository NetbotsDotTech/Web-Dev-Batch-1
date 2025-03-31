import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <>
    <nav className="nav">
        <div className="logo">
            <span className="logotext">ToDo</span>
        </div>
        <ul className="ullist">
            <li className="lilist">Home</li>
            <li className="lilist">YourTask</li>
        </ul>
    </nav>
    
    
    </>
  )
}

export default NavBar
