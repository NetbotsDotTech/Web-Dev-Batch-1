import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  const message=[
    'Welcome to over Store!'
  ]
  return (
   <>
  <Box className="msg">
  {message}
  </Box>
    <AppBar position='sticky'>
     
     <Toolbar>
      <Typography>
        <Link to="\" color='error'>Men</Link>
      </Typography>
  
  
     </Toolbar>
  
  
  
      </AppBar>
   </>
  )
}

export default Header
