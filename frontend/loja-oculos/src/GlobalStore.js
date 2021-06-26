import { makeObservable, observable } from "mobx";
import { cart } from "./stores/Cart";

class GlobalStore {
  cart;
  constructor() {
    this.cart = cart;
    makeObservable(this, {
      cart: observable,
    });
  }
}

export const globalStore = new GlobalStore();
