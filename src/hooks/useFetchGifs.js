// Un Custom Hook es una simple función de JS que retorna algo.
// Puede retornar un solo valor, un objeto, o un arreglo de valores.
// Los valores se corresponden con el resultado obtenido tras ejecutar cierta tarea definida dentro de la función o hook
// El nombre de un Custom Hook siempre debe empezar con use.. useNombreHookPersonalizado

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Los Custom hooks pueden tener su propio estado interno, así como disparar efectos secundarios. Es decir un Custom Hook puede hacer uso de otros hooks
// Si el estado interno del Custom Hook cambia. Este avisa o forza al componenete que lo usa o invoca, para que se vuelva a reenderizar

// En resumen, un Custom Hook agrupa lógica de negocio que de alguna forma se usa en uno o varios de los componentes de nuestra aplicación. La intensión es hacerlos más sencillos de leer.

export const useFetchGifs = (category) => {
  // Estado interno para almacenar el listado de gifs relacionados con la categoría seleccionada
  const [gifs, setGifs] = useState([]);
  // Estado interno para conocer si la petición HTTP está en progreso o finalizada
  const [isLoading, setIsLoading] = useState(true);

  // Función con tareas asincronas para recuperar los gifs relacionados con la categoría seleccionada mediante el uso de un helper
  const fetchGifs = async () => {
    const images = await getGifs(category);
    // actualizar el estado con las nuevos gifs
    setGifs(images);
    // actualizar el estado indicando que la petición HTTP terminó de recuperar los datos
    setIsLoading(false);
  };

  // Efecto secundario para solicitar los gifs via HTTP solo la primera vez que el componente se crea
  useEffect(() => {
    fetchGifs();
  }, []);

  // retornar los resultados obtenidos tras ejecutar la tarea asociada con este Hook personalizado
  return {
    gifs,
    isLoading,
  };
};
