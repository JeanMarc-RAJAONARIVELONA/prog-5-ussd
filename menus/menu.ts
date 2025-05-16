import { MenuContext } from "../types/menu-context";

export abstract class Menu {
  protected context: MenuContext;
  constructor(context: MenuContext) {
    this.context = context;
  }
  abstract show(): void;
}
