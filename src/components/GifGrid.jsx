// import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  /*
  // Estado local para almacenar el listado de gifs referentes a la categoría seleccionada
  const [gifs, setGifs] = useState([]);

  // Invocar el helper para recuperar el listado de gifs referetnes a una categoría
  // El helper retorna una promesa, por tanto, si deseamos usar asyn/await lo debemos hacer fuera del hook useState (como una función aparte). En caso contrario estamos obligados a usar then()
  const getImages = async () => {
    // Solicitar los gifs relacionados con la categoría solictada haciendo uso del helper
    const newImages = await getGifs(category);
    // almacenar el listado en el estado interno de este componente
    setGifs(newImages);
  };

  // Disparar un efecto secundario solo cuando el componente se crea la primera vez
  // Para ello se hace uso de Hook useEfect
  // este hook espera recibir una función, mas no un objeto devuelto como promesa, por eso es que no se debe usar async. Si la tarea involucra promesas, se debe hacer uso de then()
  useEffect(() => {
    // getGifs(category).then(misImagenes => setGifs(misImagenes))
    getImages();
    // El arreglo de dependencias vacío, indica que este efecto secundario solo se ejecuta la primera vez que se crea el componente, cualquier otro cambio de estado que force su renderización, no provocará que se vuelva a invocar dicha función,
  }, []);
  */

  // Invocar mi Custom Hook para recuperar los gifs asociados a la categoría seleccionada, así como saber si la petición HTTP está en progreso o finalizada
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <section>
      <h3>{category}</h3>
      {/* className es usado para asociar una clase de CSS a un elemento de JSX, No podemos user class directamente ya que es una palabra reservada de JS */}
      <div className="card-grid">
        {/* 
        Mostrar cada una de las imágenes encontradas mediante el componente GifItem
        Desestructuramos el objeto de imagen localizado {...image}, para que cada una de sus propiedades pasen como props independientes al componente: id, title, url
        */}
        {gifs.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};
