import React, { useState } from 'react';
import Login from '../../components/Login/Login';
import { Link } from "react-router-dom";
//import './style.css'
import useToken from '../../components/App/useToken';
import PaginaUsuario from './PaginaUsuario'

export const MinhaConta = () => {
    
    const { token, setToken } = useToken();

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <PaginaUsuario></PaginaUsuario>
    );
};