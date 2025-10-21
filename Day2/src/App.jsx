import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (todo.trim() === "") return;
    setTodos((t) => [...t, todo]);
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
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-8 mt-6">📝 Todo App</h1>

      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-6">
        {/* Input box */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter Todo"
            className="flex-grow p-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {edit ? (
            <button
              onClick={updateTodo}
              className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-white font-semibold transition"
            >
              Update
            </button>
          ) : (
            <button
              onClick={addTodo}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white font-semibold transition"
            >
              Add
            </button>
          )}
        </div>

        {/* Todo List */}
        <ul className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-gray-400 text-center">No todos yet 😴</p>
          ) : (
            todos.map((todo, id) => (
              <li
                key={id}
                className="flex items-center justify-between bg-gray-700 px-4 py-2 rounded-lg shadow-md"
              >
                <span className="text-lg">{todo}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setEditTodo(todo, id)}
                    className="bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded-lg text-sm font-semibold transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTodo(id)}
                    className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm font-semibold transition"
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
