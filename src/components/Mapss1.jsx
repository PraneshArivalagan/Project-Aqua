import React, { useState } from 'react';
import './Mapss1.css'; // Import your CSS file for styling
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import TankIcon from './tank.png';
import PipeIcon from './pipe.png';
import { useNavigate } from 'react-router-dom';

const Mapss1 = () => {
  const navigate= useNavigate();
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapInLeftWindow, setMapInLeftWindow] = useState(true);
  const handleLogin = () => {
    navigate('/Signedpage');
  };

  const handleTiming = () => {
    navigate('/Timings');
  };
  const tankMarkers = [
    {
      id: 1,
      lat: 51.505,
      lng: -0.09,
      name: 'Tank 1',
      icon: TankIcon,
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
      icon: TankIcon,
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
      id: 'pipe1',
      lat: 51.515,
      lng: -0.09,
      name: 'Pipe 1',
      icon: PipeIcon,
      details: [
        'This is a pipe for water distribution.',
        'Diameter: 12 inches',
        'Location: Latitude 51.515, Longitude -0.09',
        'Last maintenance: 2023-09-15',
      ],
    },
    {
      id: 'pipe2',
      lat: 51.52,
      lng: -0.1,
      name: 'Pipe 2',
      icon: PipeIcon,
      details: [
        'This is another pipe for water distribution.',
        'Diameter: 8 inches',
        'Location: Latitude 51.52, Longitude -0.1',
        'Last maintenance: 2023-09-18',
      ],
    },
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setMapInLeftWindow(true);
  };

  const toggleMapLocation = () => {
    setMapInLeftWindow(!mapInLeftWindow);
  };

  return (
    <div className="your-page">
      <div className="title-bar">
        <div className="title-bar-links">
          <span>Home</span>
          <span onClick={handleLogin}>ComplaintBox</span>
          <span onClick={handleTiming}>Timings</span>
        </div>
        <div className="profile">
          <img src="profile-image.jpg" alt="Profile" />
          <span>UserEmail</span>
        </div>
      </div>

      <div className="main-container">
        <div
          className={`left-window ${mapInLeftWindow ? 'map-in-left' : 'map-in-right'}`}
          onClick={toggleMapLocation}
        >
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ width: '100%', height: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {tankMarkers.map((marker) => (
              <Marker
                key={marker.id}
                position={[marker.lat, marker.lng]}
                eventHandlers={{
                  click: () => handleMarkerClick(marker),
                }}
                icon={
                  new L.Icon({
                    iconUrl: marker.icon,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                  })
                }
              >
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
            {pipeMarkers.map((marker) => (
              <Marker
                key={marker.id}
                position={[marker.lat, marker.lng]}
                eventHandlers={{
                  click: () => handleMarkerClick(marker),
                }}
                icon={
                  new L.Icon({
                    iconUrl: marker.icon,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                  })
                }
              >
                <Popup>{marker.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div
          className={`right-window ${mapInLeftWindow ? 'details-in-right' : 'details-in-left'}`}
        >
          {selectedMarker && (
            <div className="marker-details">
              <h2>{selectedMarker.name}</h2>
              <ul>
                {selectedMarker.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Mapss1;
