import React from "react";
import { ItemSacola } from "./components/ItemSacola";
import { ResumoPedido } from "./components/ResumoPedido";
import "./style.css";

export const Sacola = () => {
  return (
    <div className="sacola">
      <h2> Sacola </h2>
      <div className="sacola-area">
        <table className="compras">
          <tbody>
            <tr>
              <th>PRODUTO</th>
              <th></th>
              <th>QUANTIDADE</th>
              <th>PRECO TOTAL</th>
            </tr>
            <ItemSacola></ItemSacola>
            <ItemSacola></ItemSacola>
            <ItemSacola></ItemSacola>
            <ItemSacola></ItemSacola>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>RESUMO PEDIDO</th>
            </tr>
            <ResumoPedido></ResumoPedido>
          </tbody>
        </table>
      </div>
    </div>
  );
};
