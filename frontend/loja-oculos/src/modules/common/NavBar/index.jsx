import React from "react";
import './style.css'
import { Busca } from './components/Busca'

export const NavBar = () => {
  return (<div className="navbar">
    <h2>OCULOS OCULOS</h2>
    <Busca></Busca>
    <ul>
      <li>Encontre uma loja</li>
      <li>Minha Conta</li>
      <li>Sacola</li>
    </ul>
  </div>);
};
