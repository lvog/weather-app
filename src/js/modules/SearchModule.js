import { DEFAULT_CITY } from "@js/config";
import { weatherService } from "@js/services/weatherService";
import { weatherUI } from "@js/ui/WeatherUI";
import { mapModule } from "./MapModule";
import { layoutUI } from "@js/ui/LayoutUI";

class SearchModule {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.form = null;
    this.searchField = null;
    this.weatherBlock = null;
    this.defaultCity = DEFAULT_CITY.name;
  }

  init() {
    if (!this.holder) return;
    this.findElements();
    this.search(this.defaultCity);
    this.handleSubmit();
  }

  findElements() {
    this.form = this.holder.querySelector(".weather-form");
    this.searchField = this.form.querySelector(".search");
  }

  handleSubmit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const city = this.searchField.value.trim();
      if (!city) return;

      this.search(city);
    });
  }

  async search(city) {
    try {
      layoutUI.showLoading();

      const weather = await weatherService(city);

      weatherUI.render(weather);
      mapModule.update(weather);

      layoutUI.showContent();

      this.form.reset();
      layoutUI.clearError();
    } catch (error) {
      layoutUI.showError(error.message);
      weatherUI.clear();
    }
  }
}

export const searchModule = new SearchModule(".weather-section");
