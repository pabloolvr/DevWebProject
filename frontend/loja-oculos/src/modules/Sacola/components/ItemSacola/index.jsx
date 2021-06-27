import "./style.css";
export const ItemSacola = ({props}) => {

  const { name,image, quantity,price} = props;


  return (
    <tr className="item-sacola">
      <td>
        <img src={`data:image/*;base64,${image}`} alt="imagem do oculos" />
      </td>
      <td>
        <div>{name}</div>
      </td>
      <td>
        <div>{quantity}</div>
      </td>
      <td>
        <div>{(price*quantity).toFixed(2)}</div>
      </td>
    </tr>
  );
};
