import { useEffect, useState } from "react";
import type { Socket } from "socket.io-client";
import { v4 } from "uuid";
import { io } from "socket.io-client";

const App: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [userId] = useState(v4());
  const [userIdToChat, setUserIdToChat] = useState("");
  const [isUserIdLock, setIsUserIdLock] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [currMessage, setCurrMessage] = useState("");

  function sendMessage() {
    if (socket) {
      socket.emit("message", {
        userIdToChat,
        currMessage,
      });
      setMessages((messages) => [...messages, currMessage]);
    }
  }

  useEffect(() => {
    const socket = io("http://localhost:3001");
    setSocket(socket);
    socket.emit("message", "Hello server");
    socket.emit("register", userId);
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    <div className="">
      your userId :{userId}
      <br />
      <input
        type="text"
        onChange={(e) => setUserIdToChat(e.target.value)}
        value={userIdToChat}
        disabled={isUserIdLock}
      />
      <button onClick={() => setIsUserIdLock(!isUserIdLock)}>
        Lock userId
      </button>
      {messages.map((message) => (
        <div className="">{message}</div>
      ))}
      <input
        type="text"
        onChange={(e) => setCurrMessage(e.target.value)}
        value={currMessage}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default App;
