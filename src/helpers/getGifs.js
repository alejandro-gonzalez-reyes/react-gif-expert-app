/**
 * Helper para buscar Gifs por categoría, haciendo uso del servicio Giphy
 *
 * @param String category
 * @returns Array categories
 */
export const getGifs = async (category) => {
  const END_POINT = "https://api.giphy.com/v1/gifs/search";
  const API_KEY = "ayrLEkFLj2aNX3A4oYEiObyiqLJ1MAQp";
  const LIMIT = 10;
  const LANG = "es";

  // Constuir la URL
  const URL = `${END_POINT}?api_key=${API_KEY}&q=${category}&limit=${LIMIT}&lang=${LANG}`;

  // Realizar la petición HTTP
  const request = await fetch(URL);
  const { data } = await request.json();

  // Por cada imagen localizada, generar un objeto personalizado como respuesta a partir de la información de dicha imagen
  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));

  return gifs;
};
