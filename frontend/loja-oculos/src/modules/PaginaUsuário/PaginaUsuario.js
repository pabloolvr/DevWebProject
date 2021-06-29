import React, { Component } from "react";
import TabRenderer from "./TabRenderer";
//import React, { useState } from 'react';
import Login from '../../components/Login/Login';
//import { Link } from "react-router-dom";
import './style.css'
import useToken from '../../components/App/useToken';
import { MenuUsuario } from "./components/usermenu";

class PaginaUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPageTab: 4
        };
    }

    render() {
        return (
            <div className="user-page">
                <div className="container-userpage">
                    <MenuUsuario></MenuUsuario>
                    {/*----
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
                            <div className="nav-option">
                                <Link to="/minhaconta/#/cards" className="user-page-link">Cartões</Link>
                            </div>
                            <div className="nav-option">
                                <Link to="/minhaconta/#/addresses" className="user-page-link">Endereços</Link>
                            </div>
                            <div className="nav-option">
                                <Link to="/minhaconta/#/orders" className="user-page-link">Pedidos</Link>
                            </div>
                            <div className="nav-option">
                                <Link to="/minhaconta" className="user-page-link quit">Sair</Link>
                            </div>
                        </nav>
                    </aside>
                    ----*/}
                    <TabRenderer userPageTab={this.state.userPageTab} />
                    {/*----
                    <section className="account-page">
                        <div className="account-page-name">
                            <div className="page-title">Dados Pessoais</div>
                        </div>
                        <div className="account-page-body">
                            <div className="account-info-container">
                                <div className="account-info">
                                    <div className="account-info-fields">
                                        <div className="data-field">
                                            <div className="field-name">Nome Completo</div>
                                            <div className="field">Fulano de tal</div>
                                        </div>
                                        <div className="data-field">
                                            <div className="field-name">E-mail</div>
                                            <div className="field">fulanodetal@gmail.com</div>
                                        </div>
                                        <div className="data-field">
                                            <div className="field-name">CPF</div>
                                            <div className="field">999.999.999-99</div>
                                        </div>
                                        <div className="data-field">
                                            <div className="field-name">Data de Nascimento</div>
                                            <div className="field">31/12/1999</div>
                                        </div>
                                        <div className="data-field">
                                            <div className="field-name">Telefone</div>
                                            <div className="field">(99) 99999-9999</div>
                                        </div>
                                        <div className="footer-area">
                                            <button className="edit-info-btn"><Link to="/minhaconta" className="editing-page">editar</Link></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="password-field-container">
                                <div className="password-field">
                                    <div className="data-field">
                                        <div className="field-name">Senha</div>
                                        <div className="field">*************</div>
                                    </div>
                                    <div className="footer-area">
                                        <button className="edit-info-btn"><Link to="/minhaconta" className="editing-page">redefinir senha</Link></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    ----*/}
                </div>
            </div>
        );
    }
}

export default PaginaUsuario;