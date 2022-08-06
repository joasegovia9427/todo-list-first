import React from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoForm.css";

var showMsg = false;

function TodoForm() {
    const btn = document.getElementById("addButton");

    // Creamos un estado para nuestro nuevo TODO
    const [newTodoValue, setNewTodoValue] = React.useState("");
    // Desestructuramos las funciones que necesitamos para añadir un TODO y cerrar nuestro modal
    const { addTodo, setOpenModal } = React.useContext(TodoContext);

    // Creamos una función para actualizar el estado de nuestro nuevo TODO
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    // Función para cerrar el modal
    const onCancel = () => {
        btn.className = "CreateTodoButton";
        showMsg = false;
        setOpenModal(false);
    };

    // Función para agregar nuestro nuevo TODO
    const onSubmit = (event) => {
        // prevent default para evitar recargar la página
        event.preventDefault();

        if (newTodoValue) {
            showMsg = false;
            // Utilizamos nuestra función para añadir nuestro TODO
            addTodo(newTodoValue);
            btn.className = "CreateTodoButton";
            // Cerramos nustro modal
            setOpenModal(false);
            // También estaría bien resetear nuestro formulario
            setNewTodoValue("");
        } else {
            showMsg = true;
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Type your new TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Take next course ;)"
            />
            {showMsg && (
                <p className="msg-text">
                    To click add, you need to type something
                </p>
            )}

            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
