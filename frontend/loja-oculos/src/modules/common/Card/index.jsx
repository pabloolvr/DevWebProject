import React from "react";
import "./style.css";
import { observer } from "mobx-react";

export const Card = observer(({ name, price, image, key }) => {
  return (
    <div className="card-oculos">
      <div></div>
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
