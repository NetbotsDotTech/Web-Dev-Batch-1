import React from 'react'

const Extra = () => {
    let name='basit ali'
    let date= new Date()
    let number=[1,2,3,4,5,6,7,8,9]
  return (
    <div>
      <p>Name is:{name}</p>
      <p>Date is:{date.getDate()}</p>
      <nav>Number are: {number.map((value,key)=>(
        <ul key={key}>
            <li>{value}</li>
        </ul>
      ) )}</nav>
    </div>
  )
}

export default Extra
