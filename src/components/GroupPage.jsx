import { useState } from "react";
import "./GroupPage.css";

export default function GroupPage({ setPage }) {
  const [budget, setBudget] = useState("");
  const [weather, setWeather] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [result, setResult] = useState("");

  const getRecommendation = async () => {
    const res = await fetch("http://localhost:5000/recommend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ budget, weather, type, date })
    });

    const data = await res.json();
    setResult(data.result);
  };

  return (
    
    <div className="group-container">

      <h1 className="title">Plan Together</h1>

      {/* 🔥 CARDS */}
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

      {/*  SMART AI SECTION */}
      <div className="ai-box glass">

        <h2>Smart Destination Finder</h2>

        <div className="inputs">

          <input
            placeholder="Budget (₹)"
            onChange={(e) => setBudget(e.target.value)}
          />

          <select onChange={(e) => setWeather(e.target.value)}>
            <option value="">Weather</option>
            <option>Cold</option>
            <option>Warm</option>
            <option>Moderate</option>
          </select>

          <select onChange={(e) => setType(e.target.value)}>
            <option value="">Travel Type</option>
            <option>Adventure</option>
            <option>Relax</option>
            <option>Party</option>
            <option>Nature</option>
          </select>

          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
          />

        </div>

        <button className="ai-btn" onClick={getRecommendation}>
          Get Suggestions
        </button>

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