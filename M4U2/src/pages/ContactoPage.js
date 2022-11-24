import React from 'react';
import '../styles/components/pages/Contacto.css';

const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div className="ubicanos">
                <h2>Ubicanos en</h2>
                <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.33883820895!2d-58.425468284771306!3d-34.57029198046809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb598b28439a5%3A0x1b17ed477ac005c8!2sAv.%20Dorrego%203501%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1667939401012!5m2!1ses!2sar"
                    width="300" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowfullscreen="" 
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                <ul>
                    <li><i className="fa-solid fa-location-dot"></i> Av. Dorrego 3501,CP 1426 CABA</li>
                    <li><i className="fa-solid fa-phone"></i> +54 11 4778 0000</li>
                    <li><i className="fa-solid fa-envelope"> </i> contacto@adrenalineer.com.ar</li>
                </ul>
            </div>
            <div>
                <h2>Contacto R&aacute;pido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label for="telefono">Tel&eacute;fono</label>
                        <input type="number" name="telefono" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
        </main>
    );
}

export default ContactoPage;