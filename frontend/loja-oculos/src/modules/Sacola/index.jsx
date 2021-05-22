import React from "react";
import {ItemSacola} from './components/ItemSacola'
import './style.css'

export const Sacola = () => {
  return <div className="sacola">
    <h2> Sacola </h2>
    <div className="compras">
      <table>
        <th>PRODUTO</th>
        <th></th>
        <th>QUANTIDADE</th>
        <th>PRECO TOTAL</th>
        <ItemSacola></ItemSacola>
      </table>
      <table>
        <th></th>
      </table>
    </div>

  </div>;
};
