import '../styles/components/pages/Precios.css';

const PreciosPage = (props) => {
    return (
        <main>
            <div class="holder">
                <h2>Lista de Precios</h2>
                <table id="listaprecios">
                    <tbody>
                        <tr>
                            <td>
                                <div class="punteada">
                                    <div class="cantidad-personas">
                                        6 a 8 personas
                                    </div>
                                </div>
                            </td>
                            <td>
                                $1200,00 c/u
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="punteada">
                                    <div class="cantidad-personas">
                                        5 a 6 personas
                                    </div>
                                </div>
                            </td>
                            <td>
                                $1500,00 c/u
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="punteada">
                                    <div class="cantidad-personas">
                                        3 a 4 personas
                                    </div>
                                </div>
                            </td>
                            <td>
                                $1700,00 c/u
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="punteada">
                                    <div class="cantidad-personas">
                                        2 personas
                                    </div>
                                </div>
                            </td>
                            <td>
                                $1900,00 c/u
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="reservar">
                    <button>Reservar</button>
                </div>
            </div>
        </main>
    );
}

export default PreciosPage;