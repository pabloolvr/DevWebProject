import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { globalStore } from '../../../GlobalStore';
import './style.css'


export const NavBar2 = observer(() => {

    const chooseOption = (option)=>{
        globalStore.setCurrentLojaOption(option)
    }

    return (<div className="navbar2">
        <ul>
            <li><Link onClick={()=>{chooseOption("sol")}} to="/loja" className="store-btn">Óculos de Sol</Link></li>
            <li><Link onClick={()=>{chooseOption("grau")}} to="/loja" className="store-btn">Óculos de Grau</Link></li>
            <li><Link onClick={()=>{chooseOption("computador")}} to="/loja" className="store-btn">Óculos de Computador</Link></li>
        </ul>

    </div>);
})