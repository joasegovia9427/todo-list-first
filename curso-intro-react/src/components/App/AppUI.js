import React from "react";
import { TodoContext } from "../../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoForm } from "../TodoForm";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";
import "./App.css";

function AppUI() {
    // Desesctructuramos los valores de nuestro contexto
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Mmm, there was an error...</p>}
                {loading && <p>Loading, hang on...</p>}
                <div className="loading-image">
                    {loading && (
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/assests/images/load.gif"
                            }
                            alt="loading"
                        ></img>
                    )}
                </div>
                {!loading && !searchedTodos.length && !searchValue && (
                    <p>¡Add your first ToDo!</p>
                )}
                {!searchedTodos.length && searchValue && (
                    <p>Nothing found, try other word</p>
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

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />
        </React.Fragment>
    );
}

export { AppUI };
