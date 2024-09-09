import React, { useState,useEffect } from 'react'
import './style.css'

const BackgroundChanger = () => {
    const [color,setColor]=useState("olive")
    useEffect(()=>{
        console.log(`Current color is: ${color}`)
    },[color])
  return (
   <>
   <div className='bgchanger'  style={{ backgroundColor:color}}> 
    <div className="buttons">
        <div className='bar'>
            <button onClick={()=>setColor("red")} className='btn' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("blue")} className='btn' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("green")} className='btn' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("gray")} className='btn' style={{backgroundColor:"gray"}}>Gray</button>
            <button onClick={()=>setColor("yellow")} className='btn' style={{backgroundColor:"yellow"}}>Yellow</button>
            <button onClick={()=>setColor("pink")} className='btn' style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setColor("purple")} className='btn' style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={()=>setColor("black")} className='btn' style={{backgroundColor:"black"}}>Black</button>
            
        </div>
    </div>
   </div>
   
   
   </>
  )
}

export default BackgroundChanger
