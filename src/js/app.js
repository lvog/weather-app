import "../styles/style.scss";

import { searchModule } from "@js/modules/SearchModule";
import { autocompeteModule } from "@js/modules/AutocompleteModule";

document.addEventListener("DOMContentLoaded", () => {
  autocompeteModule.init();
  searchModule.init();
});
