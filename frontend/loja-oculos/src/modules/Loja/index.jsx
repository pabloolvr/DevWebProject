import React from "react";
import "./style.css";
import { Card } from "../common/Card";
import { SideOption } from '../common/SideOptions'
import { dados } from '../../mocks/loja'
export const Loja = () => {




  return (
    <div className="loja">
      <div className="products-wrapper">
        <div className="shell">
          <SideOption></SideOption>
          <div className="wrapper-right">
            {dados.map((item)=>{
              return(
                <Card key={item.id.toString()}props={item}></Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
