class AutocompleteUI {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.activeHolderClass = "active-autocomplete";
    this.activeItemClass = "active";
  }

  clear() {
    if (this.holder) {
      this.holder.innerHTML = "";
    }
  }

  open() {
    this.holder.classList.add(this.activeHolderClass);
  }

  close() {
    this.holder.classList.remove(this.activeHolderClass);
  }

  activeItem(index) {
    const items = this.holder.querySelectorAll(".result-item");

    if (!items.length) return;

    items.forEach((item) => {
      item.classList.remove(this.activeItemClass);
    });

    items[index].classList.add(this.activeItemClass);
  }

  render(cities) {
    if (!this.holder) return;

    this.clear();

    if (cities.length < 1) {
      this.close();
      return;
    }

    const fragment = document.createDocumentFragment();

    cities.forEach((cityName) => {
      const city = document.createElement("li");
      city.classList.add("result-item");
      city.textContent = cityName;
      fragment.appendChild(city);
    });

    this.holder.appendChild(fragment);

    this.open();
  }
}

export const autocompleteUI = new AutocompleteUI(".autocomplete-results");
