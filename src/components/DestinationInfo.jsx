function DestinationInfo() {
  return (
    <section className="destination-section">

      {/* Header */}
      <div className="destination-header">
        <h2>Featured Location ✨ </h2>
        <p>Smart insights to help you plan the perfect trip</p>
      </div>

      <div className="destination-container">

        {/* LEFT: MAIN INFO */}
        <div className="destination-main glass">

          <img
            src="https://images.unsplash.com/photo-1548013146-72479768bada"
            alt="Taj Mahal"
          />

          <div className="destination-content">
            <h3>Taj Mahal, Agra</h3>

            <p>
              One of the Seven Wonders of the World, the Taj Mahal is a timeless
              symbol of love. Built by Mughal emperor Shah Jahan, it attracts
              millions of travelers every year with its stunning architecture
              and serene beauty.
            </p>

            <div className="travel-info">
              <span>🕒 3 hrs from Delhi</span>
              <span>🌤 28°C Sunny</span>
              <span>👥 Moderate Crowd</span>
            </div>

            <button className="primary-btn">
              Start Planning →
            </button>
          </div>
        </div>

        {/* RIGHT TOP: MAP */}
        <div className="destination-map glass">
          <h4>📍 Location Preview</h4>

          <div className="map-box">
            <iframe
              src="https://maps.google.com/maps?q=Taj%20Mahal&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              title="Taj Mahal Map"
            ></iframe>
          </div>
        </div>

        {/* RIGHT BOTTOM: GALLERY */}
        <div className="destination-gallery glass">
          <h4>📸 Gallery</h4>

          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523"
              alt="Taj Mahal view 1"
            />
            <img
              src="https://images.unsplash.com/photo-1587135941948-670b381f08ce"
              alt="Taj Mahal view 2"
            />
            <img
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41"
              alt="Taj Mahal view 3"
            />
          </div>
        </div>

      </div>

    </section>
  );
}

export default DestinationInfo;