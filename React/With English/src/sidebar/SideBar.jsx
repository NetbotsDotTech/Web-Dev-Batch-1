import React from 'react'
import './SideBar.css'
import logo from '../db/image/logo.png'
import Category from '../sidebar/category/Category'
import Price from '../sidebar/price/Price'
import Color from '../sidebar/color/Color'
function SideBar({handleChange}) {
  // console.log("I as a props in SideBarComp: ",handleChange)
  return (
    <div className='side'>
    <section className='sidebar'>
        <div className="logo-container">
            <img src={logo} width={50} />
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Color handleChange={handleChange}/>
    </section>
    </div>
  )
}

export default SideBar
