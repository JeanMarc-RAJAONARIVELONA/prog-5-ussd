import { promptWithTimeout } from "../utils/prompt-utils";

export const menuMora = () => {
  console.log("1 - Mora 500 (500 Ar)");
  console.log("2 - Mora ONE (1000 Ar)");
  console.log("3 - Mora+ 2000 (2000 Ar)");
  console.log("4 - Mora+ 5000 (5000 Ar)");
  console.log("5 - Mora INTERNATIONAL (5000 Ar)");
  const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
  switch (choix) {
    case "1":
      return { offre: "Mora 500", prix: 500 };
    case "2":
      return { offre: "Mora ONE", prix: 1000 };
    case "3":
      return { offre: "Mora+ 2000", prix: 2000 };
    case "4":
      return { offre: "Mora+ 5000", prix: 5000 };
    case "5":
      return { offre: "Mora INTERNATIONAL", prix: 5000 };
    default:
      return { offre: "", prix: 0 };
  }
};

export const menuFirst = () => {
  console.log("1 - FIRST PREMIUM (10000 Ar)");
  console.log("2 - FIRST PREMIUM+ (15000 Ar)");
  console.log("3 - FIRST PRESTIGE (30000 Ar)");
  console.log("4 - FIRST ROYAL (50000 Ar)");
  const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
  switch (choix) {
    case "1":
      return { offre: "FIRST PREMIUM", prix: 10000 };
    case "2":
      return { offre: "FIRST PREMIUM+", prix: 15000 };
    case "3":
      return { offre: "FIRST PRESTIGE", prix: 30000 };
    case "4":
      return { offre: "FIRST ROYAL", prix: 50000 };
    default:
      return { offre: "", prix: 0 };
  }
};

export const menuYelow = () => {
  console.log("1 - YELOW 100 (100 Ar)");
  console.log("2 - YELOW SMS (200 Ar)");
  console.log("3 - YELOW 500 (500 Ar)");
  console.log("4 - YELOW 1000 (1000 Ar)");
  console.log("5 - YELOW ONE (1000 Ar)");
  console.log("6 - YELOW 200 (200 Ar)");
  console.log("7 - YELOW 2000 (2000 Ar)");
  const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
  switch (choix) {
    case "1":
      return { offre: "YELOW 100", prix: 100 };
    case "2":
      return { offre: "YELOW SMS", prix: 200 };
    case "3":
      return { offre: "YELOW 500", prix: 500 };
    case "4":
      return { offre: "YELOW 1000", prix: 1000 };
    case "5":
      return { offre: "YELOW ONE", prix: 1000 };
    case "6":
      return { offre: "YELOW 200", prix: 200 };
    case "7":
      return { offre: "YELOW 2000", prix: 2000 };
    default:
      return { offre: "", prix: 0 };
  }
};

export const menuYasNet = () => {
  console.log("1 - Net HEBDOOMADAIRE");
  console.log("2 - NET MENSUEL");
  console.log("3 - YELOW (SMS - INTERNET)");
  console.log("4 - YAS Net(INTERNET)");
  console.log("5 - ROAMING (DATA - SMS)");
  const choix = promptWithTimeout("Votre choix: ", 2 * 60 * 1000);
  switch (choix) {
    case "1":
      return { offre: "Net HEBDOOMADAIRE", prix: 2000 };
    case "2":
      return { offre: "NET MENSUEL", prix: 10000 };
    case "3":
      return { offre: "YELOW (SMS - INTERNET)", prix: 1000 };
    case "4":
      return { offre: "YAS Net(INTERNET)", prix: 5000 };
    case "5":
      return { offre: "ROAMING (DATA - SMS)", prix: 5000 };
    default:
      return { offre: "", prix: 0 };
  }
};
