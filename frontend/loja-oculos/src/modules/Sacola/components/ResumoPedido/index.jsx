import "./style.css";
import { Link } from "react-router-dom";
import { globalStore } from "../../../../GlobalStore";

export const ResumoPedido = () => {

  const { cart } = globalStore;

  return (
    <tr className="resumo-pedido">
      <td>
        <p>Entrega</p>
        <div>
        <input placeholder="Digite o cep"></input>
        <button> calcular </button>
        </div>
        <p>Cupom de Desconto</p>
        <div>
        <input placeholder="Código de Desconto"></input>
        <button> adicionar</button>
        </div>
        <p><span>Total</span> <span>{cart.totalPrice} Reais</span></p>
        <button className="terminaCompraBtn"><Link to="/finalizar" className="finish-page">Finalizar Compra</Link></button>
      </td>
    </tr>
  );
};
