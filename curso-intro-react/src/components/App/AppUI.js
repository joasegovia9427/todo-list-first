import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
/* import './App.css'; */

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    todos,
    toggleCompleteTodo,
    deleteTodos,
}) {
    return (
        <React.Fragment>
            <TodoCounter
            totalTodos = {totalTodos}
            completedTodos = {completedTodos}
            />
            
            <TodoSearch
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
            />
            
            <TodoList>
            {
                todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
                .map(todo => (
                <TodoItem 
                key = {todo.text} 
                text = {todo.text}
                completed = {todo.completed} 
                onComplete = {() => toggleCompleteTodo(todo.text)}
                onDelete = {() => deleteTodos(todo.text)}   
                />
            ))
            
            
            }
            </TodoList>

            <CreateTodoButton/>
        
        </React.Fragment>

    );
}

export { AppUI };