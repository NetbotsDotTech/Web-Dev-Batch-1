import React from 'react'
import './Category.css'
import Input from '../../component/Input'

const Category = ({handleChange}) => {
  // console.log("I as a props in CategoryComp..: ",handleChange)

  return (
    <>
      <h3 className='sidebar-title category-title'>Category</h3>
      <div>
        <label className="label">
        <input onChange={handleChange} type="radio" name="test" value='' />
        <span className='checkmark'></span>All
        </label>
        <Input
        handleChange={handleChange}
        value='sneakers'
        title='sneakers'
        name='test'
        />
         <Input
        handleChange={handleChange}
        value='flats'
        title='flats'
        name='test'
        /> <Input
        handleChange={handleChange}
        value='sandals'
        title='sandals'
        name='test'
        />
      </div>


    </>
  )
}

export default Category
