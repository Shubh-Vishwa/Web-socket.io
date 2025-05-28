import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import { Socket } from "dgram";

const app = express();

// 1:create a server using http
const server = http.createServer(app);
// 2: create a socket server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//3:use socket events
io.on("connection", (socket) => {
  console.log("connection is established.");

  //emit event to all connected clients
  socket.on("disconnect", () => {
    console.log("connection is  disconnected");
  });
});

server.listen("3000", () => {
  console.log("server is running on port http://localhost:3000");
});
