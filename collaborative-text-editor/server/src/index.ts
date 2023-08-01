import { Server } from "socket.io";
import express from 'express';
import http from 'http';
import cors from 'cors';

const port = process.env.PORT || 4001;
const app = express();

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('text change', (newValue: string) => {
    socket.broadcast.emit('text change', newValue);
  });
  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
