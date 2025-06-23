import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Routing from "./Routing";
// use posthog for feature flags https://posthog.com/

export default function Map() {
  return (
    <MapContainer
      center={[40.66955840313841, -73.732836986322]}
      zoom={13}
      scrollWheelZoom={true}
      touchZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      <Routing />
    </MapContainer>
  );
}
