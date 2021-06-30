import React from "react";
import { DadosPessoais } from "./components/profile";
import { Enderecos } from "./components/address";
//import { Cartoes } from "./components/cards";
import { Pedidos } from "./components/orders";
import { EditarDados } from "./components/edit-info";
import { RedefinirSenha } from "./components/redefine-password";
import { EditarEndereço } from "./components/edit-address";

const TabRenderer = props => {
    let { userPageTab } = props;

    switch (userPageTab) {
        case 0: // aba dados pessoais
            return <DadosPessoais />;
            break;
        case 1: // aba endereços
            return <Enderecos />;
            break;
        case 2: // aba pedidos
            return <Pedidos />;
            break;
        case 3: // aba editar dados
            return <EditarDados />;
            break;
        case 4: // aba alterar senha
            return <RedefinirSenha />;
            break;
        case 5: // aba alterar endereço
            return <EditarEndereço />;
            break;
        default:
            return null;
    }
};

export default TabRenderer;