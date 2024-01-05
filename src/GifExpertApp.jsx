import { useState } from "react";

export const GifExpertApp = () => {
  // Siempre que se desee cambiar parte del contenido del HTML de forma dinámica, se debe pensar en el estado interno del componente
  // Los hooks en React jamás deben condicionarse
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Pokemon",
    "Super Campeones",
  ]);
  return (
    <>
      {/* Titulo de la aplicación */}
      <h1>Gif Expert App</h1>

      {/* Buscador de Gifs */}

      {/* Listado de Gifs relacionados con la búsqueda */}
      <ol>
        {/* 
        Iterar el contenido de nuestro estado de categorías e imprimirlas en pantalla.
        Es importante que para cada elemento, se le asigne un key, el cuál sirve como variable de control para que React tenga conocimiento que elemento entra y se destruye en el componente
        */}
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
