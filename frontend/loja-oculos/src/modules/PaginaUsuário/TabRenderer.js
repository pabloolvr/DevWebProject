import React from "react";
import { Profile } from "./components/profile";
import { Enderecos } from "./components/addresses";
import { Cartoes } from "./components/cards";
import { Pedidos } from "./components/orders";
import { EditarDados } from "./components/edit-info";
import { RedefinirSenha } from "./components/redefine-password";

const TabRenderer = props => {
    let { userPageTab } = props;

    switch (userPageTab) {
        case 0: // dados pessoais
            return <Profile></Profile>;
            break;
        case 1: // endereços
            return <Enderecos></Enderecos>;
            break;
        case 2: // cartoes
            return <Cartoes></Cartoes>;
            break;
        case 3: // pedidos
            return <Pedidos></Pedidos>;
            break;
        case 4: // editar dados
            return <EditarDados></EditarDados>
            break;
        case 5: // alterar senha
            return <RedefinirSenha></RedefinirSenha>
            break;
        default:
            return null;
    }
};

export default TabRenderer;