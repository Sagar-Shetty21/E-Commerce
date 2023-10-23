import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withGoogleMap(({ onMapClick, markers }) => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 0, lng: 0 }} // Initial center, replace with your default location
    onClick={onMapClick}
  >
    {markers.map((marker, index) => (
      <Marker
        key={index}
        position={{ lat: marker.lat, lng: marker.lng }}
      />
    ))}
  </GoogleMap>
));

export default MapComponent;
