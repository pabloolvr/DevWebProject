import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavBar } from "./modules/common/NavBar";
import { Loja } from "./modules/Loja";
import { PaginaInicial } from "./modules/PaginaInicial";
import { Sacola } from "./modules/Sacola";
import { FinalizarCompra } from "./modules/FinalizarCompra";

export const SetupRouter = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <PaginaInicial></PaginaInicial>
        </Route>
        <Route exact path="/loja">
          <Loja></Loja>
        </Route>
        <Route exact path="/sacola">
          <Sacola></Sacola>
        </Route>
        <Route exact path="/finalizar">
          <FinalizarCompra></FinalizarCompra>
        </Route>
      </Switch>
    </Router>
  );
};
