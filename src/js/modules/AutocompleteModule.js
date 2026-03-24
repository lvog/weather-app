import { cities } from "@js/store";
import { autocompleteUI } from "@js/ui/AutocompleteUI";

class AutocompeteModule {
  constructor(selector) {
    this.holder = document.querySelector(selector);
  }

  init() {
    if (!this.holder) return;
    this.findElements();
    this.handleInput();
    this.handleClick();
  }

  findElements() {
    this.searchField = this.holder.querySelector(".search");
    this.resultsHolder = this.holder.querySelector(".autocomplete-results");
  }

  handleInput() {
    this.searchField.addEventListener("input", (e) => {
      const value = e.target.value;

      if (!value) return;

      const cityNames = this.search(value.toLowerCase());

      autocompleteUI.render(cityNames);
    });
  }

  handleClick() {
    this.holder.addEventListener("click", (e) => {
      const item = e.target.closest(".result-item");
      const resultsHolder = e.target.closest(".autocomplete-results");

      if (!item || !resultsHolder) {
        autocompleteUI.close();
        return;
      }

      this.searchField.value = item.textContent;
      autocompleteUI.close();
    });
  }

  search(value) {
    return cities.filter((city) => city.toLowerCase().includes(value));
  }
}

export const autocompeteModule = new AutocompeteModule(".weather-section");
