import { useEffect, useState } from "react";
import type { Socket } from "socket.io-client";
import { v4 } from "uuid";
import { io } from "socket.io-client";

const App: React.FC = () => {
  const [userId] = useState(v4());
  const [userIdToChat, setUserIdToChat] = useState("");
  const [isUserIdLock, setUserIdLock] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [currMessage, setCurrmessage] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);

  function sendMessage() {
    if (socket) {
      socket.emit("message", {
        userId,
        userIdToChat,
        currMessage,
      });
      setMessages([...messages, currMessage]);
    }
  }

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    const socket = io("http://localhost:3001");
    setSocket(socket);
    socket.emit("register", userId, () => {
      console.log("user registered successfully");
    });
    socket.emit("message", "Hello server");
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });
  }, []);

  return (
    <div>
      Your user Id:{userId}
      <input
        type="text"
        onChange={(e) => {
          setUserIdToChat(e.target.value);
        }}
        disabled={isUserIdLock}
        value={userIdToChat}
      />
      <button onClick={() => setUserIdLock(!isUserIdLock)}>
        Toogle user id lock
      </button>
      {messages.map((message) => (
        <div className="">{message}</div>
      ))}
      <input
        type="text"
        onChange={(e) => setCurrmessage(e.target.value)}
        value={currMessage}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
};

export default App;
