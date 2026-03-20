export const store = {
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
    temp: query.main.temp,
    temp_feels_like: query.main.feels_like,
    pressure: query.main.pressure,
    humidity: query.main.humidity,
    wind: query.wind.speed,
  };
};
