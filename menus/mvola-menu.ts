import { Menu } from "./menu";
import { promptWithTimeout } from "../utils/prompt-utils";

import { MainMenu } from "./main-menu";
import { AchatCreditOuOffreMenu } from "./achat-credit-ou-offre-menu";
import { TransfertMenu } from "./transfert-menu";
import { RetraitMenu } from "./retrait-menu";

export class MvolaMenu extends Menu {
  show() {
    while (true) {
      console.clear();
      console.log("==== Mvola ====");
      console.log("1 - Acheter Credit ou offre Yas");
      console.log("2 - Transferer argent");
      console.log("3 - Retrait d'argent");
      console.log("4 - Mon compte");
      console.log("* - Page précédente");
      console.log("** - Menu principal");
      const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
      switch (choix) {
        case "1":
          new AchatCreditOuOffreMenu(this.context).show();
          break;
        case "2":
          new TransfertMenu(this.context).show();
          break;
        case "3":
          new RetraitMenu(this.context).show();
          break;
        case "4":
          if (this.context.askPin()) {
            console.log(`Votre solde est de ${this.context.userSolde} Ar`);
            this.context.waitEnter();
          }
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
