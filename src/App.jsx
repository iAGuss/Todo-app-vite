// import { useState } from 'react'
import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";
function App() {
  return (
    <div className=" min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <header className=" container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className=" text-3xl font-semibold uppercase tracking-[0.2em] text-white ">
            Todo
          </h1>
          <button>
            <MoonIcon />
          </button>
        </div>
        <form className=" mt-8 flex h-10 items-center gap-4 overflow-hidden rounded-md bg-white px-4">
          <span className="inline-block h-5 w-5 rounded-full border-2 "></span>
          <input
            className="w-full text-gray-500 outline-none"
            type="text"
            placeholder="Crate a new todo"
          />
        </form>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <div className="rounded-md bg-white ">
          <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 "></button>
            <p className="grow text-gray-600">
              complete online Javascript Course
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>

          <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 "></button>
            <p className="grow text-gray-600">
              complete online Javascript Course
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
          <article className="flex gap-4 border-b-2 border-b-gray-400 px-4 py-4">
            <button className="inline-block h-5 w-5 rounded-full border-2 "></button>
            <p className="grow text-gray-600">
              complete online Javascript Course
            </p>
            <button>
              <CrossIcon />
            </button>
          </article>
        </div>
        <section className="flex justify-between py-4 px-4">
          <span className="text-gray-400">5 items left</span>
          <button className="text-gray-400">Clear Completed</button>
        </section>
        <section className="container mx-auto mt-8 px-4">
          <div className="flex justify-center gap-4  rounded-md bg-white p-4  ">
            <button className="hover:text-blue-600">ALL</button>
            <button>Active</button>
            <button>Complete</button>
          </div>
        </section>
        <section className=" mt-8 text-center">
          Drag and drop to reorder list
        </section>
      </main>
    </div>
  );
}

export default App;
