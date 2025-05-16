import { Menu } from "./menu";
import { promptWithTimeout } from "../utils/prompt-utils";

export class RetraitMenu extends Menu {
  show() {
    console.clear();
    console.log("1 - Auprès d'un Agent Mvola");
    console.log("2 - Auprès d'un DAB SGM");
    const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
    if (choix === "1") {
      const numAgent = promptWithTimeout(
        "Entrer le numéro de l'agent: ",
        2 * 60 * 1000
      );
      const montantStr = promptWithTimeout(
        "Le montant de retrait: ",
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
      console.log(
        `Retrait de ${montant} Ar auprès de l'agent ${numAgent} validé. Solde restant: ${this.context.userSolde} Ar.`
      );
      this.context.waitEnter();
    } else if (choix === "2") {
      console.log("Retrait auprès d'un DAB SGM non disponible pour le moment.");
      this.context.waitEnter();
    }
  }
}
