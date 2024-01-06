import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
  getGifs(category);
  return (
    <section>
      <h3>{category}</h3>
      <div>Contenido del grid referente a esta categoría</div>
    </section>
  );
};
