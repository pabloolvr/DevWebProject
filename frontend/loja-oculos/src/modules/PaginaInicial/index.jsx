import React from "react";
import { Card } from "../common/Card";
import { SideOption } from "../common/SideOptions";
import "./styles/styles.css";
import { dados } from "../../mocks/loja";
import { observer } from "mobx-react";


export const PaginaInicial = observer(()=>{
  return (
    <div>
      <div className="container">
      <SideOption></SideOption>

        <div className="buy-container">
          <div className="products">
            {dados.map((item) => {
              return (
                <Card
                  key={item.id.toString()}
                  props={item}
                ></Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
})