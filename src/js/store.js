import sun from "../images/sun.svg";
import moon from "../images/moon.svg";
import fewCloudsDay from "../images/few-clouds-day.svg";
import fewCloudsNight from "../images/few-clouds-night.svg";
import scatteredClouds from "../images/scattered-clouds.svg";
import brokenClouds from "../images/broken-clouds.svg";
import showerRain from "../images/shower-rain.svg";
import rainDay from "../images/rain-day.svg";
import rainNight from "../images/rain-night.svg";
import thunderstorm from "../images/thunderstorm.svg";
import snow from "../images/snow.svg";
import mist from "../images/mist.svg";

import { getTimeByTimezone } from "./utils/getTimeByTimezone";

const weatherIcons = {
  "01d": sun,
  "01n": moon,
  "02d": fewCloudsDay,
  "02n": fewCloudsNight,
  "03d": scatteredClouds,
  "03n": scatteredClouds,
  "04d": brokenClouds,
  "04n": brokenClouds,
  "09d": showerRain,
  "09n": showerRain,
  "10d": rainDay,
  "10n": rainNight,
  "11d": thunderstorm,
  "11n": thunderstorm,
  "13d": snow,
  "13n": snow,
  "50d": mist,
  "50n": mist,
};

export const mapWeatherData = (query) => {
  return {
    city: query.name,
    time: getTimeByTimezone(query.timezone),
    iconUrl: weatherIcons[query.weather[0].icon],
    description: query.weather[0].description,
    temp: query.main.temp,
    tempFeelsLike: query.main.feels_like,
    pressure: query.main.pressure,
    humidity: query.main.humidity,
    wind: query.wind.speed,
  };
};
