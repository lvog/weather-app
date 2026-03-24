import L from "leaflet";
import "leaflet/dist/leaflet.css";

const map = L.map("map").setView([49.2622, 23.8561], 10); // Stryj

export const mapUI = () => {
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker([49.2622, 23.8561]).addTo(map);
};
