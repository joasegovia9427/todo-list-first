import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const defaultTodos = [
    { text: "To buy water", completed: true },
    { text: "To buy bread", completed: false },
    { text: "Buy milk", completed: false },
];

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage("TODOS_V3", []);
    const [searchValue, setSearchValue] = React.useState("");

    const completedTodos = todos.filter((todo) => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        // searchedTodos = todos.filter((todo) =>
        //     todo.text.toLowerCase().includes(searchValue.toLowerCase())
        // );

        searchedTodos = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    return (
        <TodoContext.Provider
            value={{
                loading,
                error,
                totalTodos,
                completedTodos,
                searchValue,
                setSearchValue,
                searchedTodos,
                completeTodo,
                deleteTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
