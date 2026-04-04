import { useEffect, useState } from "react";

function DestinationInfo() {

  const destinations = [
    {
      name: "Taj Mahal, Agra",
      desc: "One of the Seven Wonders of the World, built by Shah Jahan. A symbol of love and architectural beauty.",
      img: "https://images.unsplash.com/photo-1548013146-72479768bada",
      gallery: [
        "https://images.unsplash.com/photo-1564507592333-c60657eea523",
        "https://images.unsplash.com/photo-1587135941948-670b381f08ce",
        "https://images.unsplash.com/photo-1599661046289-e31897846e41"
      ],
      map: "https://maps.google.com/maps?q=Taj%20Mahal&t=&z=13&ie=UTF8&iwloc=&output=embed",
      info: ["🕒 3 hrs from Delhi", "🌤 28°C Sunny", "👥 Moderate Crowd"]
    },

    {
      name: "Tirupati Tirumala Temple",
      desc: "One of the richest and most visited temples in the world, dedicated to Lord Venkateswara.",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Tirumala_090615.jpg/1280px-Tirumala_090615.jpg",
      gallery: [
        "https://cdn-ilejdpd.nitrocdn.com/buEnUrMONSWZvEULrnjpcseiWXBrFWCC/assets/images/optimized/rev-5432299/www.trypdeals.com/wp-content/uploads/2025/10/Gemini_Generated_Image_p9lstep9lstep9ls.png",
        "https://indiathrills.com/wp-content/uploads/2025/06/Tirupati-Balaji-Temple-history-location-timings-how-to-reach.webp",
        "https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/09/Tirumala-Tirupati-Balaji-Temple-Timings.jpg"
      ],
      map: "https://maps.google.com/maps?q=Tirupati%20Temple&t=&z=13&ie=UTF8&iwloc=&output=embed",
      info: ["🕒 1 hr from Tirupati", "🌤 30°C Warm", "👥 Heavy Crowd"]
    },

    {
      name: "Mata Vaishno Devi, Katra",
      desc: "A sacred pilgrimage site in the Trikuta Mountains where devotees trek to seek blessings of Mata Vaishno Devi.",
      img: "https://www.maavaishnodevi.org/sites/default/files/2023-11/intro.png",
      gallery: [
        "https://www.kashmiribhatta.in/upload/AU%2023052020%20%20mata-vaishno-devi-darbar-photos.webp",
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Entrance_welcome_gate_of_Shri_Mata_Vaishno_Devi_Katra.png",
        "https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/12/History-of-Mata-Vaishno-Devi-Temple.jpg"
      ],
      map: "https://maps.google.com/maps?q=Vaishno%20Devi&t=&z=13&ie=UTF8&iwloc=&output=embed",
      info: ["🕒 Trek ~6 hrs", "🌤 22°C Cool", "👥 High Pilgrimage Crowd"]
    }
  ];

  const [index, setIndex] = useState(0);

  // Auto change every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % destinations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const place = destinations[index];

  return (
    <section className="destination-section">

      <div className="destination-header">
        <h2>Featured Location ✨</h2>
        <p>Smart insights to help you plan the perfect trip</p>
      </div>

      <div className="destination-container">

        {/* MAIN */}
        <div className="destination-main glass">
          <img src={place.img} alt={place.name} />

          <div className="destination-content">
            <h3>{place.name}</h3>
            <p>{place.desc}</p>

            <div className="travel-info">
              {place.info.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <button className="primary-btn">
              Start Planning →
            </button>
          </div>
        </div>

        {/* MAP */}
        <div className="destination-map glass">
          <h4>📍 Location Preview</h4>
          <div className="map-box">
            <iframe src={place.map} loading="lazy" title="Map"></iframe>
          </div>
        </div>

        {/* GALLERY */}
        <div className="destination-gallery glass">
          <h4>📸 Gallery</h4>
          <div className="gallery-grid">
            {place.gallery.map((img, i) => (
              <img key={i} src={img} alt="view" />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

export default DestinationInfo;