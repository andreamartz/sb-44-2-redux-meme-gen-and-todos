/** TodosContainer component
 * 
 * Purpose: to hold all the todos
 * 
 * 
 */

import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import "./TodosContainer.css";

function TodosContainer({ removeTodo }) {
  const todos = useSelector(store => store.todos);
  return (
    <div className="TodosContainer">
      <ul className="TodosContainer-list">
        {todos.map(todo => (
          <Todo 
            key={todo.id}
            id={todo.id}
            task={todo.task}
            removeTodo={() => removeTodo(todo.id)}
          />
        ))}
      </ul>

    </div>
  );
}

export default TodosContainer;