const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: "https://aesthetic-unicorn-279590.netlify.app", 
  methods: ["GET", "POST"]
}));

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "https://aesthetic-unicorn-279590.netlify.app", 
    methods: ["GET", "POST"]
  }
});


io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('text update', (text) => {
    socket.broadcast.emit('text update', text);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
