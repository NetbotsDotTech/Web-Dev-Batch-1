import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@mui/material';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  
    // This effect will run every time the `count` value changes.
    console.log(`Count has changed to ${count}`);
  

  const handleIncrease = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h4">Counter: {count}</Typography>
      <Button variant="contained" color="primary" onClick={handleIncrease} style={{ margin: '10px' }}>
        Increase
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDecrease} style={{ margin: '10px' }}>
        Decrease
      </Button>
    </div>
  );
};

export default CounterComponent;
