import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loja } from "./modules/Loja";
import { PaginaInicial } from "./modules/PaginaInicial";

export const SetupRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PaginaInicial></PaginaInicial>
        </Route>
        <Route exact path="/loja">
          <Loja></Loja>
        </Route>
        <Route exact path="sacola"></Route>
      </Switch>
    </Router>
  );
};
