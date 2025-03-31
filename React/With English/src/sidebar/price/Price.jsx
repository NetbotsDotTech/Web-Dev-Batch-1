import React from 'react'
import './Price.css'
import Input from '../../component/Input'

function Price({ handleChange }) {
  // console.log("I as a props in PriceComp....: ",handleChange)

  return (
    <div className='ml'>
      <h4 className='sidebar-title price-title'>Price</h4>
      <label className="label">
        <input onChange={handleChange} type="radio" name="test2" value='' />
        <span className='checkmark'></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={100}
        title='$0-$100'
        name='test2'
        
      />

      <Input
        handleChange={handleChange}
        value={200}
        title='$100-$200'
        name='test2'
      /><Input
        handleChange={handleChange}
        value={300}
        title='Over $200'
        name='test2'
      />

    

    </div>
  )
}

export default Price
