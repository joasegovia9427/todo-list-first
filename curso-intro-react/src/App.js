/* import './App.css'; */
import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const defaultTodos = [
  {text:"To buy water", completed: true},
  {text:"To buy bread", completed: false},
  {text:"Buy milk", completed: false}
]

function App() {
  const [todos, setTodos] =  React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); //useState is a react hook... all that start with use... are hooks

  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
        <TodoCounter
          total = {totalTodos}
          completed = {completedTodos}
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

export default App;
