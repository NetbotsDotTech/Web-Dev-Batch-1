import React,{useState} from 'react'

const State2 = () => {
    const [count,setCount]=useState(111);

    const increment=()=>setCount(count+1)
    const decrement=()=>{
        let num=count-1
        setCount(num)
        console.log(num)
    }

  return (
    <div style={{margin:"20px" ,textAlign:'center'
    }}>
      <h1 style={{textAlign:"center"}}>Count:{count}</h1>
      <button style={{width:"auto", padding:'10px', margin:"10px",fontSize:"50px"}} onClick={increment}>+</button>
      <button style={{width:"auto", padding:'10px', margin:"10px",fontSize:"50px"}} onClick={decrement}>-</button>

    </div>
  )
}

export default State2
