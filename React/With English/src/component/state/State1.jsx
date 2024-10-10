import React,{useState} from 'react'

const State1 = () => {
    const count=useState(0)
    const name=useState('Basit')
    const [age,setAge]=useState(12)
    console.log(age)
    console.log("function:      ",setAge)
    console.log(count)
    console.log(name)
  return (
    <div>
      <h1>name: {name}</h1>
      <h1>Number: {count }</h1>
      <h1>Age: {age}</h1>
      <h1>function:{()=>setAge()    }</h1>
    </div>
  )
}

export default State1
