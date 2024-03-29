import React, { useState } from 'react';
import './Signedpage.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import TankMarkerDetails from './TankMarkerDetails'; // Import the TankMarkerDetails component
import PipeMarkerDetails from './PipeMarkerDetails'; // Import the PipeMarkerDetails component

export const Signedpage = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Separate arrays for tank and pipe markers
  const tankMarkers = [
    { id: 1, lat: 51.505, lng: -0.09, name: 'Tank 1' },
    { id: 2, lat: 51.51, lng: -0.1, name: 'Tank 2' },
    // Add more tank markers as needed
  ];

  const pipeMarkers = [
    { id: 3, lat: 51.515, lng: -0.09, name: 'Pipe 1' },
    { id: 4, lat: 51.52, lng: -0.1, name: 'Pipe 2' },
    // Add more pipe markers as needed
  ];

  // Separate arrays for tank marker details and pipe marker details
  const tankMarkerDetails = [
    { id: 1, name: 'Tank 1 Details', description: 'Tank 1 Description' },
    { id: 2, name: 'Tank 2 Details', description: 'Tank 2 Description' },
    // Add more tank marker details as needed
  ];

  const pipeMarkerDetails = [
    { id: 3, name: 'Pipe 1 Details', description: 'Pipe 1 Description' },
    { id: 4, name: 'Pipe 2 Details', description: 'Pipe 2 Description' },
    // Add more pipe marker details as needed
  ];

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const getMarkerDetailsComponent = (marker) => {
    // Determine the type of marker and return the corresponding JSX component
    if (marker.type === 'tank') {
      const tankDetail = tankMarkerDetails.find((detail) => detail.id === marker.id);
      return <TankMarkerDetails marker={tankDetail} />;
    } else if (marker.type === 'pipe') {
      const pipeDetail = pipeMarkerDetails.find((detail) => detail.id === marker.id);
      return <PipeMarkerDetails marker={pipeDetail} />;
    }
  };

  return (
    <div className="page">
      <div className="title-bar">
       
      </div>
      <div className={`container ${selectedMarker ? 'phone-width' : ''}`}>
        <div className={`left-partition ${selectedMarker ? 'full-screen' : ''}`}>
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ width: '100%', height: '100%' }}
          >
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
                  click: () =>
                    handleMarkerClick({ ...marker, type: 'tank' }),
                }}
              />
            ))}

            {/* Render pipe markers */}
            {pipeMarkers.map((marker) => (
              <Marker
                key={marker.id}
                position={[marker.lat, marker.lng]}
                eventHandlers={{
                  click: () =>
                    handleMarkerClick({ ...marker, type: 'pipe' }),
                }}
              />
            ))}
          </MapContainer>
        </div>
        {selectedMarker && (
          <div className="right-partition">
            {/* Render the appropriate JSX component for marker details */}
            {getMarkerDetailsComponent(selectedMarker)}
          </div>
        )}
      </div>
    </div>
  );
}

// export default Signedpage;
