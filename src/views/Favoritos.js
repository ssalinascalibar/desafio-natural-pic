import { useContext } from "react";
import Context from '../Context';

import  "../assets/css/favoritos.css"

export default function Favoritos() {
  const {fotos, setFotos} = useContext(Context);

  const removeFavorito = (id) => {
    const index = fotos.findIndex((foto) => foto.id === id);
    fotos[index].liked = !fotos[index].liked;
    setFotos([...fotos]);
  };  
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
        {/* .filter filtra todos lo elementos iguales a foto.liked === true y los devuelve acá en favoritos*/}
        {/* y luego .map para recoger e imprimir este nuevo array pero solo los elementos true ya filtrados*/}
        {/* tambien se puede escribir como((foto) => foto.liked === true)*/}
        {fotos.filter((foto) => foto.liked).map((foto) => (      
          <div className="foto" key={foto.id} onClick={() => removeFavorito(foto.id)} >
          <img src={foto.src} alt={foto.alt} />
          <div className="text">
            <p>{foto.alt}</p>
          </div>
      </div>
      ))}
    </div>
    </div>
  );
}
