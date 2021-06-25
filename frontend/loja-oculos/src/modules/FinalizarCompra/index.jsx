import React from "react";

export const FinalizarCompra = () => {
    return (
        <div className="sacola">
            <h1> Finalizar Compra </h1>
            <div className="sacola-area">
                <table className="compras">
                    <tbody>
                        <tr>
                            <th>PRODUTO</th>
                            <th></th>
                            <th>QUANTIDADE</th>
                            <th>PRECO TOTAL</th>
                        </tr>

                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>RESUMO PEDIDO</th>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};