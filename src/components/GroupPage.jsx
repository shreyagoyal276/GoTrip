import { useState } from "react";
import "./GroupPage.css";

export default function GroupPage({ setPage }) {
  const [budget, setBudget] = useState("");
  const [weather, setWeather] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");

  const getAIRecommendation = async () => {
    if (!budget && !weather && !type && !date) {
      setAiError("Please fill at least one field");
      return;
    }

    setAiLoading(true);
    setAiError("");
    setResult("");

    try {
      const prompt = `
Budget: ${budget || "any"}
Weather: ${weather || "any"}
Travel Type: ${type || "any"}
Date: ${date || "flexible"}

Suggest 3 suitable travel destinations with location name for this user.

Output rules:
- Use plain text only
- Use hyphen bullet points only
- Do not use paragraphs
- Do not use markdown
- Do not use bold, stars, or headings
- Keep each bullet short and clean
- Make the response easy to copy into Notepad

For each destination, use exactly this format:
- Destination: <name>
- Why: <short reason>
- Tip: <short travel tip>

Leave one blank line between destinations.
`.trim();


      const res = await fetch("http://localhost:5002/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: prompt,
          session_id: "travel-ai"
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "AI unavailable");
      }

      setResult(data.reply);
    } catch (err) {
      setAiError(err.message || "Something went wrong");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="group-container">
      <div className="group-bg"></div>

      <h1 className="title">Plan Together</h1>

      <div className="card-row">
        <div className="card glass">
          <h2>Create Group</h2>
          <button onClick={() => setPage("create-group")}>
            Create
          </button>
        </div>

        <div className="card glass">
          <h2>🔗 Join Group</h2>
          <button onClick={() => setPage("join-group")}>
            Join
          </button>
        </div>
      </div>

      <div className="ai-box glass">
        <h2>Smart Destination Finder</h2>

        <div className="inputs">
          <input
            placeholder="Budget (₹)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <select value={weather} onChange={(e) => setWeather(e.target.value)}>
            <option value="">Weather</option>
            <option>Cold</option>
            <option>Warm</option>
            <option>Moderate</option>
          </select>

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Travel Type</option>
            <option>Adventure</option>
            <option>Relax</option>
            <option>Party</option>
            <option>Nature</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button
          className="ai-btn"
          onClick={getAIRecommendation}
          disabled={aiLoading}
        >
          {aiLoading ? "AI Suggesting..." : "AI Suggest"}
        </button>

        {aiError && (
          <div className="result-box" style={{ marginTop: "16px", color: "red" }}>
            <p>{aiError}</p>
          </div>
        )}

        {result && (
          <div className="result-box">
            <h3>✨ Recommended Trip</h3>
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
