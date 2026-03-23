import { DEFAULT_CITY } from "@js/config";
import { weatherService } from "@js/services/weatherService";
import { weatherUI } from "@js/ui/WeatherUI";

class SearchModule {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.form = null;
    this.searchField = null;
    this.errorField = null;
    this.weatherBlock = null;
    this.defaultCity = DEFAULT_CITY;
  }

  init() {
    if (!this.holder) return;
    this.findElements();
    this.handleSubmit();
    this.handleChange();
    this.search(this.defaultCity);
  }

  findElements() {
    this.form = this.holder.querySelector(".weather-form");
    this.searchField = this.form.querySelector(".search");
    this.errorField = this.form.querySelector(".error-message");
  }

  handleSubmit() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      const city = this.searchField.value.trim();
      if (!city) return;

      this.search(city);
    });
  }

  handleChange() {
    this.searchField.addEventListener("input", (e) => {
      const field = e.target;
      const hasError = field.classList.contains("error");

      if (!hasError) return;

      field.classList.remove("error");
      this.errorField.textContent = "";
    });
  }

  validation(message) {
    this.searchField.classList.add("error");
    this.errorField.textContent = message;
  }

  async search(city) {
    try {
      const weather = await weatherService(city);
      weatherUI.render(weather);
      this.form.reset();
    } catch (error) {
      this.validation(error.message);
      weatherUI.clear();
    }
  }
}

export const searchModule = new SearchModule(".weather-section");
