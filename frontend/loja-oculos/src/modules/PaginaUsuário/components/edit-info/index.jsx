import React from "react";
import { Link } from "react-router-dom";
import PaginaUsuario from '../../PaginaUsuario'
import './style.css'

export const EditarDados = () => {
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
                <div className="page-title">Editar Dados Pessoais</div>
            </div>
            <div className="account-page-body">
                <div className="account-info-container">
                    <div className="account-info">
                        <div className="account-info-fields account-info-inputs">
                            <div className="data-field">
                                <div className="field-name">Nome Completo</div>
                                <div className="field">
                                    <input className="input-box" name="fullName" maxLength="100" type="text"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">CPF</div>
                                <div className="field">
                                    <input className="input-box" name="cpf" maxLength="20" type="text"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Telefone</div>
                                <div className="field">
                                    <input className="input-box" name="phone" maxLength="20" placeholder="Opcional" type="text"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">G??nero</div>
                                <div className="field">
                                    <select className="input-box" name="gender">
                                        <option value="male">Opcional</option>
                                        <option value="male">Masculino</option>
                                        <option value="female">Feminino</option>
                                    </select>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Data de Nascimento</div>
                                <div className="field">
                                    <input className="input-box" name="birthDate" placeholder="Opcional" type="date"></input>
                                </div>
                            </div>
                            <div className="footer-area">
                                <button className="edit-info-btn save-btn"><Link to="/minhaconta" className="editing-page">salvar altera????es</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};