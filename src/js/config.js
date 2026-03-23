import { store } from "@js/store";

const API_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "29f2b88194bb25d999023ceedf3047a9";
export const WEATHER_URL = `${API_WEATHER_URL}?q=${store.city}&appid=${API_KEY}&units=metric`;

// const API_FORECAST_URL = "http://api.openweathermap.org/data/2.5/forecast";
