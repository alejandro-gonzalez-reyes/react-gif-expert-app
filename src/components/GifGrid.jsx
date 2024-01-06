import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  // Disparar un efecto secundario solo cuando el componente se crea la primera vez
  // Para ello se hace uso de Hook useEfect
  useEffect(() => {
    // Solicitar los gifs relacionados con la categoría solictada haciendo uso del helper
    // El arreglo de dependencias vacío, indica que este efecto secundario solo se ejecuta la primera vez que se crea el componente, cualquier otro cambio de estado que force su renderización, no provocará que se vuelva a invocar dicha función,
    getGifs(category);
  }, []);

  return (
    <section>
      <h3>{category}</h3>
      <div>Contenido del grid referente a esta categoría</div>
    </section>
  );
};
