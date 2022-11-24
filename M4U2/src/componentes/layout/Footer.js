import React from "react";
import '../../styles/components/layout/Footer.css';

const Footer = (props) => {
    return (
        <footer>
            <img src="images/logo.png" alt="logo" />
            <h1>Adrenaline Escape Room</h1>
            <p>Av. Dorrego 3501, CABA</p>
            <img src="images/qr_ubicacion.png" alt="QR ubicacion" />
            <p>
                Sitio Desarrollado por Luis E. Cortés para la Diplomatura Web
            </p>
            <p> &copy; 2022</p>
        </footer>
    );
}

export default Footer;