import React from "react";
import { Card } from "../common/Card";
import { SideOption } from "../common/SideOptions";
import "./styles/styles.css";
import { dados } from "../../mocks/loja";

export const PaginaInicial = () => {
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
                  name={item.name}
                  price={item.price}
                  image={item.image}
                ></Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
