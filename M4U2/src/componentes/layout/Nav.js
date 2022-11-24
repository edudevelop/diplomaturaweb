import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink className={({ isActive }) => isActive? "activo" : undefined} to="/">Inicio</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive? "activo" : undefined} to="/nosotros">Sobre nosotros</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive? "activo" : undefined} to="/destinatarios">Para quienes</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive? "activo" : undefined} to="/salas">Salas</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive? "activo" : undefined} to="/precios">Precios</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive? "activo" : undefined} to="/contacto">Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;