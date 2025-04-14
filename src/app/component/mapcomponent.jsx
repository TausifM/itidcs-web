"use client"
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix for missing icon issues in React Leaflet
import "leaflet/dist/leaflet.css";
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const center = [51.505, -0.09];

const MapComponent = ({ selectedLocation, onSelect }) => {
  useEffect(() => {
    // You could center map or highlight marker on selection
  }, [selectedLocation]);

  const sampleMarkers = [
    { position: [51.505, -0.09], label: "$120" },
    { position: [51.515, -0.1], label: "$80" },
    { position: [51.495, -0.08], label: "$150" },
  ];

  return (
    <MapContainer center={center} zoom={10} scrollWheelZoom={false} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {sampleMarkers.map((marker, idx) => (
        <Marker key={idx} position={marker.position}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
