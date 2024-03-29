import React, { useState } from 'react';
import './Map1.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const tankMarkers = [
  {
    id: 1,
    lat: 51.505,
    lng: -0.09,
    name: 'Tank 1',
    details: [
      'This is a tank used for water storage.',
      'Capacity: 10,000 gallons',
      'Location: Latitude 51.505, Longitude -0.09',
      'Last inspected: 2023-09-20',
    ],
  },
  {
    id: 2,
    lat: 51.51,
    lng: -0.1,
    name: 'Tank 2',
    details: [
      'This is another tank used for water storage.',
      'Capacity: 15,000 gallons',
      'Location: Latitude 51.51, Longitude -0.1',
      'Last inspected: 2023-09-22',
    ],
  },
];

const pipeMarkers = [
  {
    id: 'pipe_1', // Modified ID for pipe marker
    lat: 51.515,
    lng: -0.09,
    name: 'Pipe 1',
    details: [
      'This is a pipe for water distribution.',
      'Diameter: 12 inches',
      'Location: Latitude 51.515, Longitude -0.09',
      'Last maintenance: 2023-09-15',
    ],
  },
  {
    id: 'pipe_2', // Modified ID for pipe marker
    lat: 51.52,
    lng: -0.1,
    name: 'Pipe 2',
    details: [
      'This is another pipe for water distribution.',
      'Diameter: 8 inches',
      'Location: Latitude 51.52, Longitude -0.1',
      'Last maintenance: 2023-09-18',
    ],
  },
];

const Map1 = () => { // Renamed to Map1
  const [selectedMarker, setSelectedMarker] = useState(null);

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
          {/* Map */}
          <MapContainer center={[51.505, -0.09]} zoom={13} style={{ width: '100%', height: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Render tank markers */}
            {tankMarkers.map((marker) => (
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

            {/* Render pipe markers */}
            {pipeMarkers.map((marker) => (
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
          {selectedMarker ? (
            <div className="marker-details">
              <h2>{selectedMarker.name}</h2>
              <ul>
                {selectedMarker.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="default-details">
              <h2>Select a marker to view details</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Map1;
