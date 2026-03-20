import { store } from "@js/store";

class WeatherUI {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.template = null;
  }

  init() {
    if (!this.holder) return;
    this.findElements();
    this.createBlock();
  }

  findElements() {
    this.template = document.querySelector("#weather-template");
  }

  createBlock() {
    const template = this.template.content.cloneNode(true);
    const city = template.querySelector(".city");
    const temp = template.querySelector(".temp");
    const tempFeelLike = template.querySelector(".temp-feel-like");
    const pressure = template.querySelector(".pressure");
    const humidity = template.querySelector(".humidity");
    const wind = template.querySelector(".wind");

    city.textContent = store.weather.city;
    temp.textContent = store.weather.temp;
    tempFeelLike.textContent = store.weather.temp_feels_like;
    pressure.textContent = store.weather.pressure;
    humidity.textContent = store.weather.humidity;
    wind.textContent = store.weather.wind;

    this.holder.appendChild(template);
  }
}

export const weatherUI = new WeatherUI(".weather-block");
