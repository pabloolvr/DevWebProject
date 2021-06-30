import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const RedefinirSenha = () => {
    return (
        <section className="account-page">
            <div className="account-page-name">
                <div className="link-container">
                    <button className="return-btn">
                        <div className="btn-items">
                            <span>
                                <span className="return-icon">
                                    <svg className="arrow-left-icon"></svg>
                                </span>
                            </span>
                            Dados Pessoais
                        </div>
                        <Link to="/minhaconta" className="editing-page"></Link>
                    </button>
                </div>
                <div className="page-title">Redefinir Senha</div>
            </div>
            <div className="account-page-body">
                <div className="account-info-container">
                    <div className="account-info">
                        <div className="account-info-fields account-info-inputs">
                            <div className="data-field">
                                <div className="field-name">Senha Atual</div>
                                <div className="field">
                                    <input className="input-box" name="fullName" maxLength="100" type="password"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Nova Senha</div>
                                <div className="field">
                                    <input className="input-box" name="cpf" maxLength="20" type="password"></input>
                                </div>
                            </div>
                            <div className="footer-area">
                                <button className="edit-info-btn save-btn"><Link to="/minhaconta" className="editing-page">salvar alterações</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};