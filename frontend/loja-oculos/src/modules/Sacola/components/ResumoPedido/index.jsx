import "./style.css";
export const ResumoPedido = () => {
  return (
    <tr id="resumo-pedido">
      <td>
        <p>ENTREGA</p>
        <div>
        <input placeholder="Digite o cep"></input>
        <button> calcular </button>
        </div>
        <p>Cupom de Desconto</p>
        <div>
        <input placeholder="Digite o cep"></input>
        <button> calcular </button>
        </div>
        <p>Subtotal</p>
        <p>Total</p>
        <button>Finalizar Compra</button>
      </td>
    </tr>
  );
};
