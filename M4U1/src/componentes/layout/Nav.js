import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/nosotros">Sobre nosotros</Link></li>
                    <li><Link to="/destinatarios">Para quienes</Link></li>
                    <li><Link to="/salas">Salas</Link></li>
                    <li><Link to="/precios">Precios</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;