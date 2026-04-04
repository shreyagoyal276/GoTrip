import { useState, useEffect } from "react";

export default function Chat({ code, name }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    await fetch("http://localhost:5000/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ code, user: name, text })
    });

    setText("");
    fetchMessages();
  };

  const fetchMessages = async () => {
    const res = await fetch(`http://localhost:5000/group/${code}`);
    const data = await res.json();
    setMessages(data.messages || []);
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chat-container">
      <h3>Chat</h3>

      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div className="chat-message" key={i}>
            <span className="chat-user">{msg.user}:</span>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-row">
        <input
          className="chat-input"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type message"
        />

        <button className="chat-send-btn" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}