import React from "react";
import { ItemSacola } from "./components/ItemSacola";
import { ResumoPedido } from "./components/ResumoPedido";
import "./style.css";
import { globalStore } from "../../GlobalStore";

export const Sacola = () => {
  const { cart } = globalStore;

  return (
    <div className="sacola">
      <h1> Sacola </h1>
      <div className="sacola-area">
        <table className="compras">
          <tbody>
            <tr>
              <th>PRODUTO</th>
              <th></th>
              <th>QUANTIDADE</th>
              <th>PRECO TOTAL</th>
            </tr>
            {cart.productList.map((item) => {
              return (
                <ItemSacola props={item} ></ItemSacola>
              );
            })}
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
