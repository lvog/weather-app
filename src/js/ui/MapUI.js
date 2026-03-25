import L from "leaflet";
import "leaflet/dist/leaflet.css";

import pinIcon from "../../images/pin.png";

class MapUI {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.map = null;
    this.marker = null;
    this.pin = L.icon({
      iconUrl: pinIcon,
      iconSize: [23, 32],
      iconAnchor: [11.5, 32],
    });
    this.mapID = "map";
    this.tile =
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
    this.maxZoom = 19;
    this.copy =
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
  }

  init(coords) {
    if (!this.holder || this.map) return;

    this.map = L.map(this.mapID).setView(coords, 10);

    L.tileLayer(this.tile, {
      maxZoom: this.maxZoom,
      attribution: this.copy,
    }).addTo(this.map);

    this.setMarker(coords);
  }

  updateView(coords) {
    if (!this.map) return;

    this.map.setView(coords, 10);
  }

  setMarker(coords) {
    if (!this.map) return;

    !this.marker
      ? (this.marker = L.marker(coords, { icon: this.pin }).addTo(this.map))
      : this.marker.setLatLng(coords);
  }

  render(coords) {
    if (!this.map) {
      this.init(coords);
      return;
    }

    this.updateView(coords);
    this.setMarker(coords);
  }
}

export const mapUI = new MapUI("#map");
