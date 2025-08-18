import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { FadeInUp } from '../components/motion/animations';
import 'leaflet/dist/leaflet.css';

export default function MapInParent() {
  const fallbackCenter = [-1.949, 30.0605];
  const [userLocation, setUserLocation] = useState(null);

  const CustomIcon = new Icon({
    iconUrl: '/icon.png', // make sure this exists in /public
    iconSize: [38, 38],
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setUserLocation([pos.coords.latitude, pos.coords.longitude]),
        (err) => {
          console.error('Geolocation error:', err);
          setUserLocation(null);
        }
      );
    }
  }, []);

  return (
    <FadeInUp>
      <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-md">
        <MapContainer
          center={userLocation || fallbackCenter}
          zoom={14}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {userLocation && (
            <Marker position={userLocation} icon={CustomIcon}>
              <Popup className="text-green-800 font-semibold">My Location</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </FadeInUp>
  );
}
