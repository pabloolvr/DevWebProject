import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const PaginaUsuarioAddresses = () => {
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
                <section className="account-page">
                    <div className="account-page-name">

                    </div>
                    <div className="account-page-body">
                        <div className="account-info-container">
                            <div className="account-info-data">
                                <div className="data-field">
                                    <div>
                                        <label className="field-name">
                                            Nome Completo
                                        </label>
                                    </div>
                                    <div className="field">
                                        Fulano de tal
                                    </div>
                                </div>
                                <div className="data-field">
                                    <div>
                                        <label className="field-name">
                                            E-mail
                                        </label>
                                    </div>
                                    <div className="field">
                                        fulanodetal@gmail.com
                                    </div>
                                </div>
                                <div className="data-field">
                                    <div>
                                        <label className="field-name">
                                            CPF
                                        </label>
                                    </div>
                                    <div className="field">
                                        999.999.999-99
                                    </div>
                                </div>
                                <div className="data-field">
                                    <div>
                                        <label className="field-name">
                                            Data de Nascimento
                                        </label>
                                    </div>
                                    <div className="field">
                                        31/12/1999
                                    </div>
                                </div>
                                <div className="data-field">
                                    <div>
                                        <label className="field-name">
                                            Telefone
                                        </label>
                                    </div>
                                    <div className="field">
                                        (99) 99999-9999
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>                    
                </section>
            </div>
        </div>
    );
};