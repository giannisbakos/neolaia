import React from "react";
import L from 'leaflet';

import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function Map() {
    
  return (
    
      <MapContainer center={[40.021131, 20.187638]} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        {/* Labels Layer: World Boundaries and Places */}
        <TileLayer
          attribution='&copy; '
          url="https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[40.021131, 20.187638]}>
          <Popup>
            Ndrico2010
          </Popup>
        </Marker>
      </MapContainer>
   
  );
}
