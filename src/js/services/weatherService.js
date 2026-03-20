import { WEATHER_URL } from "@js/config";
import { store, getWeather } from "@js/store";
import { getData } from "@js/utils/getData";

export const weatherService = async () => {
  try {
    const res = await getData(WEATHER_URL);
    store.weather = getWeather(res);
  } catch (err) {
    console.error(err);
  }
};
