import { DEFAULT_CITY } from "@js/config";
import { mapUI } from "@js/ui/MapUI";

class MapModule {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.coords = [DEFAULT_CITY.lat, DEFAULT_CITY.lon];
  }

  update(coords = DEFAULT_CITY) {
    if (!this.holder) return;

    this.coords = [coords.lat, coords.lon];
    mapUI.render(this.coords);
  }
}

export const mapModule = new MapModule("#map");
