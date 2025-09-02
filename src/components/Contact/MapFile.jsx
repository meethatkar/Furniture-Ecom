import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css' // ✅ important for proper styling

const MapFile = () => {
  return (
    <div className="w-full">
      <MapContainer 
        center={[40.7128, -74.0060]} 
        zoom={12} 
        className="w-full h-[80vh] rounded-sm shadow-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[40.7128, -74.0060]}>
          <Popup>236 5th SE Avenue, New York, NY10000, United States</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapFile
