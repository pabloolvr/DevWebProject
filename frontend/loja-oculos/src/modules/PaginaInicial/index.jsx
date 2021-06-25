import React from "react";
<<<<<<< Updated upstream
import { Card } from '../common/Card'
=======
import { Card } from "../common/Card";
import { SideOption } from '../common/SideOptions'
import "./styles/styles.css";
>>>>>>> Stashed changes

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
