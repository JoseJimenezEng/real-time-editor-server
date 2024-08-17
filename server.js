const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({
  origin: "https://realtimeclient.netlify.app", 
  methods: ["GET", "POST"]
}));

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "https://realtimeclient.netlify.app", 
    methods: ["GET", "POST"]
  }
});

let rooms = {};

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('join room', ({ username, room }) => {
    socket.join(room);
    if (!rooms[room]) {
      rooms[room] = [];
    }
    rooms[room].push({ id: socket.id, username });

    io.to(room).emit('room data', rooms[room]);
    console.log(`${username} joined room: ${room}`);
  });

  socket.on('text update', ({ text, room }) => {
    socket.to(room).emit('text update', text);
  });

  socket.on('disconnect', () => {
    for (let room in rooms) {
      rooms[room] = rooms[room].filter(user => user.id !== socket.id);
      io.to(room).emit('room data', rooms[room]);
    }
    console.log('Client disconnected');
  });
});

server.listen(process.env.PORT, () => {
  console.log('Server is running on port ' + process.env.PORT);
});
