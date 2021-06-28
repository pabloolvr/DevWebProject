import { makeObservable, observable, action } from "mobx";
import { cart } from "./stores/Cart";

class GlobalStore {
  cart;
  currentLojaOption = "";

  constructor() {
    this.cart = cart;
    makeObservable(this, {
      cart: observable,
      currentLojaOption: observable,
      setCurrentLojaOption: action,
    });
  }

  setCurrentLojaOption(option) {
    this.currentLojaOption = option;
  }
}

export const globalStore = new GlobalStore();
