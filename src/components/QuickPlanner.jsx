import { useState } from "react";
import "./QuickPlanner.css";
import bgImage from "../assets/1976998.jpg";

export default function QuickPlanner() {
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState("");
  const [plan, setPlan] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");

  const generatePlan = async () => {
    if (!city && !time && !interest) {
      setAiError("Please fill at least one field");
      return;
    }

    setAiLoading(true);
    setAiError("");
    setPlan("");

    try {
      const prompt = `
City: ${city || "any"}
Available Time: ${time || "flexible"}
Interest: ${interest || "any"}

Create a short and useful travel plan for this user.

Output rules:
- Use plain text only
- Use hyphen bullet points only
- Do not use markdown
- Do not use paragraphs
- Do not use headings
- Keep the response easy to read
- Make it suitable for quick travel planning

Use exactly this format:
- Place: <name>
- Activity: <short activity>
- Best Time: <short suggestion>
- Tip: <short practical tip>

Leave one blank line between places.
      `.trim();

      const res = await fetch("http://localhost:5002/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: prompt,
          session_id: "quick-planner-ai"
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "AI unavailable");
      }

      setPlan(data.reply);
    } catch (err) {
      setAiError(err.message || "Something went wrong");
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px"
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.65)",
          zIndex: 0,
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(176, 210, 222, 0.72)",
          zIndex: 1
        }}
      />

      {/* Main content */}
      <div
        className="qp-container"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "700px"
        }}
      >
        <h1>Quick Trip Planner</h1>

        <div className="qp-card">
          <input
            placeholder="Enter City (e.g., Mumbai)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">Select Time</option>
            <option>3 Hours</option>
            <option>1 Day</option>
            <option>2 Days</option>
          </select>

          <select value={interest} onChange={(e) => setInterest(e.target.value)}>
            <option value="">Interest</option>
            <option>Food</option>
            <option>Adventure</option>
            <option>Culture</option>
            <option>Shopping</option>
          </select>

          <button onClick={generatePlan} disabled={aiLoading}>
            {aiLoading ? "AI Planning..." : "Generate Plan"}
          </button>
        </div>

        {aiError && (
          <div className="qp-result" style={{ color: "red" }}>
            <p>{aiError}</p>
          </div>
        )}

        {plan && (
          <div className="qp-result">
            <h3>Your Plan</h3>
            <p style={{ whiteSpace: "pre-line" }}>{plan}</p>
          </div>
        )}
      </div>
    </div>
  );
}
