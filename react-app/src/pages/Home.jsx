import React from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import { Button, Container, Typography } from '@mui/material';

function Home() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(2, 15);
    navigate(`/room/${roomId}`); // Use navigate instead of history.push
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Collaborative Code Editor
      </Typography>
      <Button variant="contained" color="primary" onClick={createRoom}>
        Create Room
      </Button>
    </Container>
  );
}

export default Home;
