import { action, computed, makeObservable, observable } from "mobx";

class Cart {
  productList = [];

  constructor() {
    makeObservable(this, {
      productList: observable,
      productListLenght: computed,
      addProduct: action,
    });
  }

  get productListLenght() {
    return this.productList.length;
  }

  addProduct(product) {
    this.productList.push(product);
  }
}

export const cart = new Cart();
