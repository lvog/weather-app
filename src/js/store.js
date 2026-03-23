import sun from "../images/sun.svg";
import moon from "../images/moon.svg";
import few_clouds_day from "../images/few-clouds-day.svg";
import few_clouds_night from "../images/few-clouds-night.svg";
import scattered_clouds from "../images/scattered-clouds.svg";
import broken_clouds from "../images/broken-clouds.svg";
import shower_rain from "../images/shower-rain.svg";
import rain_day from "../images/rain-day.svg";
import rain_night from "../images/rain-night.svg";
import thunderstorm from "../images/thunderstorm.svg";
import snow from "../images/snow.svg";
import mist from "../images/mist.svg";

export const store = {
  city: "Stryj",
  weather: {},
};

export const getWeather = (query) => {
  return {
    city: query.name,
    coord: {
      lon: query.coord.lon,
      lat: query.coord.lat,
    },
    timezone: query.timezone,
    sunrise: query.sys.sunrise,
    sunset: query.sys.sunset,
    icon: query.weather[0].icon,
    description: query.weather[0].description,
    temp: query.main.temp,
    temp_feels_like: query.main.feels_like,
    pressure: query.main.pressure,
    humidity: query.main.humidity,
    wind: query.wind.speed,
  };
};

export const weatherIcons = {
  "01d": sun,
  "01n": moon,
  "02d": few_clouds_day,
  "02n": few_clouds_night,
  "03d": scattered_clouds,
  "03n": scattered_clouds,
  "04d": broken_clouds,
  "04n": broken_clouds,
  "09d": shower_rain,
  "09n": shower_rain,
  "10d": rain_day,
  "10n": rain_night,
  "11d": thunderstorm,
  "11n": thunderstorm,
  "13d": snow,
  "13n": snow,
  "50d": mist,
  "50n": mist,
};
