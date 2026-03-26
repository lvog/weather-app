import { API_WEATHER_URL, API_KEY } from "@js/config";
import { mapWeatherData } from "@js/mappers/mapWeatherData";
import { getData } from "@js/utils/getData";

export const weatherService = async (city) => {
  const url = `${API_WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  const data = await getData(url);
  return mapWeatherData(data);
};
