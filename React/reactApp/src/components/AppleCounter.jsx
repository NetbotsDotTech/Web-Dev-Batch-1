import React, { useState } from 'react'
import Button from './Button'
import left from "../Image/left.png"
import right from "../Image/right.png"
import AppleBasket from './AppleBasket'
import "./appleCounter.css"


const AppleCounter = () => {
  const totalAppleCount=10
 const [rightAppleCount,setRightAppleCount]=useState(0)
 const [leftAppleCount,setLeftAppleCount]=useState(totalAppleCount-rightAppleCount)
  const leftClickHandler=()=>{
   if(rightAppleCount>0){
    setRightAppleCount(rightAppleCount-1)
    setLeftAppleCount(leftAppleCount+1)
   }
   console.log("left")

  
  }
  const rightClickHandler=()=>{
    if(rightAppleCount>0){
      setRightAppleCount(rightAppleCount+1)
      setLeftAppleCount(leftAppleCount-1)

     }
     console.log("right")

    

  }
  return (
    <section>
    <AppleBasket appleCount={10} basketName="Basket-1"/>
    <Button 
    clickHandler={leftClickHandler}
    props={left} 
    arrowName="Left-Arrow"
    /> 
    <Button
     props={right}
    arrowName="Right-Arrow  "
    clickHandler={rightClickHandler}  
      /> 
    <AppleBasket appleCount={0} basketName="Basket-2"/>

    
    </section>
  )
}

export default AppleCounter
