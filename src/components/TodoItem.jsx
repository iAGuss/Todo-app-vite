import React from "react";
import CrossIcon from "./icons/CrossIcon";
import ChekIcon from "./icons/ChekIcon";
function TodoItem({ todo, removeTodo, updateTodos }) {
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
      {/* <button className="inline-block h-5 w-5 rounded-full border-2 ">
        <ChekIcon/>10
      </button> */}
      <button
        className={`h-5 w-5 rounded-full border-2 ${
          completed
            ? "flex  items-center justify-center   bg-gradient-to-r from-blue-700 to-blue-400"
            : "inline-block  "
        }`}
        onClick={() => updateTodos(id)}
      >
        {completed && <ChekIcon />}
      </button>
      <p
        className={`grow  ${
          completed ? "text-gray-400 line-through " : "text-gray-600 "
        }`}
      >
        {title}
      </p>
      <button onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
}

export default TodoItem;
