import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos((prev) => [...prev, todo]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((_, index) => index !== id));
  };

  const setEditTodo = (todo, id) => {
    setEdit(true);
    setTodo(todo);
    setEditIndex(id);
  };

  const updateTodo = () => {
    if (todo.trim() === "") return;
    setTodos((items) =>
      items.map((item, index) => (index === editIndex ? todo : item))
    );
    setTodo("");
    setEdit(false);
    setEditIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
      <h1 className="font-bold text-4xl mb-6 mt-4">📝 Todo App</h1>

      <div className="bg-gray-800 w-full max-w-md rounded-2xl p-6 shadow-xl">
        {/* Input box */}
        <div className="flex items-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Enter Todo.."
            className="flex-grow p-2 rounded-lg bg-gray-700 text-white border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500 font-semibold"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {edit ? (
            <button
              onClick={updateTodo}
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-white font-bold transition"
            >
              Update
            </button>
          ) : (
            <button
              onClick={addTodo}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-bold transition"
            >
              Add
            </button>
          )}
        </div>

        {/* Todo List */}
        <ul className="space-y-3 max-h-[25rem] overflow-y-auto">
          {todos.length === 0 ? (
            <p className="text-gray-400 text-center font-semibold">
              No todos yet 😴
            </p>
          ) : (
            todos.map((todo, id) => (
              <li
                key={id}
                className="flex justify-between items-center bg-gray-700 px-4 py-2 rounded-lg shadow-md"
              >
                <span className="text-lg font-semibold">{todo}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditTodo(todo, id)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-md text-sm font-bold transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(id)}
                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded-md text-sm font-bold transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
