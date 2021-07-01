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
import { DadosPessoais } from "./modules/PaginaUsuário/components/profile";
import { Enderecos } from "./modules/PaginaUsuário/components/address";
import { Pedidos } from "./modules/PaginaUsuário/components/orders";

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
        <Route exact path="/minhaconta#/profile">
          <DadosPessoais></DadosPessoais>
        </Route>
        <Route exact path="/minhaconta#/addresses">
          <Enderecos></Enderecos>
        </Route>
        <Route exact path="/minhaconta#/orders">
          <Pedidos></Pedidos>
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
