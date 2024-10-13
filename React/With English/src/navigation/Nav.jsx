import React from 'react'
import './Nav.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import  FavoriteIcon  from '@mui/icons-material/Favorite'
const Nav = () => {
  return (
<nav>
  <div className="nav-container">
    <input
     type="text" 
     className='search-input'
     placeholder='Enter your search shoes.'
     
     />
  </div>
  <div className="profile-container">
    <a href="#">
    <FavoriteIcon className='nav-icon'/>

    </a>
    <a href="#">
      <ShoppingCartIcon className='nav-icon'/>
    </a>
    <a href="#">
      <AccountCircleIcon className='nav-icon'/>

    </a>
  </div>
</nav>
  )
}

export default Nav
