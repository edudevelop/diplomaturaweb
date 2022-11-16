import React from "react";

const InicioPage = (props) => {
    return (
        <main>
            <div className="holder">
                <section>
                    <h2>Funcionamiento</h2>
                    <div className="funcionamiento">
                        <div className="item-funcionamiento">
                            <h3>LISTO, PREPARADO, ¡A JUGAR!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio praesentium suscipit
                                sequi facilis libero unde nam facere, molestias aspernatur explicabo autem odit, sit quo
                                velit impedit quidem perferendis quisquam?</p>
                        </div>
                        <div className="item-funcionamiento">
                            <h3>PIENSALO COMO SI FUERAS TU</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio praesentium suscipit
                                sequi facilis libero unde nam facere, molestias aspernatur explicabo autem odit, sit quo
                                velit impedit quidem perferendis quisquam?</p>
                        </div>
                        <div className="item-funcionamiento">
                            <h3>PROBLEMA RESUELTO</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio praesentium suscipit
                                sequi facilis libero unde nam facere, molestias aspernatur explicabo autem odit, sit quo
                                velit impedit quidem perferendis quisquam?</p>
                        </div>
                        <div className="item-funcionamiento">
                            <h3>¡ESCAPA!</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio praesentium suscipit
                                sequi facilis libero unde nam facere, molestias aspernatur explicabo autem odit, sit quo
                                velit impedit quidem perferendis quisquam?</p>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Famosos que se atrevieron a intentar escapar</h2>
                    <div className="famosos">
                        <img src="images/famosos/langoni.jpg" alt="famoso 1" />
                        <img src="images/famosos/pampita.jpg" alt="famoso 2" />
                        <img src="images/famosos/wos.jpg" alt="famoso 3" />
                        <img src="images/famosos/ivandepineda.jpg" alt="famoso 4" />
                        <img src="images/famosos/tini.jpg" alt="famoso 5" />
                        <img src="images/famosos/litkillah.jpg" alt="famoso 6" />
                    </div>
                </section>                
            </div>
        </main>
    );
}

export default InicioPage;