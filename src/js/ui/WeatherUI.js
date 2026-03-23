import { getTimeByTimezone } from "@js/utils/getTimeByTimezone";

class WeatherUI {
  constructor(selector) {
    this.holder = document.querySelector(selector);
    this.template = document.querySelector("#weather-template");
  }

  clear() {
    if (this.holder) {
      this.holder.innerHTML = "";
    }
  }

  render(weather) {
    if (!this.holder || !this.template) return;

    this.clear();

    const template = this.template.content.cloneNode(true);
    console.log(weather);

    template.querySelector(".city").textContent = weather.city;
    template.querySelector(".day").textContent = weather.time.day;
    template.querySelector(".date").textContent = weather.time.date;
    template.querySelector(".month").textContent = weather.time.month;
    template.querySelector(".hours").textContent = weather.time.hours;
    template.querySelector(".minutes").textContent = weather.time.minutes;
    template.querySelector(".temp").textContent = Math.trunc(weather.temp);
    template.querySelector(".temp-feel-like").textContent = Math.trunc(
      weather.tempFeelsLike,
    );
    template.querySelector(".description").textContent = weather.description;
    template.querySelector(".pressure").textContent = weather.pressure;
    template.querySelector(".humidity").textContent = weather.humidity;
    template.querySelector(".wind").textContent = weather.wind;

    const weatherIcon = document.createElement("img");
    weatherIcon.src = weather.iconUrl;
    weatherIcon.alt = weather.description;
    const iconHolder = template.querySelector(".weather-icon");
    iconHolder.appendChild(weatherIcon);

    this.holder.appendChild(template);
  }
}

export const weatherUI = new WeatherUI(".weather-block");
