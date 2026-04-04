import { useState } from "react";
import "./QuickPlanner.css";

export default function QuickPlanner() {
  const [city, setCity] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState("");
  const [plan, setPlan] = useState("");

  const generatePlan = async () => {
    const res = await fetch("http://localhost:5000/quick-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ city, time, interest })
    });

    const data = await res.json();
    setPlan(data.result);
  };

  return (
    <div className="qp-container">

      <h1>Quick Trip Planner</h1>

      <div className="qp-card">

        <input
          placeholder="Enter City (e.g., Mumbai)"
          onChange={(e) => setCity(e.target.value)}
        />

        <select onChange={(e) => setTime(e.target.value)}>
          <option value="">Select Time</option>
          <option>3 Hours</option>
          <option>1 Day</option>
          <option>2 Days</option>
        </select>

        <select onChange={(e) => setInterest(e.target.value)}>
          <option value="">Interest</option>
          <option>Food</option>
          <option>Adventure</option>
          <option>Culture</option>
          <option>Shopping</option>
        </select>

        <button onClick={generatePlan}>
          Generate Plan
        </button>

      </div>

      {plan && (
        <div className="qp-result">
          <h3>Your Plan</h3>
          <p>{plan}</p>
        </div>
      )}

    </div>
  );
}