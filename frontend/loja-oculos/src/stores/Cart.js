import { action, computed, makeObservable, observable } from "mobx";

class Cart {
  productList = [];

  constructor() {
    makeObservable(this, {
      productList: observable,
      productListLenght: computed,
      addedProductsId: computed,
      addProduct: action,
      eachProductListSumLen: computed,
      removeProduct: action,
    });
  }

  get productListLenght() {
    return this.productList.length;
  }

  get eachProductListSumLen() {
    let acumm = 0;
    this.productList.forEach((item) => {
      acumm += item.quantity;
    });

    return acumm;
  }

  get addedProductsId() {
    return this.productList.map((value) => {
      return value.id;
    });
  }

  addProduct(product) {
    const index = this.addedProductsId.findIndex((id) => id === product.id);
    if (index !== -1) {
      this.productList[index].quantity++;
    } else {
      this.productList.push(product);
    }
  }

  removeProduct(id) {
    const index = this.addedProductsId.findIndex((itemId) => itemId === id);

    if (index !== -1) {
      if (this.productList[index].quantity > 1) {
        this.productList[index].quantity--;
      } else {
        this.productList.splice(index, 1);
      }
    }
  }
}

export const cart = new Cart();
