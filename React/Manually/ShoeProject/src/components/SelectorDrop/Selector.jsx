import React from 'react'
import './Selector.css'

const Selector = () => {
  return (
    <div className='SelectDrop'>
        <div className="searchFeild">
            <input type="text" />
           
        </div>
        <ul className='serachResult'>
                <li>Men</li>
                <li>Women</li>
                <li>Boys</li>
                <li>Girls</li>
                <li>Kids</li>
            </ul>
    
    </div>
  )
}

export default Selector
