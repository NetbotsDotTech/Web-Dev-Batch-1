import React from 'react'
import './InputTag.css'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'
import Button from '@mui/material/Button'

const InputTag = () => {
  return (
    <div className="newsletter">
      <SendOutlinedIcon/>
      <input type="text"  placeholder='Your Email Address'/>
      <Button className='bg-success'>Subscribe</Button>
    </div>
  )
}

export default InputTag
