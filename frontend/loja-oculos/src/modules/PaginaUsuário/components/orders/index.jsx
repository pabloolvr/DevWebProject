import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const Pedidos = () => {
    return (
        <section className="account-page">
            <div className="account-page-name">
                <div className="page-title">Pedidos</div>
            </div>
            <div className="account-page-body">
                <div className="account-info-container">
                    <div className="account-info">
                        <div className="account-info-fields">
                            <div className="text-warning">
                                Você ainda não possui pedidos!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};