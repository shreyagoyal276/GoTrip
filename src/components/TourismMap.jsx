// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
// import "leaflet/dist/leaflet.css"

// function TourismMap() {

//   const locations = [
//     { name: "Taj Mahal", lat: 27.1751, lng: 78.0421 },
//     { name: "Jaipur City Palace", lat: 26.9255, lng: 75.8236 },
//     { name: "Kerala Backwaters", lat: 9.4981, lng: 76.3388 }
//   ]

//   return (

//     <section className="tourism-map">

//       <h2>Tourism Map</h2>

//       <MapContainer
//         center={[22.5937, 78.9629]}
//         zoom={5}
//         style={{ height: "400px", width: "100%" }}
//       >

//         <TileLayer
//           attribution='&copy; OpenStreetMap contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {locations.map((loc, index) => (
//           <Marker key={index} position={[loc.lat, loc.lng]}>
//             <Popup>{loc.name}</Popup>
//           </Marker>
//         ))}

//       </MapContainer>

//     </section>

//   )
// }

// export default TourismMap

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

/* Fix marker issue */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

function TourismMap() {
  const locations = [
    { name: "Taj Mahal", lat: 27.1751, lng: 78.0421 },
    { name: "Jaipur City Palace", lat: 26.9255, lng: 75.8236 },
    { name: "Kerala Backwaters", lat: 9.4981, lng: 76.3388 },
    { name: "Vishakapattanam", lat: 17.7209, lng: 83.3006 },
    { name: "Gwalior", lat: 26.1420, lng: 78.1234 },
    { name: "Rishikesh", lat: 30.0869, lng: 78.2676 },
    { name: "Udaipur", lat: 24.5854, lng: 73.7125 },
    { name: "Goa", lat: 15.2993, lng: 74.1240 },
    { name: "Amritsar", lat: 31.6340, lng: 74.8723 },
    { name: "Mysore", lat: 12.2958, lng: 76.6394 },
    
  ];

  return (
    <section className="tourism-map-section">

      <div className="tourism-map-header">
        <h2>Explore Destinations</h2>
        <p>Discover amazing places with your friends</p>
      </div>

      <div className="tourism-map-card">
        <MapContainer
          center={[22.5937, 78.9629]}
          zoom={5}
          scrollWheelZoom={false}
          className="tourism-leaflet-map"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {locations.map((loc, index) => (
            <Marker key={index} position={[loc.lat, loc.lng]}>
              <Popup>
                <div className="tourism-popup">
                  <h4>{loc.name}</h4>
                  <p>Popular destination</p>
                  <button>Explore →</button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

    </section>
  );
}

export default TourismMap;