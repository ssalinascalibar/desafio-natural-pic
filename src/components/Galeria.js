import "../assets/css/galeria.css";
import Heart from "./Heart";

import Context from "../Context";
import { useContext } from "react";

export default function Galeria() {

  const { fotos, setFotos } = useContext(Context);

  // esta función recibe el id de cada elemento y actuliza la propiedad liked a true si es que se marca cada foto
  const addFavorites = (id) => {
    //se busca por indice y se compara id de cada elemento foto con el id seleccionado en el onClick
    const index = fotos.findIndex((foto) => foto.id === id);
    fotos[index].liked = !fotos[index].liked; // ya obtenido el nº de indice [index] del arreglo fotos, se transforma .liked a true, ya que el original es false
    setFotos([...fotos]); // se actualiza el array de fotos con los cambios realizado a un nuevo array de fotos
  }
  

  return (
    <div className="galeria grid-columns-5 p-3">
      {fotos.map((foto) => ( 
        <div className="foto" key={foto.id} onClick={() => addFavorites(foto.id)}> {/* addFavorites recibe el id del elemento, en este caso de cada foto iterada*/}
          <div className="heart">
            <Heart filled={foto.liked}/> {/*propts de Heart filled*/}
          </div>
          <img src={foto.src} alt={foto.alt} />
          <div className="text">
            <p>{foto.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
