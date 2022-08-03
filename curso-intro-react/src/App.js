/* import './App.css'; */
import React from 'react';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

const todos = [
  {text:"To buy water", completed: true},
  {text:"To buy bread", completed: false},
  {text:"Buy milk", completed: false}
]

function App() {
  return (
    <React.Fragment>
        <TodoCounter/>
        
        <TodoSearch/>
        
        <TodoList>
          {todos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} 
            />
          ))}
        </TodoList>

        <CreateTodoButton/>
      
    </React.Fragment>
  );
}

export default App;
