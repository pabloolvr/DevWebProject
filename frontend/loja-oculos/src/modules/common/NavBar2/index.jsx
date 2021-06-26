import React from "react";
import { Link } from "react-router-dom";
import './style.css'

export const NavBar2 = () => {
    return (<div className="navbar2">
        <ul>
            <li><Link to="/loja" className="store-btn">Óculos de Sol</Link></li>
            <li><Link to="/loja" className="store-btn">Óculos de Grau</Link></li>
            <li><Link to="/loja" className="store-btn">Óculos de Computador</Link></li>
        </ul>

    </div>);
}