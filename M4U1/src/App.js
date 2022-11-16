// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import Nav from "./componentes/layout/Nav";
import Footer from "./componentes/layout/Footer";
import InicioPage from "./pages/InicioPage";
import NosotrosPage from "./pages/NosotrosPage";
import DestinatariosPage from "./pages/DestinatariosPage";

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
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
