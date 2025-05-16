import { Menu } from "./menu";
import { promptWithTimeout } from "../utils/prompt-utils";
import { MainMenu } from "./main-menu";

export class ServiceYasMenu extends Menu {
  show() {
    while (true) {
      console.clear();
      console.log("==== Service YAS ====");
      console.log("1 - Info crédit");
      console.log("2 - Mon numéro");
      console.log("* - Page précédente");
      console.log("** - Menu principal");
      const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
      switch (choix) {
        case "1":
          console.log(
            `Votre crédit actuel est de ${this.context.userCredit} Ar.`
          );
          this.context.waitEnter();
          break;
        case "2":
          console.log(`Votre numéro est ${this.context.userNumber}`);
          this.context.waitEnter();
          break;
        case "*":
          return;
        case "**":
          new MainMenu(this.context).show();
          return;
        default:
          console.log("Choix invalide.");
          this.context.waitEnter();
      }
    }
  }
}
