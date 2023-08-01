import { Server, Socket } from "socket.io";
import express from 'express';
import http from 'http';
import cors from 'cors';

const port = process.env.PORT || 4001;
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Allow requests from 'http://localhost:3000'
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on('connection', (socket: Socket) => {
  console.log('New client connected');

  socket.on('text change', (newValue: string) => {
    socket.broadcast.emit('text change', newValue); // broadcast the change to all other connected clients
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
