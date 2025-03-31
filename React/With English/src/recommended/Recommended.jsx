import React from 'react'
import './Recommended.css'
import Button from '../component/Button'

const Recommended = ({handleClick}) => {
  return (
    <>
    <div>
      <h2>Recommended</h2>
      <div className="Recommended-flex">
      <Button onClickHandler={handleClick} value="" title="All"/>
      <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
        <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
        <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
      </div>
    </div>
      
    </>
  )
}

export default Recommended
