import React, { useState } from 'react'

const State4 = () => {
    const [book, setBook]=useState({
        title:'Book of Bable',
        price:2939
    })
    const handleClick=()=>{
        setBook({...book,price:4000
        })
    }
  return (
    <div>
      <h1>Title: {book.title}</h1>
      <h1>Price: {book.price}</h1>
      <button onClick={handleClick}>Change Price</button>
    </div>
  )
}

export default State4
