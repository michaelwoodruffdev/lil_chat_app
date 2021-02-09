console.log("cmon man");
import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const port = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket: Socket) => {
  console.log(`${socket.id} connected`);
  socket.on("event", (data) => {
    console.log(data);
    io.emit("heard", "socket event heard!");
  });
  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
