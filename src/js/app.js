import "../styles/style.scss";

import { searchModule } from "@js/modules/SearchModule";
import { autocompeteModule } from "@js/modules/AutocompleteModule";
import { mapUI } from "@js/ui/MapUI";

document.addEventListener("DOMContentLoaded", () => {
  mapUI();
  autocompeteModule.init();
  searchModule.init();
});
