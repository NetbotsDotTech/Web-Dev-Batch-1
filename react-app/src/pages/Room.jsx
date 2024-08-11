import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';

const socket = io('http://localhost:4000');

function Room() {
  const { id } = useParams();
  const [code, setCode] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.emit('joinRoom', id);

    socket.on('receiveCodeChange', (data) => {
      setCode(data.code);
    });

    socket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    setCode(newCode);
    socket.emit('codeChange', { roomId: id, code: newCode });
  };

  const sendMessage = () => {
    socket.emit('sendMessage', { roomId: id, message });
    setMessages((prevMessages) => [...prevMessages, { message }]);
    setMessage('');
  };

  return (
    <Container>
      <Typography variant="h4">Room: {id}</Typography>
      <Paper>
        <TextField
          label="Code Editor"
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          value={code}
          onChange={handleCodeChange}
        />
      </Paper>
      <Paper>
        <Typography variant="h6">Chat</Typography>
        <div>
          {messages.map((msg, index) => (
            <Typography key={index}>{msg.message}</Typography>
          ))}
        </div>
        <TextField
          label="Message"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={sendMessage}>
          Send
        </Button>
      </Paper>
    </Container>
  );
}

export default Room;
