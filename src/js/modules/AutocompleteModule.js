import { cities } from "@js/store";
import { autocompleteUI } from "@js/ui/AutocompleteUI";

class AutocompeteModule {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.activeIndex = 0;
  }

  init() {
    if (!this.holder) return;
    this.findElements();
    this.handleInput();
    this.handleClick();
    this.handlePressedKey();
  }

  findElements() {
    this.searchField = this.holder.querySelector(".search");
    this.resultsHolder = this.holder.querySelector(".autocomplete-results");
  }

  handleInput() {
    this.searchField.addEventListener("input", (e) => {
      const value = e.target.value;

      if (!value) {
        autocompleteUI.close();
        return;
      }

      const cityNames = this.search(value.toLowerCase());

      autocompleteUI.render(cityNames);
      this.activeIndex = 0;
      autocompleteUI.activeItem(this.activeIndex);
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
      this.activeIndex = 0;
    });
  }

  handlePressedKey() {
    this.searchField.addEventListener("keydown", (e) => {
      const activeHolder = this.resultsHolder.classList.contains(
        "active-autocomplete",
      );
      const key = e.key;
      const num =
        this.resultsHolder.querySelectorAll(".result-item").length - 1;

      if (!activeHolder) return;

      if (key === "ArrowDown") {
        num > this.activeIndex ? this.activeIndex++ : (this.activeIndex = num);
        autocompleteUI.activeItem(this.activeIndex);
      }

      if (key === "ArrowUp") {
        this.activeIndex === 0 ? (this.activeIndex = 0) : this.activeIndex--;
        autocompleteUI.activeItem(this.activeIndex);
      }

      if (key === "Enter") {
        e.preventDefault();

        const activeItem = this.resultsHolder.querySelector(
          ".result-item.active",
        );

        if (!activeItem) return;

        this.searchField.value = activeItem.textContent;
        this.activeIndex = 0;
        autocompleteUI.close();
      }

      if (key === "Escape") {
        e.preventDefault();
        autocompleteUI.close();
        this.activeIndex = 0;
      }
    });
  }

  search(value) {
    return cities.filter((city) => city.toLowerCase().includes(value));
  }
}

export const autocompeteModule = new AutocompeteModule(".weather-section");
