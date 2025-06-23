import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";
import { createControlComponent } from "@react-leaflet/core";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
});

export default function Routing() {
  const map = useMap();

  const routeControllerRef = useRef(null);

  useEffect((): any => {
    if (!map) return;

    const routingControl = (L as any).Routing.control({
      waypoints: [L.latLng(57.74, 11.94), L.latLng(57.6792, 11.949)],
      routeWhileDragging: true,
    }).addTo(map);

    routeControllerRef.current = routingControl;

    return () => {
      if (routeControllerRef.current) {
        try {
          map.removeControl(routeControllerRef.current);
        } catch (err) {
          console.warn("Warning",err);
        } finally {
          routeControllerRef.current = null;
        }
      }
    };
  }, [map]);

  return null;
}
