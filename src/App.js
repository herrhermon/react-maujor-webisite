import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import FrontEnd from "./components/FrontEnd";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Rodape from "./components/Rodape";
import  "./index.css"

class App extends Component {
  render() {
    return (
      <>
      <Topo />
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/frontend" element={<FrontEnd />} />
            <Route path="/programacao" element={<Programacao />} />
            <Route path="/design" element={<Design />} />
            <Route path="/catalogo" element ={<Catalogo />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
        <Rodape />
      </>

    );
  }
}

export default App;
