import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const Profile = () => {
    return (
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
    );
};