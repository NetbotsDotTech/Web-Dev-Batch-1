import React from 'react'

const Person = (props) => {
  return (
    <div>
      <h2>Name is: {props.name}</h2>
      <h2>age  is: {props.age}</h2>
    </div>
  )
}

export default Person
