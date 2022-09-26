import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import { useState, useEffect } from "react";

import Context from "./Context";

export default function App() {

  const [fotos, setFotos] = useState([]);
  const sharedFotos = {fotos, setFotos};

  
  const getFotos = async () => {
    const endpoint = "/fotos.json";
    const response = await fetch(endpoint) //promesa, conexión con el enpoint
    const data = await response.json()
    // se crea una variable con las fotos ya filtradas y seleccionado las propiedades que se utilizaran en galeria
    let dataPhotos = data.photos.map((e) => ({
      id: e.id,
      src: e.src.tiny,
      alt: e.alt,
      favorite: e.liked
  }));
    setFotos(dataPhotos)
    
    console.log(dataPhotos)
    
  };
  
  useEffect(() => { 
    getFotos();

  }, []);

  
  return (
    <div className="App">
      <Context.Provider value={sharedFotos}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

