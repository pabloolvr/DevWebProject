import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const PaginaUsuario = () => {
    return (
        <div className="user-page">
            <div className="container">
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
                        <Link to="#/profile" className="store-btn">Dados Pessoais</Link><br></br>
                        <Link to="#/cards" className="store-btn">Cartões</Link><br></br>
                        <Link to="#/addresses" className="store-btn">Endereços</Link><br></br>
                        <Link to="#/orders" className="store-btn">Pedidos</Link><br></br>
                    </nav>
                </aside>
                <section>
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                    
                </section>
            </div>
        </div>
    );
};