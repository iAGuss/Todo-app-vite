import React from "react";

function TodoFilter({ cambiofiltro, filter }) {
  return (
    <section className="container mx-auto mt-8 ">
      <div className="flex justify-center gap-4  rounded-md bg-white p-4  ">
        <button
          className={`${
            filter === "all"
              ? "text-blue-500 hover:text-blue-900"
              : "text-gray-400 hover:text-blue-400"
          }`}
          onClick={() => cambiofiltro("all")}
        >
          ALL
        </button>
        <button
          className={`${
            filter === "active"
              ? "text-blue-500 hover:text-blue-900"
              : "text-gray-400 hover:text-blue-400"
          }`}
          onClick={() => cambiofiltro("active")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed"
              ? "text-blue-500 hover:text-blue-900"
              : "text-gray-400 hover:text-blue-400"
          }`}
          onClick={() => cambiofiltro("completed")}
        >
          Complete
        </button>
      </div>
    </section>
  );
}

export default TodoFilter;
