import React from "react";
import { globalStore } from '../../GlobalStore';



export const FinalizarCompra = () => {

    const {cart} =  globalStore;

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

                        {cart.productList.map((item)=>{

                            return(
                                <tr key={item.id.toString()}> 
                                    <td>{item.name}</td>
                                    <td></td>
                                    <td>{item.quantity}</td>
                                    <td>{(item.price*item.quantity).toFixed(2)}</td>
                                </tr>
                            )

                        })}

                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <th>RESUMO PEDIDO</th>
                        </tr>
                        {cart.productList.map((item)=>{
                                return(
                                    <tr key={item.id.toString()}>
                                        <td>{(item.price*item.quantity).toFixed(2)}</td>
                                    </tr>
                                )
                            })}
                        <tr><td>+<hr/></td></tr>
                        <tr><td>{cart.totalPrice}</td></tr>
                        <tr><td><button>Finalizar</button></td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};