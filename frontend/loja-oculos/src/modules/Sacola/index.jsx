import React from "react";
import { ItemSacola } from "./components/ItemSacola";
import "./style.css";

export const Sacola = () => {
  return (
    <div className="sacola">
      <h2> Sacola </h2>
      <div className="compras">
        <table>
          <tbody>
            <tr>
              <th>PRODUTO</th>
              <th></th>
              <th>QUANTIDADE</th>
              <th>PRECO TOTAL</th>
            </tr>
            <ItemSacola></ItemSacola>
          </tbody>
        </table>
      </div>
    </div>
  );
};
