import React from 'react'
import { Button } from '@mui/material'
import '../../css/Button.css'

const Buttons = ({
  children,
  ...props
}) => {
  return (
    <div>
      <Button className='btn'{...props} >{children}</Button>
    </div>
  )
}

export default Buttons
