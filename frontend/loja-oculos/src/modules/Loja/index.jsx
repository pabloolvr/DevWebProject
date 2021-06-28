import React from "react";
import "./style.css";
import { Card } from "../common/Card";
import { SideOption } from "../common/SideOptions";
import { oculosSol } from "../../mocks/sol";
import { observer } from "mobx-react";
import { globalStore } from "../../GlobalStore";

export const Loja = observer(() => {
  return (
    <div className="loja">
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
              oculosSol.map((item) => {
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
