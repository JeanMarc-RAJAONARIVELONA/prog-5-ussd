import { promptWithTimeout } from "./prompt-utils";

const userPin = "1234";

export const askPin = (): boolean => {
  let essais = 3;
  while (essais > 0) {
    const pin = promptWithTimeout("Entrer votre code secret: ", 2 * 60 * 1000);
    if (pin === userPin) return true;
    essais--;
    if (essais > 0) {
      console.log(`Code incorrect. Il vous reste ${essais} essai(s).`);
    }
  }
  console.log(
    "Trop de tentatives, veuillez vous rendre à une agence Yas pour débloquer votre puce."
  );
  process.exit(0);
};

export function waitEnter() {
  promptWithTimeout("Appuyez sur Entrée pour continuer...", 2 * 60 * 1000);
}
