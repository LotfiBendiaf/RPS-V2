"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icons broken by webpack
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const POSITION: [number, number] = [49.2583, 4.0317]; // 03 rue Général Micheler, Reims

export default function LeafletMap() {
  useEffect(() => {
    // Ensure leaflet CSS is applied after hydration
  }, []);

  return (
    <MapContainer
      center={POSITION}
      zoom={16}
      style={{ height: "100%", width: "100%", minHeight: "400px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={POSITION} icon={icon}>
        <Popup>
          <strong>RPS – Renovation Peinture Service</strong><br />
          03 rue Général Micheler<br />
          51100 Reims, France
        </Popup>
      </Marker>
    </MapContainer>
  );
}
