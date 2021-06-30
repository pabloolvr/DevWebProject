import React, { Component } from "react";
import TabRenderer from "./TabRenderer";
//import React, { useState } from 'react';
//import Login from '../../components/Login/Login';
//import { Link } from "react-router-dom";
import './style.css'
//import useToken from '../../components/App/useToken';
import { MenuUsuario } from "./components/usermenu";
/*
//import { Profile } from "./components/profile";
import { DadosPessoais } from "./components/profile";
import { Enderecos } from "./components/address";
import { Cartoes } from "./components/cards";
import { Pedidos } from "./components/orders";
import { EditarDados } from "./components/edit-info";
import { RedefinirSenha } from "./components/redefine-password";
import { EditarEndereço } from "./components/edit-address";
//import Sibling1 from "./Sibling1";
*/

/*
class Sibling1 extends Component {
    render() {
        return (
            <div>
                <div>I am Sibling 1</div>
                <input type="text"
                    placeholder="Write text" onChange={(e) => updateTab(e.target.value)} />
            </div>
        )
    }
}
*/
function updateTab(value) {
    this.setState({ value })
}

class PaginaUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPageTab: 0
        };
        updateTab = updateTab.bind(this);
    }

    render() {
        return (
            <div className="user-page">
                <div className="container-userpage">
                    <MenuUsuario></MenuUsuario>
                    <TabRenderer userPageTab={this.state.userPageTab} />
                </div>
            </div>
        );
    }
}

export default PaginaUsuario;