// import { useState } from "react"

// function TourismInsights() {

//   const [active, setActive] = useState("tourism")

//   const data = {
//     tourism: [
//       "Agra & Delhi dominate tourist inflow",
//       "Domestic tourism contributes the majority of visitors"
//     ],
//     travel: [
//       "Air travel accounts for over 90% of international arrivals",
//       "Peak tourism occurs during winter, especially December"
//     ],
//     risks: [
//       "High air pollution in Ahmedabad and Delhi",
//       "Accident-prone cities: Dwarka and Siliguri",
//       "Heavy rainfall impact in Mumbai, Kolkata, Pune",
//       "Maharashtra has highest property crime rates"
//     ],
//     demographics: [
//       "25–44 age group dominates tourism",
//       "Young professionals drive travel demand"
//     ],
//     climate: [
//       "Moderate months offer best travel conditions",
//       "Temperature declines from summer to winter"
//     ]
//   }

//   return (
//     <section className="tourism-insights container">

//       <h2>Key Insights</h2>

//       {/* CATEGORY TABS */}
//       <div className="insight-tabs">

//         <button onClick={() => setActive("tourism")}>
//           Tourism Patterns
//         </button>

//         <button onClick={() => setActive("travel")}>
//           Travel & Seasonality
//         </button>

//         <button onClick={() => setActive("risks")}>
//           Risks & Challenges
//         </button>

//         <button onClick={() => setActive("demographics")}>
//           Demographics
//         </button>

//         <button onClick={() => setActive("climate")}>
//           Climate
//         </button>

//       </div>

//       {/* INSIGHT CONTENT */}
//       <div className="insight-content">

//         {data[active].map((item, index) => (
//           <div className="insight-item" key={index}>
//             {item}
//           </div>
//         ))}

//       </div>

//     </section>
//   )
// }

// export default TourismInsights

import { useState } from "react";

import dashboard1 from "../assets/Dashboard 1.png";
import dashboard2 from "../assets/Dashboard 2.png";

function TourismInsights() {
  const [active, setActive] = useState("tourism");

  const tabs = [
    { key: "tourism", label: "Tourism" },
    { key: "travel", label: "Travel" },
    { key: "risks", label: "Risks" },
    { key: "demographics", label: "Demographics" },
    { key: "climate", label: "Climate" },
  ];

  const data = {
    tourism: [
      "Agra & Delhi dominate tourist inflow",
      "Domestic tourism contributes the majority of visitors",
    ],
    travel: [
      "Air travel accounts for over 90% of international arrivals",
      "Peak tourism occurs during winter, especially December",
    ],
    risks: [
      "High air pollution in Ahmedabad and Delhi",
      "Accident-prone cities: Dwarka and Siliguri",
      "Heavy rainfall impact in Mumbai, Kolkata, Pune",
      "Maharashtra has highest property crime rates",
    ],
    demographics: [
      "25–44 age group dominates tourism",
      "Young professionals drive travel demand",
    ],
    climate: [
      "Moderate months offer best travel conditions",
      "Temperature declines from summer to winter",
    ],
  };

  return (
    <section className="insights-section">

      {/* HEADER */}
      <div className="insights-header">
        <h2>Smart Travel Insights</h2>
        <p>AI-powered insights to plan your perfect trip</p>
      </div>

      {/* TABS */}
      <div className="insight-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={active === tab.key ? "active" : ""}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* INSIGHTS GRID */}
      <div className="insight-grid">
        {data[active].map((item, index) => (
          <div className="insight-card" key={index}>
            <span className="bullet">✨</span>
            <p>{item}</p>
          </div>
        ))}
      </div>

      {/* 🔥 DASHBOARDS SECTION */}
      <div className="dashboard-section">
        <h3>Data Dashboards</h3>

        <div className="dashboard-container">
          
          <div className="dashboard-item">
            <p>Tourism Analysis</p>
            <img src={dashboard1} alt="Dashboard 1" />
          </div>

          <div className="dashboard-item">
            <p>Risk Insights</p>
            <img src={dashboard2} alt="Dashboard 2" />
          </div>

        </div>
      </div>

    </section>
  );
}

export default TourismInsights;


