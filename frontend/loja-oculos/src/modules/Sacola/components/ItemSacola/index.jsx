import "./style.css";
import oculos from "../../../assets/sunglass-example.png";
export const ItemSacola = () => {
  return (
    <tr className="item-sacola">
      <td>
        <img src={oculos} alt="imagem do oculos" />
      </td>
      <td>
        <div>Descrição do oculos</div>
      </td>
      <td>
        <div>quantidade</div>
      </td>
      <td>
        <div>preço</div>
      </td>
    </tr>
  );
};
