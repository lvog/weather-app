import L from "leaflet";
import "leaflet/dist/leaflet.css";

class MapUI {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.map = null;
    this.marker = null;
    this.mapID = "map";
    this.tile = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
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
      ? (this.marker = L.marker(coords).addTo(this.map))
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
