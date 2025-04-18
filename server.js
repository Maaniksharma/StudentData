import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const USERS = {};

const io = new Server(httpServer, {
  cors: "http://localhost:5173",
});

io.on("connection", (socket) => {
  console.log("client connected");

  socket.emit("message", "this is a server message");
  socket.on("register", (userId) => {
    USERS[userId] = socket.id;
  });
  socket.on("message", (messageInfo) => {
    const { userIdToChat, currMessage } = messageInfo;
    io.to(USERS[userIdToChat]).emit("message", currMessage);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

httpServer.listen(3000);
io.listen(3001);
