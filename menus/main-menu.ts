import { Menu } from "./menu";
import { promptWithTimeout } from "../utils/prompt-utils";
import { MvolaMenu } from "./mvola-menu";
import { ServiceYasMenu } from "./service-yas-menu";

export class MainMenu extends Menu {
  show() {
    while (true) {
      console.clear();
      console.log("==== YAS et Moi ====");
      console.log("1 - Mvola");
      console.log("2 - Service YAS");
      console.log("* - Page précédente");
      console.log("** - Menu principal");
      const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
      switch (choix) {
        case "1":
          new MvolaMenu(this.context).show();
          break;
        case "2":
          new ServiceYasMenu(this.context).show();
          break;
        case "*":
        case "**":
          continue;
        default:
          console.log("Choix invalide.");
          this.context.waitEnter();
      }
    }
  }
}
