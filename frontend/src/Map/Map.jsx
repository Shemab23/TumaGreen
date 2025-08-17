import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useState, useEffect } from 'react';

export default function MapInParent() {
  const fallbackCenter = [-1.9490, 30.0605]; // Kigali fallback
  const [userLocation, setUserLocation] = useState(null);

  const CustomIcon = new Icon({
    iconUrl: "/icon.png",
    iconSize: [38, 38],
  });

  // Get user location once
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          console.error("Geolocation error:", error);
          setUserLocation(null);
        }
      );
    }
  }, []);

  return (
    <MapContainer
      center={userLocation || fallbackCenter} // center on user if available
      zoom={14}
      style={{ height: "100%", width: "100%" }} // fill parent
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Only show user marker if available */}
      {userLocation && (
        <Marker position={userLocation} icon={CustomIcon}>
          <Popup>My location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}
