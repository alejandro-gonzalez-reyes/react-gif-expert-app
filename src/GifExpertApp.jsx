import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  // Siempre que se desee cambiar parte del contenido del HTML de forma dinámica, se debe pensar en el estado interno del componente
  // Los hooks en React jamás deben condicionarse
  const [categories, setCategories] = useState([
    "One Punch",
    "Dragon Ball",
    "Pokemon",
    "Super Campeones",
  ]);

  // Función encargada de actualizar el estado referente al listado de categorías
  const onAddCategory = (newCategory) => {
    // Crear un nuevo estado conservando la información actual, evitando mutar el arreglo con el operador spreed
    setCategories([...categories, newCategory]);
  };
  return (
    <>
      {/* Titulo de la aplicación */}
      <h1>Gif Expert App</h1>

      {/* Buscador de Gifs */}
      {/* El componente GifExpertApp es el encargado de gestionar el estado referente al listado de categorías, en este sentido, sabe como guardar la información. Por tanto, pasa la función encargada de realizar dicha tarea al componente AddCategory a través de una prop que es considerada como un evento personalizado. De esta forma ambos componentes se encuentran comunicados entre si, uno permite escribir la nueva categoría y el otro se encarga de almacenarla en el estado */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gifs relacionados con la búsqueda */}
      <ol>
        {/* 
        Iterar el contenido de nuestro estado de categorías e imprimirlas en pantalla.
        Es importante que para cada elemento, se le asigne un key, el cuál sirve como variable de control para que React tenga conocimiento que elemento entra y se destruye en el componente
        */}
        {categories.map((category, index) => (
          <li key={`${category}-${index}`}>{category}</li>
        ))}
      </ol>
    </>
  );
};
