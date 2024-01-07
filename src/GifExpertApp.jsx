import { useState } from "react";
// Esto es posible gracias al archivo de barril (index.js) que exporta esos dos archivos
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  // Siempre que se desee cambiar parte del contenido del HTML de forma dinámica, se debe pensar en el estado interno del componente
  // Los hooks en React jamás deben condicionarse
  const [categories, setCategories] = useState([]);

  // Función encargada de actualizar el estado referente al listado de categorías
  const onAddCategory = (newCategory) => {
    // validar que la nueva categoría no se encuentre previamente en el arreglo
    // if (categories.includes(newCategory)) return;

    // Busqueda estricta para localizar categorías repetidas en el arreglo, aunque estén declaradas en mayúsculas o mionúsculas
    const coincidencias = categories.filter(
      (category, index) =>
        category.trim().toLowerCase() == newCategory.toLowerCase()
    );
    if (coincidencias.length > 0) return;

    // Crear un nuevo estado conservando la información actual, evitando mutar el arreglo con el operador spreed
    setCategories([newCategory, ...categories]);
  };
  return (
    <>
      {/* Titulo de la aplicación */}
      <h1>Gif Expert App</h1>

      {/* Buscador de Gifs */}
      {/* El componente GifExpertApp es el encargado de gestionar el estado referente al listado de categorías, en este sentido, sabe como guardar la información. Por tanto, pasa la función encargada de realizar dicha tarea al componente AddCategory a través de una prop que es considerada como un evento personalizado. De esta forma ambos componentes se encuentran comunicados entre si, uno permite escribir la nueva categoría y el otro se encarga de almacenarla en el estado */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* Listado de Gifs relacionados con la búsqueda */}

      {/* 
        Iterar el contenido de nuestro estado de categorías e imprimirlas en pantalla.
        Es importante que para cada elemento, se le asigne un key, el cuál sirve como variable de control para que React tenga conocimiento que elemento entra y se destruye
        React recomienda no usar el index que nos ofrece el map por cada elemento iterado como key, ya que al salir o eliminar un elemento de ese arreglo los indices de los elmentos se ajustan en -1, lo que puede llevar a errores al momento de renderizar el componente (si se elimina el elemento con índice 0, este sale, pero el elemento que tenía índice 1 ahora pasa a ser 0) 
        */}
      {categories.map((category, index) => (
        // Usar el componente encargado de mostrar el titular de categoría y su respectivo grid de gifs
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
