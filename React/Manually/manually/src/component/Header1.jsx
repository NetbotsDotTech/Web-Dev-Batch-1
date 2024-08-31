import { ArrowBack, ArrowBackIos, ArrowBackIosNewTwoTone, ArrowBackSharp, ArrowCircleDown, ArrowCircleRight, ArrowForward, ArrowForwardIosRounded, ArrowForwardRounded, ArrowForwardSharp, ArrowRight, ArrowRightAlt } from '@mui/icons-material'
import { AppBar, Box, Link, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const Header1 = () => {
    const message = [
        'Welcom to our Store',
        'Free Delivery Nationwide for orders above PKR 3000/-'
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const hundleNext = () => {
        setCurrentIndex((pre) => (pre + 1) % message.length)
    }

    return (

        <AppBar position='sticky'>
            <Box sx={{ textAlign: "center", padding: 1, background: "darkgray" }}>
                <Typography sx=
                    {{
                        display: "inline",
                        position: "absolute",
                        left: "40%"

                    }}>
                    {message[currentIndex]}</Typography>
                <ArrowForwardIosRounded sx={{ fontSize: 15, marginLeft: 100, }} onClick={hundleNext}></ArrowForwardIosRounded>
            </Box>

            <Toolbar sx={{ backgroundColor: "black" }}>
                <Typography>
                    <Link to='/Men' sx={{ textDecoration: "none", color: "#ffff", cursor: "pointer" }}>Men</Link>
                </Typography>


            </Toolbar>

        </AppBar>


    )
}

export default Header1
