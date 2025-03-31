import React, { useState, useEffect } from 'react';
import { Grid, Box, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0); // Initial count set to 0

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, ); // useEffect runs when `count` changes

  const increase = () => {
   
      setCount(count + 1);
    
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Box className='counter' sx={{ p: 3, backgroundColor: '#f0f0f0', borderRadius: 2 }}>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <h1 className='heading1'>Counter: {count}</h1>
        </Grid>
        <Grid item>
          <p className='value'>Value: {count}</p>
        </Grid>
        <Grid item>
          <Box className="btn" sx={{ display: 'flex', gap: 2 }}>
            <IconButton onClick={decrease} color="primary">
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={increase} color="primary">
              <AddIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Counter;
