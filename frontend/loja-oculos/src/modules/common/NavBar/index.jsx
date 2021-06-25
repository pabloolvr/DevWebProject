import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import { Busca } from './components/Busca'

export const NavBar = () => {
  return (<div className="navbar">
    <div class="store-name">
      <h2><Link to="/" className="main-page-btn">OCULOS OCULOS</Link></h2>
    </div>
    
    <Busca></Busca>
    <ul>
      <li>Minha Conta</li>
      <li><Link to="/sacola" className="main-page-btn">Sacola</Link></li>
    </ul>
    
  </div>);
};
