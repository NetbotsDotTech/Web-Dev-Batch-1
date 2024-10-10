import React, { useState } from 'react'

const State5 = () => {
    const [data,setData]=useState([
        {id:1, title:"Laptop" ,price:3434},
        {id:2, title:"mobile" ,price:1111},
        {id:3, title:"LED" ,price:4545},
        
    ])
    const changeTitle=()=>{
        setData(data.map((val)=>val.id===1?{...data,title:"pen",price:40}:val))
    }
  return (
    <div>
      {
        data.map((val)=>(
           <ul key={val.id}>
             <li>Title:{val.title}</li>
            <li >Price:{val.price}</li>
           
           </ul>
        ))
      }
      <button onClick={changeTitle}>change</button>
    </div>
  )
}

export default State5
