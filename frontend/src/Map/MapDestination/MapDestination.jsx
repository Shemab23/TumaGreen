import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import {useAppContext} from '../../context/useAppContext.js'

// --- Helpers ---
async function reverseGeocode(lat, lon) {
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    const res = await fetch(url);
    return res.json();
  } catch {
    return {};
  }
}

async function getRoute(p1, p2) {
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${p1.lng},${p1.lat};${p2.lng},${p2.lat}?overview=full&geometries=geojson`;
    const res = await fetch(url);
    const data = await res.json();
    if (data?.routes?.length > 0) {
      return {
        distance: Number((data.routes[0].distance / 1000).toFixed(2)),
        coords: data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]),
      };
    }
    return null;
  } catch {
    return null;
  }
}

// --- Sub Map Click Handler ---
function LocationMarker({ setPlaces, activeIndex }) {
  useMapEvents({
    click: async (e) => {
      if (activeIndex === null) return; // only if "Place" was clicked

      const { lat, lng } = e.latlng;
      const data = await reverseGeocode(lat, lng);

      const road =
        data.address?.road ||
        data.address?.residential ||
        data.address?.pedestrian ||
        data.address?.footway ||
        "Unknown road";

      const district =
        data.address?.city_district || data.address?.county || "Unknown district";
      const sector =
        data.address?.suburb || data.address?.village || "Unknown sector";
      const cell =
        data.address?.neighbourhood || data.address?.hamlet || "Unknown cell";

      setPlaces((prev) => {
        const newPlaces = [...prev];
        newPlaces[activeIndex] = { lat, lng, district, sector, cell,road };
        return newPlaces;
      });
    },
  });
  return null;
}

// --- Main Component ---
export default function MapComponent() {
  const {places, setPlaces} = useAppContext();
  const {route, setRoute} = useAppContext();
  const [activeIndex, setActiveIndex] = useState(null); // which "Place" is active



  // fetch route when both places selected
  useEffect(() => {
    if (places[0] && places[1]) {
      getRoute(places[0], places[1]).then((res) => setRoute(res));
    } else {
      setRoute(null);
    }
  }, [places,setRoute]);

  // reset one position
  const resetPosition = (idx) => {
    const newPlaces = [...places];
    newPlaces[idx] = null;
    setPlaces(newPlaces);
    setRoute(null);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Main Map (always visible) */}
      <div style={{ width: "100%", height: "40vh" }}>
        <MapContainer
          center={[-1.949, 30.0605]}
          zoom={14}
          style={{ height: "100%", width: "100%" }}
        >

            <TileLayer
    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    attribution="Tiles &copy; Esri"
  />
  {/* Labels overlay */}
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution="&copy; OpenStreetMap contributors"
    opacity={0.6} // slightly transparent so imagery shows through
  />



          {activeIndex !== null && (
            <LocationMarker setPlaces={setPlaces} activeIndex={activeIndex} />
          )}

          {places.map(
            (p, idx) =>
              p && (
                <Marker key={idx} position={[p.lat, p.lng]}>
                  <Popup>
                    Position {idx + 1}: {p.road},{p.district}, {p.sector}
                  </Popup>
                </Marker>
              )
          )}

          {route && <Polyline positions={route.coords} color="blue" />}
        </MapContainer>
      </div>

      {/* Input Section */}
      <div style={{ padding: "16px" }}>
        {places.map((p, idx) => (
          <div
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "12px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                flex: 1,
                border: "1px solid #ccc",
                padding: "8px",
                borderRadius: "4px",
                minWidth: "200px",
              }}
            >
              <label style={{ display: "block", fontWeight: "bold" }}>
                Position {idx + 1}
              </label>
              {p ? (
                <p>
                  {p.road},{p.district}, {p.sector}
                </p>
              ) : (
                <p style={{ color: "#666" }}>No location chosen</p>
              )}
            </div>

            <button
              onClick={() => setActiveIndex(idx)}
              style={{
                background: activeIndex === idx ? "darkblue" : "blue",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Place
            </button>

            <button
              onClick={() => resetPosition(idx)}
              style={{
                background: "orange",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Reset
            </button>

            <button
              onClick={() => setActiveIndex(null)}
              style={{
                background: "green",
                color: "white",
                padding: "8px 12px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Pick
            </button>
          </div>
        ))}

        {/* Route Info */}
        {route && (
          <div
            style={{
              marginTop: "16px",
              padding: "12px",
              background: "#4e4a4aff",
              borderRadius: "4px",
            }}
          >
            📍 Shortest route: <strong>{route.distance} km</strong>
          </div>
        )}
      </div>
    </div>
  );
}// route.distance|| {p.road}, {p.district}, {p.sector}
