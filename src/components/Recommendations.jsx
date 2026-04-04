// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useTranslation } from "react-i18next";
// import '../style/Recommendations.css';

// const Recommendations = ({ title, limit = 6 }) => {
//   const { t } = useTranslation();

//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [userInput, setUserInput] = useState({
//     region: '',
//     category: '',
//     state: ''
//   });
//   const [showRandom, setShowRandom] = useState(true);
//   const [error, setError] = useState(null);


//   const ML_API_URL = import.meta.env.VITE_ML_URL || 'http://localhost:5000';
//   const getAPIUrl = () => `${ML_API_URL}/api/recommend`;


//     // DEFAULT IMAGE FOR ALL DESTINATIONS
//   const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop&crop=entropy&auto=format";

//   const DEFAULT_RECOMMENDATIONS = [
//     { name: 'Goa', state: 'Goa', tagline: 'Sun-kissed beaches and Portuguese charm', image: DEFAULT_IMAGE },
//     { name: 'Agra', state: 'Uttar Pradesh', tagline: 'Home of the Taj Mahal', image: DEFAULT_IMAGE },
//     { name: 'Manali', state: 'Himachal Pradesh', tagline: 'Snow mountains and adventure', image: DEFAULT_IMAGE }
//   ];

//   const getRecommendations = async (prefs = {}) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(getAPIUrl(), {
//         ...prefs,
//         State: prefs.state || '',
//         Region: prefs.region || '',
//         Category: prefs.category || ''
//       }, { 
//         timeout: 20000 ,
//         headers: { 'Content-Type': 'application/json' }
//       });

//       const recs = response.data.recommendations?.slice(0, limit) || [];

//       const safeRecs = recs.map(rec => ({
//         name: rec.name || 'Amazing Place',
//         state: rec.state || 'India',
//         tagline: 'Discover incredible destinations',
//         image: DEFAULT_IMAGE
//       }));

//       setRecommendations(safeRecs);
//       setShowRandom(false);

//     } catch (error) {
//       setError(t("ml_error"));
//       setRecommendations(DEFAULT_RECOMMENDATIONS.slice(0, limit));
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setRecommendations(DEFAULT_RECOMMENDATIONS.slice(0, 3));
//   }, []);

//   const handleSuggest = async () => {
//     if (userInput.region || userInput.category || userInput.state) {
//       await getRecommendations(userInput);
//     } else {
//       alert(t("select_pref"));
//     }
//   };

//   return (
//     <section className="recommendations-section">
//       <div className="container">

//         <h2>{title || t("ai_title")} <span className="ai-badge"></span></h2>

//         <p className="subtitle">
//           {showRandom 
//             ? t("popular_desc")
//             : t("ai_desc")
//           }
//         </p>

//         {/* Input Form */}
//         <div className="input-section">
//           <div className="input-group">

//             <select value={userInput.region} 
//               onChange={(e) => setUserInput({...userInput, region: e.target.value})}>
//               <option value="">{t("any_region")}</option>
//               <option value="north">{t("north")}</option>
//               <option value="south">{t("south")}</option>
//               <option value="east">{t("east")}</option>
//               <option value="west">{t("west")}</option>
//             </select>

//             <select value={userInput.category} 
//               onChange={(e) => setUserInput({...userInput, category: e.target.value})}>
//               <option value="">{t("any_category")}</option>
//               <option value="nature">{t("nature")}</option>
//               <option value="beach">{t("beach")}</option>
//               <option value="heritage">{t("heritage")}</option>
//               <option value="religious">{t("religious")}</option>
//             </select>

//             <select value={userInput.state} 
//               onChange={(e) => setUserInput({...userInput, state: e.target.value})}>
//               <option value="">{t("any_state")}</option>
//               <option value="kerala">Kerala</option>
//               <option value="punjab">Punjab</option>
//               <option value="west bengal">West Bengal</option>
//               <option value="uttar pradesh">Uttar Pradesh</option>
//               <option value="himachal pradesh">Himachal Pradesh</option>
//               <option value="rajasthan">Rajasthan</option>
//             </select>

//           </div>

//           <button className="suggest-btn" onClick={handleSuggest} disabled={loading}>
//             {loading ? t("predicting") : t("get_ai")}
//           </button>
//         </div>

