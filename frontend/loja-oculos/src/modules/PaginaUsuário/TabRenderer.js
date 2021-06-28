import React from "react";
import { Profile } from "./components/profile";

const TabRenderer = props => {
    let { userPageTab } = props;

    switch (userPageTab) {
        case 0: // dados pessoais
            return <Profile></Profile>;
            break;
        case 1: // endereços
            return <button>Login</button>;
            break;
        case 2: // cartoes
            return <button>Login</button>;
            break;
        case 3: // pedidos
            return <button>Logout</button>;
            break;
        default:
            return null;
    }
};

export default TabRenderer;