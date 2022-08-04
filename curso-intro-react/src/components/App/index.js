import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../../customHooks/useLocalStorage'

const defaultTodos = [
  {text:"To buy water", completed: true},
  {text:"To buy bread", completed: false},
  {text:"Buy milk", completed: false}
]

function App() {
  // Desestructuramos los datos que retornamos de nuestro custom hook, y le pasamos los argumentos que necesitamos (nombre y estado inicial)
  const [todos, saveTodos] = useLocalStorage('TODOS_V2', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return (
    <AppUI 
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      todos = {todos}
      toggleCompleteTodo = {toggleCompleteTodo}
      deleteTodos = {deleteTodos}
    
    />
    
  );
}

export default App;