//         {/* Results */}
//         {loading ? (
//           <div className="loading">
//             <div className="spinner"></div>
//             <p>{t("ml_loading")}</p>
//           </div>
//         ) : error ? (
//           <div className="error-notice">
//             ⚠️ {error}
//           </div>
//         ) : recommendations.length > 0 ? (
//           <div className="cards-grid">
//             {recommendations.map((rec, index) => (
//               <div key={index} className="destination-card">
//                 <img src={rec.image} alt={rec.name} />
//                 <div className="card-content">
//                   <h3>{rec.name.toUpperCase()}</h3>
//                   <p className="state">📍 {rec.state}</p>
//                   <p className="tagline">"{rec.tagline}"</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="no-results">
//             <p>{t("no_results")}</p>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default Recommendations;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Recommendations = ({ title, limit = 6 }) => {
  const { t } = useTranslation();

  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    region: "",
    category: "",
    state: "",
  });
  const [showRandom, setShowRandom] = useState(true);
  const [error, setError] = useState(null);

  const ML_API_URL =
    import.meta.env.VITE_ML_URL || "http://localhost:5000";

  const DEFAULT_IMAGE =
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop";

  const DEFAULT_RECOMMENDATIONS = [
    { name: "Goa", state: "Goa", tagline: "Sun-kissed beaches", image: DEFAULT_IMAGE },
    { name: "Agra", state: "Uttar Pradesh", tagline: "Home of Taj Mahal", image: DEFAULT_IMAGE },
    { name: "Manali", state: "Himachal Pradesh", tagline: "Snow & adventure", image: DEFAULT_IMAGE },
  ];

  const getRecommendations = async (prefs = {}) => {
    setLoading(true);
    setError(null);

    try {
      const res = await axios.post(`${ML_API_URL}/api/recommend`, prefs);

      const recs = res.data.recommendations?.slice(0, limit) || [];

      const safe = recs.map((rec) => ({
        name: rec.name || "Amazing Place",
        state: rec.state || "India",
        tagline: "Discover incredible destinations",
        image: DEFAULT_IMAGE,
      }));

      setRecommendations(safe);
      setShowRandom(false);
    } catch (err) {
      setError("AI service unavailable");
      setRecommendations(DEFAULT_RECOMMENDATIONS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRecommendations(DEFAULT_RECOMMENDATIONS);
  }, []);

  const handleSuggest = () => {
    if (userInput.region || userInput.category || userInput.state) {
      getRecommendations(userInput);
    } else {
      alert("Please select at least one preference");
    }
  };

  return (
    <section className="recommend-section">

      {/* Header */}
      <div className="recommend-header">
        <h2>
          {title || "AI Travel Recommendations"} <span className="ai-badge">AI</span>
        </h2>
        <p>
          {showRandom
            ? "Explore trending destinations"
            : "Personalized results just for you"}
        </p>
      </div>

      {/* Input Panel */}
      <div className="recommend-input">

        <div className="input-group">
          <select onChange={(e) => setUserInput({ ...userInput, region: e.target.value })}>
            <option value="">Any Region</option>
            <option value="north">North</option>
            <option value="south">South</option>
            <option value="east">East</option>
            <option value="west">West</option>
          </select>

          <select onChange={(e) => setUserInput({ ...userInput, category: e.target.value })}>
            <option value="">Any Category</option>
            <option value="nature">Nature</option>
            <option value="beach">Beach</option>
            <option value="heritage">Heritage</option>
          </select>

          <select onChange={(e) => setUserInput({ ...userInput, state: e.target.value })}>
            <option value="">Any State</option>
            <option value="kerala">Kerala</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="himachal pradesh">Himachal</option>
          </select>
        </div>

        <button className="ai-btn" onClick={handleSuggest} disabled={loading}>
          {loading ? "Thinking..." : "Get AI Suggestions →"}
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="loader">Loading recommendations...</div>
      ) : error ? (
        <div className="error-box">⚠ {error}</div>
      ) : (
        <div className="recommend-grid">
          {recommendations.map((rec, i) => (
            <div key={i} className="recommend-card">
              <img src={rec.image} alt={rec.name} />
              <div className="card-info">
                <h3>{rec.name}</h3>
                <p className="state">📍 {rec.state}</p>
                <p className="tagline">{rec.tagline}</p>
              </div>
            </div>
          ))}
        </div>
      )}

    </section>
  );
};

export default Recommendations;