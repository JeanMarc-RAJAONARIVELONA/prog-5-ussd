export interface MenuContext {
  userSolde: number;
  userCredit: number;
  userOffer: string;
  userNumber: string;
  askPin: () => boolean;
  waitEnter: () => void;
  setSolde: (n: number) => void;
  setCredit: (n: number) => void;
  setOffer: (o: string) => void;
}
