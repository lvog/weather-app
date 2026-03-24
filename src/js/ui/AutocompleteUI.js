class AutocompleteUI {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.activeClass = "active";
  }

  clear() {
    if (this.holder) {
      this.holder.innerHTML = "";
    }
  }

  open() {
    this.holder.classList.add(this.activeClass);
  }

  close() {
    this.holder.classList.remove(this.activeClass);
  }

  render(cities) {
    if (!this.holder) return;

    this.clear();

    if (cities.length < 1) {
      this.close();
      return;
    }

    cities.forEach((cityName) => {
      const city = document.createElement("li");
      city.classList.add("result-item");
      city.textContent = cityName;
      this.holder.appendChild(city);
    });

    this.open();
  }
}

export const autocompleteUI = new AutocompleteUI(".autocomplete-results");
