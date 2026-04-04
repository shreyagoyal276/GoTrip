// function TravelDashboard() {

//   return (

//     <section className="travel-dashboard">

//       <h2>Your Travel Dashboard</h2>

//       <div className="dashboard-grid">

//         <div className="dashboard-card">
//           <h3>Travel Timeline</h3>
//           <p>Day 1: Arrival & City Tour</p>
//           <p>Day 2: Historical Sites</p>
//           <p>Day 3: Local Markets</p>
//         </div>

//         <div className="dashboard-card">
//           <h3>Packing Reminder</h3>
//           <ul>
//             <li>Passport / ID</li>
//             <li>Phone Charger</li>
//             <li>Comfortable Shoes</li>
//             <li>Camera</li>
//           </ul>
//         </div>

//         <div className="dashboard-card">
//           <h3>Tourist Images</h3>
//           <p>Photos shared by previous visitors.</p>
//         </div>

//         <div className="dashboard-card">
//           <h3>Nearby Hidden Spots</h3>
//           <p>Explore lesser known places around your destination.</p>
//         </div>

//         <div className="dashboard-card">
//           <h3>Local Guide Info</h3>
//           <p>Connect with verified local guides.</p>
//         </div>

//       </div>

//     </section>

//   )

// }

// export default TravelDashboard

import { FaSuitcaseRolling, FaMapMarkedAlt, FaCamera, FaCompass, FaUserTie } from "react-icons/fa";

function TravelDashboard() {
  return (
    <section className="dashboard-section">

      {/* Header */}
      <div className="dashboard-header">
        <h2>Your Travel Dashboard</h2>
        <p>Plan smarter, explore better with GoTrip</p>
      </div>

      {/* Grid */}
      <div className="dashboard-grid">

        {/* Timeline */}
        <div className="dashboard-card glass">
          <h3><FaMapMarkedAlt /> Travel Timeline</h3>
          <div className="timeline">
            <span>Day 1 → Arrival & City Tour</span>
            <span>Day 2 → Historical Sites</span>
            <span>Day 3 → Local Markets</span>
          </div>
        </div>

        {/* Packing */}
        <div className="dashboard-card glass">
          <h3><FaSuitcaseRolling /> Packing Reminder</h3>
          <ul className="checklist">
            <li>Passport / ID</li>
            <li>Phone Charger</li>
            <li>Comfortable Shoes</li>
            <li>Camera</li>
          </ul>
        </div>

        {/* Images */}
        <div className="dashboard-card glass">
          <h3><FaCamera /> Travel Memories</h3>

          <div className="image-grid">

            {/* Taj Mahal */}
            <img
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523"
              alt="Taj Mahal"
            />

            {/* Goa Beach */}
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Beach"
            />

            {/* Himalayas */}
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
              alt="Mountains"
            />

            {/* Jaipur / Rajasthan */}
            <img
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41"
              alt="Jaipur"
            />

            {/* Kerala Backwaters */}
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Kerala Backwaters"
            />

            {/* Tirupati) */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCUlIj3XxyWGZhC7rH8j3NjMKcLuCIqBH5A&s"
              alt="Tirupati"
            />

          </div>
        </div>

        {/* Hidden Gems */}
        <div className="dashboard-card highlight">
          <h3><FaCompass /> Hidden Gems</h3>
          <p>Discover secret places loved by locals ✨</p>
          <button>Explore Now →</button>
        </div>

        {/* Guides */}
        <div className="dashboard-card glass">
          <h3><FaUserTie /> Local Guides</h3>
          <p>Connect with trusted local experts for a richer experience.</p>
          <button className="secondary-btn">Find Guides</button>
        </div>

      </div>

    </section>
  );
}

export default TravelDashboard;