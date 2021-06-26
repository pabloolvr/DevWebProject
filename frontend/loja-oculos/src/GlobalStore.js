import { makeObservable } from "mobx";
import { cart } from "./stores/Cart";

class GlobalStore {
  cart;
  constructor() {
    this.cart = cart;
    makeObservable(this);
  }
}

export const globalStore = new GlobalStore();
