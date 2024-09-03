import React from 'react'

import './Header.css'
import logo from '../../assets/images/logoOfShoees.png'
import Icon from '../../assets/images/search.png'
import Selector from '../SelectorDrop/Selector'

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className='row '>
            <div className='col-sm-2'>
              <img src={logo} alt="" />

            </div>
            {/*Header search start from here*/}
            <div className='col-sm-5'>
              <div className="headerSearch ">
              <div className="selectDrop cursor">
                All Category
                <Selector/>

              </div>
              <div className="search">
                <input type="text"  placeholder='Search for Shoes...'/>
              
                <img src={Icon} alt="" className='cursor' />
              </div>
              </div>
            </div>
            {/*Header search end from here*/}
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
