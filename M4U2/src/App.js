import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";
import InicioPage from "./pages/InicioPage";
import NosotrosPage from "./pages/NosotrosPage";
import DestinatariosPage from "./pages/DestinatariosPage";
import PreciosPage from "./pages/PreciosPage";
import SalasPage from "./pages/SalasPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<InicioPage/>}/>
          <Route path="nosotros" element={<NosotrosPage/>}/>
          <Route path="destinatarios" element={<DestinatariosPage/>}/>
          <Route path="salas" element={<SalasPage/>}/>
          <Route path="precios" element={<PreciosPage/>}/>
          <Route path="contacto" element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
