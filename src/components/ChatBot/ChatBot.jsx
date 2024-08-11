import React, { useState } from "react";
import useAutoScroll from "../Hooks/useAutoScroll";
import { Button } from "../Ui/Button/Button";
import sendIcon from "../../assets/icon/send.svg";
import carebotLogo from "../../assets/icon/carebot.svg";
import arrowDown from "../../assets/icon/arrow-down-2.svg";
import deleteIcon from "../../assets/icon/delete-icon-red.svg";
import "./ChatBot.css";
import useShortcutKeyboard from "../Hooks/useShortcutKeyboard";
import BubbleBot from "../Ui/Bubble/BubbleBot";
import axios from "axios";
import { prompt } from "../../Utils/ChatAI";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(false);
  const [historyChats, setHistoryChats] = useState([]);
  const { bottomRef, scrollToBottom } = useAutoScroll();

  const { shortcutInputBot } = useShortcutKeyboard("k");

  const handleClearChat = () => {
    setMenu(false);
    setHistoryChats([]); // Menghapus riwayat chat
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (question.trim() && !loading) {
      await generateAnswer();
    }
  };

  const onEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (question.trim() && !loading) {
        generateAnswer();
      }
    }
  };

  async function generateAnswer() {
    setLoading(true);
    const combinedMessage = prompt + question;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: combinedMessage }] }],
        },
      });

      const botResponse = response.data.candidates[0].content.parts[0].text;

      // Update riwayat chat dengan pertanyaan pengguna dan balasan bot
      setHistoryChats([
        ...historyChats,
        {
          author: "user",
          content: question,
          date: new Date().toISOString(),
          type: "text",
          status: "sent",
        },
        {
          author: "bot",
          content: botResponse,
          date: new Date().toISOString(),
          type: "text",
          status: "received",
        },
      ]);

      // Kosongkan input setelah mengirim pesan
      setQuestion("");
    } catch (error) {
      console.log(error);
      setHistoryChats([
        ...historyChats,
        {
          author: "bot",
          content: "Maaf, terjadi kesalahan. Silakan coba lagi nanti.",
          date: new Date().toISOString(),
          type: "text",
          status: "error",
        },
      ]);
    }

    setLoading(false);
    scrollToBottom(); // Scroll otomatis ke bawah setelah menerima jawaban
  }

  return (
    <div className="chatbot-container pt-5 bg-white">
      <div className="chatbot-header">
        <div className="header-content">
          <img src={carebotLogo} alt="Carebot Logo" className="carebot-logo" />
          <span className="carebot-title">Sobat Bot</span>
        </div>
        <button
          type="button"
          className="close-btn"
          onClick={() => setMenu(!menu)}
        >
          <img src={arrowDown} alt="Close" className="close-btn" />
        </button>
        {menu && (
          <Button
            type="button"
            className="position-absolute delete-menu text-danger bg-white border fw-semibold"
            onClick={handleClearChat}
          >
            <div className="d-flex flex-row gap-5 justify-content-between grey-hover px-2 py-1 rounded-3">
              <p>Hapus Pesan</p>
              <img src={deleteIcon} width={24} height={24} alt="Close" />
            </div>
          </Button>
        )}
      </div>
      <div className={`chat-history py-5 px-3 position-relative`}>
        {historyChats.map((message, index) => {
          const date = new Date(message.date);
          const hours = date.getHours();
          const minutes = date.getMinutes();
          return (
            <React.Fragment key={index}>
              <BubbleBot
                author={message.author}
                text={message.content}
                date={message.date}
                type={message.type}
                status={message.status}
                time={`${hours}:${minutes}`}
              />
            </React.Fragment>
          );
        })}
        <div className="py-5" ref={bottomRef} />
        {loading && <span className="loader mx-auto"></span>}
      </div>

      <form className="user-input" onSubmit={handleSubmit}>
        <div className="position-relative w-100">
          <input
            ref={shortcutInputBot}
            name={"Input-bot"}
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => onEnter(e)}
            placeholder="Kirim Pertanyaan"
            className="form-control input-field rounded-5 border-0 w-100 pe-5 bg-neutral-200"
          />
          <button
            type="submit"
            disabled={loading || !question}
            style={{
              right: loading ? "10px" : "30px",
            }}
            className="send-button"
          >
            {loading ? (
              <div
                className="spinner-border spinner-border-sm text-secondary"
                role="status"
              >
                <span className="visually-hidden send-icon">Loading...</span>
              </div>
            ) : (
              <img
                src={sendIcon}
                alt="Send"
                className="send-icon position-absolute"
              />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatBot;
