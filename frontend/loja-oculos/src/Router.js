import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Preferences from './components/Preferences/Preferences';
import { NavBar } from "./modules/common/NavBar";
import { NavBar2 } from "./modules/common/NavBar2";
import { Loja } from "./modules/Loja";
import { PaginaInicial } from "./modules/PaginaInicial";
import { Sacola } from "./modules/Sacola";
import { FinalizarCompra } from "./modules/FinalizarCompra";
import { MinhaConta } from "./modules/PaginaUsuário";
import { Profile } from "./modules/PaginaUsuário/components/profile";

export const SetupRouter = () => {
  return (
    <Router>
      <NavBar></NavBar>
      <NavBar2></NavBar2>
      <Switch>
        <Route exact path="/">
          <PaginaInicial></PaginaInicial>
        </Route>
        <Route exact path="/loja">
          <Loja></Loja>
        </Route>
        <Route exact path="/minhaconta">
          <MinhaConta></MinhaConta>
        </Route>
{/*
        <Route exact path="/minhaconta#/profile">
          <MinhaConta></MinhaConta>
        </Route>
        <Route exact path="/minhaconta#/cards">
          <MinhaConta></MinhaConta>
        </Route>
        <Route exact path="/minhaconta#/addresses">
          <MinhaConta></MinhaConta>
        </Route>
        <Route exact path="/minhaconta#/orders">
          <MinhaConta></MinhaConta>
        </Route>
*/}
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
