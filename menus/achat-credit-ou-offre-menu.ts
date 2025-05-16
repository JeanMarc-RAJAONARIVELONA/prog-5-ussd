import { Menu } from "./menu";
import { promptWithTimeout } from "../utils/prompt-utils";
import { MainMenu } from "./main-menu";
import {
  menuMora,
  menuFirst,
  menuYelow,
  menuYasNet,
} from "../offers/offers-menus";

export class AchatCreditOuOffreMenu extends Menu {
  show() {
    while (true) {
      console.clear();
      console.log("1 - Credit pour mon numero");
      console.log("2 - Credit pour autre numero");
      console.log("3 - Offre pour mon numéro");
      console.log("4 - Offre pour autre numéro");
      console.log("* - Page précédente");
      console.log("** - Menu principal");
      const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
      switch (choix) {
        case "1":
          this.achatCredit(this.context.userNumber);
          break;
        case "2": {
          const num = promptWithTimeout(
            "Entrer le numéro du destinataire: ",
            2 * 60 * 1000
          );
          if (num) this.achatCredit(num);
          break;
        }
        case "3":
          this.achatOffre(this.context.userNumber);
          break;
        case "4": {
          const num2 = promptWithTimeout(
            "Entrer le numéro du destinataire: ",
            2 * 60 * 1000
          );
          if (num2) this.achatOffre(num2);
          break;
        }
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

  private achatCredit(numero: string) {
    const montantStr = promptWithTimeout(
      "Entrer le montant de crédit à acheter: ",
      2 * 60 * 1000
    );
    const montant = Number(montantStr);
    if (isNaN(montant) || montant <= 0) {
      console.log("Montant invalide.");
      this.context.waitEnter();
      return;
    }
    if (!this.context.askPin()) return;
    if (montant > this.context.userSolde) {
      console.log("Solde insuffisant.");
      this.context.waitEnter();
      return;
    }
    this.context.setSolde(this.context.userSolde - montant);
    if (numero === this.context.userNumber)
      this.context.setCredit(this.context.userCredit + montant);
    console.log(
      `Votre achat de crédit pour le numéro ${numero} est validé. Votre solde est de ${this.context.userSolde} Ar.`
    );
    this.context.waitEnter();
  }

  private achatOffre(numero: string) {
    while (true) {
      console.clear();
      console.log(
        `Votre offre tarifaire actuelle est ${this.context.userOffer}`
      );
      console.log("1 - MORA (VOIX-SMS-INTERNET)");
      console.log("2 - FIRST (VOIX-SMS-INTERNET)");
      console.log("3 - YELOW (SMS-INTERNET)");
      console.log("4 - YAS Net (INTERNET)");
      console.log("* - Page précédente");
      console.log("** - Menu principal");
      const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
      let offre = "";
      let prix = 0;
      switch (choix) {
        case "1":
          ({ offre, prix } = menuMora());
          break;
        case "2":
          ({ offre, prix } = menuFirst());
          break;
        case "3":
          ({ offre, prix } = menuYelow());
          break;
        case "4":
          ({ offre, prix } = menuYasNet());
          break;
        case "*":
          return;
        case "**":
          new MainMenu(this.context).show();
          return;
        default:
          console.log("Choix invalide.");
          this.context.waitEnter();
          continue;
      }
      if (offre && prix > 0) {
        if (!this.context.askPin()) return;
        if (prix > this.context.userSolde) {
          console.log("Solde insuffisant.");
          this.context.waitEnter();
          return;
        }
        this.context.setSolde(this.context.userSolde - prix);
        if (numero === this.context.userNumber) this.context.setOffer(offre);
        console.log(
          `Votre achat de l'offre ${offre} pour le numéro ${numero} est validé. Votre solde est de ${this.context.userSolde} Ar.`
        );
        this.context.waitEnter();
        return;
      }
    }
  }
}
