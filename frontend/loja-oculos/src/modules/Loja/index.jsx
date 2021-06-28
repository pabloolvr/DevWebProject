import React from "react";
import "./style.css";
import { Card } from "../common/Card";
import { SideOption } from "../common/SideOptions";
import { oculosSol } from "../../mocks/sol";

import { oculosGrau } from "../../mocks/grau";

import {  oculosComputador } from "../../mocks/computador";


import { observer } from "mobx-react";
import { globalStore } from "../../GlobalStore";
import { CartComponent } from "../common/Cart";

export const Loja = observer(() => {
  return (
    <div className="loja">
      <CartComponent></CartComponent>
      <div className="products-wrapper">
        <div className="shell">
          <SideOption></SideOption>
          <div className="wrapper-right">
            {globalStore.currentLojaOption === "sol" ? (
              oculosSol.map((item) => {
                return <Card props={item}></Card>;
              })
            ) : (
              <div></div>
            )}
            {globalStore.currentLojaOption === "grau" ? (
              oculosGrau.map((item) => {
                return <Card props={item}></Card>;
              })
            ) : (
              <div></div>
            )}
            {globalStore.currentLojaOption === "computador" ? (
              oculosComputador.map((item) => {
                return <Card props={item}></Card>;
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
