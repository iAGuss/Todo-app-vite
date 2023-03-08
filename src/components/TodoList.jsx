import React from "react";

import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, updateTodos }) {
  return (
    <div className="mt-8 rounded-t-md bg-white ">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          updateTodos={updateTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;
