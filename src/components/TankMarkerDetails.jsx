import React from 'react';

function TankMarkerDetails({ marker }) {
  return (
    <div className="marker-details">
      <h2>{marker.name}</h2>
      <p className="marker-description">{marker.description}</p>
      {/* You can add more details specific to tank markers here */}
    </div>
  );
}

export default TankMarkerDetails;
