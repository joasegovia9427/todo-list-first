import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI() {
    // Desesctructuramos los valores de nuestro contexto
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && (
                    <>
                        <p>Estamos cargando, no desesperes...</p>
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assests/images/load.gif"
                            }
                            alt="loading"
                        ></img>
                    </>
                )}
                {!loading && !searchedTodos.length && !searchValue && (
                    <p>¡Crea tu primer TODO!</p>
                )}

                {searchedTodos.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };
