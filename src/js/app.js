import "../styles/style.scss";

import { weatherService } from "@js/services/weatherService";
import { weatherUI } from "@js/ui/WeatherUI";

document.addEventListener("DOMContentLoaded", async () => {
  await weatherService();
  weatherUI.init();
});
