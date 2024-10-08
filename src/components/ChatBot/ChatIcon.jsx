import React, { useEffect, useRef, useState } from "react";
import ChatBot from "./ChatBot";
import "./ChatBot.css";
import BotIcon from "../../assets/icon/bot-icon.svg";

function ChatIcon() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatRef = useRef(null);

  const handleClickOutside = (event) => {
    if (chatRef.current && !chatRef.current.contains(event.target)) {
      setIsChatOpen(false);
    }
  };

  useEffect(() => {
    if (isChatOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  return (
    <div className="chat-icon-container position-fixed bottom-0 end-0 m-4">
      <img
        src={BotIcon}
        alt="Chat"
        className="chat-icon cursor-pointer"
        onClick={() => setIsChatOpen((prev) => !prev)}
      />

      {isChatOpen && (
        <div ref={chatRef}>
          <ChatBot />
        </div>
      )}
    </div>
  );
}

export default ChatIcon;
