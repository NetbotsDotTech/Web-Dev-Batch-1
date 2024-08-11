const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());

mongoose.connect('mongodb://localhost:27017/code_editor', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on('codeChange', (data) => {
    socket.to(data.roomId).emit('receiveCodeChange', data);
  });

  socket.on('sendMessage', (data) => {
    socket.to(data.roomId).emit('receiveMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(4000, () => {
  console.log('Server running on port 4000');
});
