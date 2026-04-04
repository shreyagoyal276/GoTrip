import { useState } from "react";

function LocationSearch() {
  const [query, setQuery] = useState("");

  const suggestions = ["Goa", "Manali", "Jaipur", "Kerala", "Ladakh"];

  return (
    <section className="location-section">

      {/* Header */}
      <div className="location-header">
        <h2>Find Your Next Destination ✈️</h2>
        <p>Search and explore places with AI-powered suggestions</p>
      </div>

      {/* Search Box */}
      <div className="location-search-box">
        <input
          type="text"
          placeholder="Enter destination..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="search-btn">
          Search →
        </button>
      </div>

      {/* Suggestions */}
      <div className="location-suggestions">
        {suggestions.map((place, index) => (
          <span
            key={index}
            onClick={() => setQuery(place)}
          >
            {place}
          </span>
        ))}
      </div>

    </section>
  );
}

export default LocationSearch;