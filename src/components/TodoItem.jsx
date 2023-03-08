import React from "react";
import CrossIcon from "./icons/CrossIcon";
import ChekIcon from "./icons/ChekIcon";
function TodoItem({ todo }) {
  return (
    <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
      {/* <button className="inline-block h-5 w-5 rounded-full border-2 ">
        <ChekIcon/>10
      </button> */}
      <button className="  flex h-5 w-5 items-center justify-center rounded-full border-2 bg-gradient-to-r from-blue-700 to-blue-400">
        <ChekIcon />
      </button>
      <p className="grow text-gray-600">{todo.title}</p>
      <button>
        <CrossIcon />
      </button>
    </article>
  );
}

export default TodoItem;
