import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();

const io = new Server(httpServer, {
  cors: "http://localhost:5173",
});

const USERS = [];

io.on("connection", (socket) => {
  console.log("client connected");
  socket.on("register", (userId) => {
    USERS[userId] = socket.id;
  });
  socket.on("message", (messageInfo) => {
    const { userIdToChat, currMessage } = messageInfo;
    console.log(userIdToChat, currMessage);
    io.to(USERS[userIdToChat]).emit("message", currMessage);
  });
  socket.emit("message", "this is a server message");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

httpServer.listen(3000);
io.listen(3001);
