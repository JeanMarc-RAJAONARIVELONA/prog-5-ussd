import { Menu } from "./menu";
import { promptWithTimeout } from "../utils/prompt-utils";

export class TransfertMenu extends Menu {
  show() {
    console.clear();
    const num = promptWithTimeout(
      "Entrer numéro de tel. Destinataire: ",
      2 * 60 * 1000
    );
    if (!num) return;
    const montantStr = promptWithTimeout("Entrer le montant: ", 2 * 60 * 1000);
    const montant = Number(montantStr);
    if (isNaN(montant) || montant <= 0) {
      console.log("Montant invalide.");
      this.context.waitEnter();
      return;
    }
    console.log("Prise en charge des frais de retrait du destinataire?");
    console.log("1 - Oui (frais de 100 Ar)");
    console.log("2 - Non");
    const frais = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
    let total = montant;
    if (frais === "1") total += 100;
    const desc = promptWithTimeout("Entrer la description: ", 2 * 60 * 1000);
    if (!this.context.askPin()) return;
    if (total > this.context.userSolde) {
      console.log("Solde insuffisant.");
      this.context.waitEnter();
      return;
    }
    this.context.setSolde(this.context.userSolde - total);
    console.log(
      `Vous allez envoyer ${montant} Ar au numéro ${num}. Description: ${desc}. Votre solde est de ${this.context.userSolde} Ar.`
    );
    this.context.waitEnter();
  }
}
