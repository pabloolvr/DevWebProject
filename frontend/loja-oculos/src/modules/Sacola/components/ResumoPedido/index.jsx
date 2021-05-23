import "./style.css";
export const ResumoPedido = () => {
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
        <p><span>Subtotal</span> <span>80 Reais</span></p>
        <p><span>Total</span> <span>80 Reais</span></p>
        <button className="terminaCompra">Finalizar Compra</button>
      </td>
    </tr>
  );
};
