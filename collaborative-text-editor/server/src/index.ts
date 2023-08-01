import { Server, Socket } from "socket.io";
import express from 'express';
import http from 'http';

const port: string | number = process.env.PORT || 4001;
const app: express.Express = express();
const server: http.Server = http.createServer(app);
const io: Server = new Server(server);

io.on('connection', (socket: Socket) => {
  console.log('New client connected');

  socket.on('text change', (newValue: string) => {
    socket.broadcast.emit('text change', newValue); // broadcast the change to all other connected clients
  });

  socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(port, () => console.log(`Listening on port ${port}`));
