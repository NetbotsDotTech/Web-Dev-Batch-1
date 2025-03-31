import React from 'react'
import './Color.css'
import Input from '../../component/Input'

function Color({handleChange}) {
  // console.log("I as a props in ColorComp....: ",handleChange)

  return (
    <div>
      <h4 className='sidebar-title color-title'>Color</h4>
      <label className="label">
        <input onChange={handleChange} type="radio" name="test3" value='' />
        <span className='checkmark all'></span>All
      </label>

      <Input
        handleChange={handleChange}
        value='black'
        title='Black'
        name='test3'
        color="black"
      />  
      
          
      <Input
        handleChange={handleChange}
        value='red'
        title='Red'
        name='test3'
        color="red"

      />     
        
       <label className="label">
       <input
       type='radio'
        onChange={handleChange}
        value='white'
        name='test3'
        
      />
        <span
         className='checkmark '

         style={{
          backgroundColor:'white',
          border:"2px solid black"
         }}
         
         ></span>White
      </label>   
        
    </div>
  )
}

export default Color
