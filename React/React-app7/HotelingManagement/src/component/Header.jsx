import React from 'react'
import {AppBar, Box, Link, Toolbar} from "@mui/material"
import logo from '../assets/image/logo.png'

const Header = () => {
  return (
    <>
    <AppBar position='fixed'>
    <Toolbar>
       <Link>
       <Box
        component="img"
        sx={{
            height:70,
            display:{xs:'none' ,sm:'block'},
            marginLeft:'auto',
            marginRight:'auto '

        }}
        alt='Logo'
        src={logo}
        
        />
       </Link>

    </Toolbar>
    </AppBar>
      
    </>
  )
}

export default Header
