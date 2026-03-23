import { API_WEATHER_URL, API_KEY } from "@js/config";
import { mapWeatherData } from "@js/store";
import { getData } from "@js/utils/getData";

export const weatherService = async (city) => {
  const url = `${API_WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  const res = await getData(url);
  return mapWeatherData(res);
};
