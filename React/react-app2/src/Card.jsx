import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <>


      <div className="container">


        <div className="card">
          <span>{props.title}</span>

        </div>
        <div className="card">
          <span>{props.title}</span>
        </div>
        <div className="card">
          <span>{props.title}</span>
        </div>
        <div className="card">
          <span>{props.title}</span>
        </div>
        <div className="card">
          <span>{props.title}</span>
        </div>




      </div>








    </>
  )
}

export default Card
