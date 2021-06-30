import React from "react";
import { Link } from "react-router-dom";
import PaginaUsuario from '../../PaginaUsuario'
import './style.css'

export const EditarEndereço = () => {
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
                            Endereço
                        </div>
                        <Link to="/minhaconta" className="editing-page"></Link>
                    </button>
                </div>
                <div className="page-title">Editar Endereço</div>
            </div>
            <div className="account-page-body">
                <div className="account-info-container">
                    <div className="account-info">
                        <div className="account-info-fields account-info-inputs">
                            <div className="data-field">
                                <div className="field-name">Logradouro</div>
                                <div className="field">
                                    <input className="input-box" name="addressName" maxLength="100" type="text"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Número</div>
                                <div className="field">
                                    <input className="input-box" name="addresNumber" type="number"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Bairro</div>
                                <div className="field">
                                    <input className="input-box" name="district" maxLength="20" type="text"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Cidade</div>
                                <div className="field">
                                    <input className="input-box" name="city" maxLength="50" type="text"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Estado</div>
                                <div className="field">
                                    <input className="input-box" name="state" maxLength="50" type="text"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">CEP</div>
                                <div className="field">
                                    <input className="input-box" name="cepNumber" maxLength="20" type="text"></input>
                                </div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">País</div>
                                <div className="field">
                                    <input className="input-box" name="country" maxLength="50" type="text"></input>
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