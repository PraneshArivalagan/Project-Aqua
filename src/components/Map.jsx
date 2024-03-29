import React, { useState } from 'react';
import './Map.css'; // Import your CSS file for styling
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Sample marker data
  const markers = [
    { id: 1, lat: 51.505, lng: -0.09, name: 'Marker 1' },
    { id: 2, lat: 51.51, lng: -0.1, name: 'Marker 2' },
    // Add more markers as needed
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  return (
    <div className="your-page">
      {/* Title Bar */}
      <div className="title-bar">
        <div className="title-bar-links">
          <span>Home</span>
          <span>ComplaintBox</span>
          <span>Timings</span>
        </div>
        <div className="profile">
          <img src="profile-image.jpg" alt="Profile" />
          <span>UserEmail</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="main-container">
        {/* Left Window (70% width) */}
        <div className="left-window">
          {/* Content for the left window */}
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Render markers */}
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={[marker.lat, marker.lng]}
                eventHandlers={{
                  click: () => handleMarkerClick(marker),
                }}
              >
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Right Window (30% width) */}
        <div className="right-window">
          {/* Display marker details in the right window */}
          {selectedMarker ? (
            <div>
              <h2>{selectedMarker.name}</h2>
              {/* Add more details about the selected marker here */}
            </div>
          ) : (
            <div>
              <p>Select a marker to view its details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map;
