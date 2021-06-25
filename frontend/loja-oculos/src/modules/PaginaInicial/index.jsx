import React from "react";
import { Card } from '../common/Card'
import { SideOption } from '../common/SideOptions'
import "./styles/styles.css";

export const PaginaInicial = () => {
  return (
    <div>
      <div className="container">
        <header>This is the header of the page</header>
        <div className="buy-container">
          <SideOption></SideOption>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};
