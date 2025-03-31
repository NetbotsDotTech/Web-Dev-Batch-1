import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import './App.css'
import image from  './assets/image.jpg'

const App = () => {
  const [fullName,setFullName]=useState('');
  const [fatherName,setFatherName]=useState('')
  const [dob,setDob]=useState('')
  const handle=(e)=>{
    e.preventDefault();
    setFullName('')
    setFatherName('')
    setDob('')
    alert(`FullName:${fullName} \n Father Name:${fatherName}\n Date of Birth:${dob}`)
  }
  return (
   <Box className='mainBox'>
    <Typography variant='h3'>Registration Form</Typography>
    <Avatar src={image} sx={{position:'absolute', left:600}}/> <br /><br />
    <Box className='childBox'>

    <TextField
    variant='standard'
    label='Full-Name'
    type='text'
    value={fullName}
    onChange={(e)=>setFullName(e.target.value)}
    required
    
    sx={{textAlign:'center'}}
    /> <br /> <br />  
    <TextField
    type='text'
    variant='standard'
    label='Father Name'
    value={fatherName}
    onChange={(e)=>setFatherName(e.target.value)}
    required
    
    /><br /> <br />
    <TextField
    type='text'
    label='Date of Brith'
    variant='standard'
    required
    value={dob}
    onChange={(e)=>setDob(e.target.value)}
    
    /> <br /><br /> 
    <Button variant='outlined' onClick={handle} sx={{textTransform:'capitalize'}}  >SignIn</Button>
    </Box>





   </Box>
  )
}

export default App
