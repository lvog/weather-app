import { weatherIcons } from "@js/data/weatherIcons";
import noImage from "../../images/no-image.svg";

import { getCityTime } from "@js/utils/getCityTime";

export const mapWeatherData = (weatherData) => {
  const { name, coord, timezone, main, wind, weather } = weatherData;

  const currentWeather = weather?.[0];

  return {
    city: name,
    lat: coord.lat,
    lon: coord.lon,
    time: getCityTime(timezone),
    iconUrl: weatherIcons[currentWeather?.icon] || noImage,
    description: currentWeather?.description || "No description",
    temp: main.temp,
    tempFeelsLike: main.feels_like,
    pressure: main.pressure,
    humidity: main.humidity,
    wind: wind.speed,
  };
};
