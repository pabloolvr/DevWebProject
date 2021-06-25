import { autorun, computed, makeObservable, observable } from "mobx";

class GlobalStore {
  microStoreLists = [];

  constructor(microStores) {
    makeObservable(this, {
      microStoreLists: observable,
      paginaInicialStore: computed,
    });

    autorun(() => {
      const microStore = Object.keys(microStores);
      microStore.forEach((value) => {
        this.microStoreLists.push(microStore[value]);
      });
    });
  }

  get paginaInicialStore() {
    return this.microStoreLists[0];
  }
}

export const globalStore = new GlobalStore();
