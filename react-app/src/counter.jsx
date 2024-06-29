import React,{useState} from 'react'
import './Counter.css'

const Counter = () => {
    const [count,setCount]=useState(0)

    const increase=()=>{
        if(count<20){
            setCount(count+1)
            console.log(count)
        }
    }
    const decrease=()=>{
        if(count>0){
            setCount(count-1)
            console.log(count)
        }
        
    }

  return (
    <div className='counter'>
      <h1 className='heading1'>Counter:- {count}</h1>
      <p className='value'>Value:{count}</p>
      
      <div className="btn">
        <button onClick={decrease}>Decrease</button>
        <button onClick={increase}>Increase</button>
      </div>
    </div>
  )
}

export default Counter
