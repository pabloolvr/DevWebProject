import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const Enderecos = () => {
    return (
        <section className="account-page">
            <div className="account-page-name">
                <div className="page-title">Endereço</div>
            </div>
            <div className="account-page-body">
                <div className="account-info-container">
                    <div className="account-info">
                        <div className="account-info-fields">
                            <div className="data-field">
                                <div className="field-name">Logradouro</div>
                                <div className="field">Av. Trab. São Carlense</div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Número</div>
                                <div className="field">400</div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Bairro</div>
                                <div className="field">Centro</div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Cidade</div>
                                <div className="field">São Carlos</div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">Estado</div>
                                <div className="field">São Paulo</div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">CEP</div>
                                <div className="field">13566-590</div>
                            </div>
                            <div className="data-field">
                                <div className="field-name">País</div>
                                <div className="field">Brasil</div>
                            </div>
                            <div className="footer-area">
                                <button className="edit-info-btn"><Link to="/minhaconta" className="editing-page">editar</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};