import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const Profile = () => {
    return (
        <section className="account-page">
            <div className="account-page-name">
                Dados Pessoais
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
    );
};