import { useState } from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "a9c57f1d-73c9-4f3a-bf67-b7f25e3bdda4";

const App = () => {
  const [typing, setTyping] = useState("");
  const handleTyping = (chatId, username) => {
    setTyping(username + " is typing...");
    setTimeout(() => {
      setTyping("");
    }, 3000);
  };
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      onTyping={handleTyping}
      renderChatFeed={(chatAppProps) => (
        <ChatFeed {...chatAppProps} typing={typing} />
      )}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    />
  );
};

export default App;
