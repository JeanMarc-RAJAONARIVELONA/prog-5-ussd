import { MainMenu } from "./menus/main-menu";
import { askPin, waitEnter } from "./utils/user-utils";
import { MenuContext } from "./types/menu-context";

const userNumber = "+261383403847";
let userSolde = 50000;
let userCredit = 0;
let userOffer = "Tokana";

function main() {
  const context: MenuContext = {
    userSolde,
    userCredit,
    userOffer,
    userNumber: userNumber,
    askPin,
    waitEnter,
    setSolde: (n: number) => {
      context.userSolde = userSolde = n;
    },
    setCredit: (n: number) => {
      context.userCredit = userCredit = n;
    },
    setOffer: (o: string) => {
      context.userOffer = userOffer = o;
    },
  };
  new MainMenu(context).show();
}

main();
