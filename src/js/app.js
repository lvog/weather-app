import "../styles/style.scss";

import { searchModule } from "@js/modules/SearchModule";
import { autocompleteModule } from "@js/modules/AutocompleteModule";

document.addEventListener("DOMContentLoaded", () => {
  autocompleteModule.init();
  searchModule.init();
});
