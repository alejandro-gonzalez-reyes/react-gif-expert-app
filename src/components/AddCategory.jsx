import { useState } from "react";
// Componente para agregar una categoría
export const AddCategory = ({ onNewCategory }) => {
  // Estado interno del componente, almacena el valor actual ingresado en la caja de formulario
  const [inputValue, setInputValue] = useState("");

  // función controladora de evento que escucha cuando el input de control de formulario cambia su contenido
  const onInputChange = (event) => {
    // cuando cambia el contenido del input, se actualiza la variable de estado, con la intensión que el control de formulario muestre el valor actualizado
    setInputValue(event.target.value);
  };

  // función controladora de evento submit
  const onSubmit = (event) => {
    // Previene el comportamiento por defecto
    event.preventDefault();

    // Evitar registrar la categoría si la longitud es menor o igual a 1 caracter
    if (inputValue.trim().length <= 1) return;

    // Recupera el estado actual de este componente y lo asigna al estado que hace referencia al arreglo de categorías, declarado en el componente padre.

    // ! Para pasar información de un componente padre a un hijo se hace a través de sus Props (padre a hijo)
    // * Para pasar información de un componente hijo a un padre se hace a través de eventos personalizados, los cuales invocan funciones que le son pasdas al hijo como Props (hijo a padre)

    onNewCategory(inputValue.trim());
    // Actualiza el estado actual seteandolo a una cadena vacía para limpiar la caja de formulario
    setInputValue("");
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
