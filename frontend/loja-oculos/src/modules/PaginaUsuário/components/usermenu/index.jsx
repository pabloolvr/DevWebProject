import React, { useState } from 'react';
//import Login from '../../components/Login/Login';
import { Link } from "react-router-dom";
import './style.css'
import Login from '../../../../components/Login/Login';
import useToken from '../../../../components/App/useToken';

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
}

export const MenuUsuario = () => {
    return (
        <aside className="account-menu">
            <div className="header-userinfo">
                <div className="user-image-box">
                    <svg className="user-image"></svg>
                </div>
                <div className="user-greeting">
                    <span>Olá, fulano!</span>
                </div>
            </div>
            <nav className="links-menu">
                <div className="nav-option">
                    <Link to="#/profile" className="user-page-link">Dados Pessoais</Link>
                </div>
                {/*
                <div className="nav-option">
                    <Link to="/minhaconta/#/cards" className="user-page-link">Cartões</Link>
                </div>
                */}
                <div className="nav-option">
                    <Link to="/minhaconta#/addresses" className="user-page-link">Endereço</Link>
                </div>
                <div className="nav-option">
                    <Link to="/minhaconta#/orders" className="user-page-link">Pedidos</Link>
                </div>
                <div className="nav-option">
                    <Link onClick={logout()} to="/" className="user-page-link quit">Sair</Link>
                </div>
            </nav>
        </aside>
    );
};