import React from "react";
import "./style.css";
import { observer } from "mobx-react";
import { globalStore } from "../../../GlobalStore";

export const Card = observer(({ props }) => {
  const { image, name, price } = props;
  const {cart} = globalStore;

  const addProduct = ()=>{
    cart.addProduct(props);
  }

  const removeProduct = ()=>{
    cart.removeProduct(props.id);
  }

  return (
    <div className="card-oculos">
      <button onClick={()=>{addProduct()}}>Add in cart</button>
      <button onClick={()=>{removeProduct()}}>Remove from cart</button>
      <div className="fav-area"></div>
      <div className="photo-area">
        <img alt="glasses" src={`data:image/*;base64,${image}`} />
      </div>
      <div className="name-area">
        <p className="name-value">{name}</p>
      </div>
      <div className="price-area">
        <p className="price-value">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
});
