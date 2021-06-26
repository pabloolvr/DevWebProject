import React from "react";
import "./style.css";
import { Card } from "../common/Card";

export const Loja = () => {
  return (
    <div className="loja">
      Loja
      <div className="products-wrapper">
        <div className="shell">
          <div className="wrapper-left">
            <h2>ÓCULOS DE SOL</h2>
            <div className="filter">
              <div className="filter-nametext">
                <h2>FILTRAR</h2>
              </div>
              <div className="navigator">
                <h4>Por Gênero</h4>
                <h4>Material da Lente</h4>
                <h4>Por estilo</h4>
                <h4>Cor da Armação</h4>
                <h4>Por coleção</h4>
                <h4>Faixa de Preço</h4>
              </div>
            </div>
          </div>
          <div className="wrapper-right">
            <ul>
              <li>
                <div className="shelf">
                  <Card name="Oculos Caro" price={29.90}></Card>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
