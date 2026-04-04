import { useEffect, useRef, useState } from "react";
import "../style/chatbot.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([
    { 
      role: "ai", 
      text: `Hi there! I'm your AI travel assistant, ready to help you discover unique destinations and plan your next adventure. 

To get started, tell me: 

1. What kind of vibe are you looking for?
   (e.g., relaxing, adventurous, cultural, foodie, party, nature escape) 

2. What's your approximate budget?
   (e.g., budget-friendly, moderate, luxury) 

3. Any specific preferences? 
   (e.g., warm weather, historical sites, beaches, mountains, big cities, quiet towns)`
    }
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isOpen]);

  const [lastSent, setLastSent] = useState(0);
  const sessionId = localStorage.getItem("session_id") || Date.now().toString();
  localStorage.setItem("session_id", sessionId);
  const handleSend = async () => {
    const now = Date.now();
    if (now - lastSent < 2000) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Please wait 2 seconds between messages." }
      ]);
      return;
    }

    const userText = prompt.trim();
    if (!userText || loading) return;

    setLastSent(now);
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setPrompt("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5002/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
          message: userText, session_id: sessionId })
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 429) {
          throw new Error("Rate limited. Please wait 10 seconds and try again.");
        }
        throw new Error(data.error || `HTTP ${response.status}`);
      }

      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Sorry, something went wrong." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Format message for proper display
  const formatMessage = (text) => {
    return text.split('\n').map((line, index) => (
      <div key={index} style={{ marginBottom: '4px' }}>
        {line.split('**').reduce((acc, part, i) => {
          if (i % 2 === 1) {
            return [...acc, <strong key={i} style={{ color: '#01696f' }}>{part}</strong>];
          }
          return [...acc, part];
        }, [])}
      </div>
    ));
  };

  return (
    <>
      <button
        className="chat-toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle chat"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {isOpen && (
        <div className="chatbot-wrapper">
          <div className="chat-header">
            <span>Travel Chatbot</span>
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="chat-container">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.role === "user" ? "user-chat-box" : "ai-chat-box"}
              >
                <div 
                  className="text"
                  style={{ 
                    whiteSpace: 'pre-wrap',
                    lineHeight: '1.6',
                    fontSize: '15px',
                    wordWrap: 'break-word'
                  }}
                  // dangerouslySetInnerHTML={{ __html: msg.text }}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="ai-chat-box">
                <div className="text">Thinking...</div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="input-area">
            <input
              type="text"
              className="prompt"
              placeholder="Ask something..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="btn" onClick={handleSend} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
