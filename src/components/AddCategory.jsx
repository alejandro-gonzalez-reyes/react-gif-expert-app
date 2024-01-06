import { useState } from "react";
// Componente para agregar una categoría
export const AddCategory = () => {
  // Estado interno del componente, almacena el valor actual ingresado en la caja de formulario
  const [inputValue, setInputValue] = useState("");

  // función controladora de evento que escucha cuando el input de control de formulario cambia su contenido
  const onInputChange = (event) => {
    // cuando cambia el contenido del input, se actualiza la variable de estado, con la intensión que el control de formulario muestre el valor actualizado
    setInputValue(event.target.value);
  };

  // función controladora de evento siubmit, recupera el estado actual
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  return (
    <form onSubmit={onSubmit}>
      {/* 
        Data Binding en React 
        consiste en asignar un valor de estado inicial al control de formulario (value), y escuchar los cambios en el evento onChange asociando una función controladora de eventos para actualizar el estado actual con el nuevo valor
        */}
      <input
        type="text"
        placeholder="Ingrese una categoría"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
