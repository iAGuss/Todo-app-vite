import React from "react";

import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <div className="mt-8 rounded-t-md bg-white ">
      {todos.map((todo) => (
        <TodoItem key={todo.key} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
