import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [draggedTodo, setDraggedTodo] = useState(null);
   
  const addTodo = () => {
    if (todo.trim()) {
      setTodos((t) => ([...t, { id: Date.now(), name: todo, status: "pending" }]));
      setTodo("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const handleDrop = (newStatus) => {
    if (!draggedTodo) return;
    setTodos((prev) => prev.map((t) => t.id === draggedTodo.id ? { ...t, status: newStatus } : t));
    setDraggedTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const columns = [
    { status: "pending", title: "📋 To Do", color: "from-amber-400 to-orange-500", bg: "bg-amber-50", border: "border-amber-200" },
    { status: "process", title: "⚡ In Progress", color: "from-blue-400 to-cyan-500", bg: "bg-blue-50", border: "border-blue-200" },
    { status: "done", title: "✅ Done", color: "from-emerald-400 to-green-500", bg: "bg-emerald-50", border: "border-emerald-200" }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Task Board
          </h1>
          <p className="text-gray-600 text-lg">Organize your tasks with drag & drop</p>
        </div>

        {/* Input Section */}
        <div className="mb-10 flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-2xl border border-gray-100">
            <div className="flex gap-3">
              <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Add a new task..."
                className="flex-1 px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all"
              />
              <button
                onClick={addTodo}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((column) => {
            const columnTodos = todos.filter((t) => t.status === column.status);
            return (
              <div
                key={column.status}
                className={`${column.bg} rounded-2xl shadow-lg border-2 ${column.border} transition-all duration-300 ${draggedTodo ? 'ring-4 ring-purple-200' : ''}`}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => handleDrop(column.status)}
              >
                {/* Column Header */}
                <div className={`bg-gradient-to-r ${column.color} p-5 rounded-t-2xl`}>
                  <h3 className="text-xl font-bold text-white flex items-center justify-between">
                    <span>{column.title}</span>
                    <span className="bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                      {columnTodos.length}
                    </span>
                  </h3>
                </div>

                {/* Tasks Container */}
                <div className="p-4 space-y-3 min-h-[400px]">
                  {columnTodos.length === 0 ? (
                    <div className="text-center text-gray-400 py-16">
                      <p className="text-lg">No tasks yet</p>
                      <p className="text-sm mt-2">Drag tasks here</p>
                    </div>
                  ) : (
                    columnTodos.map((todo) => (
                      <div
                        key={todo.id}
                        draggable
                        onDragStart={() => setDraggedTodo(todo)}
                        className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl cursor-move border-2 border-gray-100 hover:border-purple-300 transition-all duration-200 group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-gray-800 flex-1 break-words leading-relaxed">
                            {todo.name}
                          </p>
                          <button
                            onClick={() => deleteTodo(todo.id)}
                            className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg p-2 transition-all duration-200 flex-shrink-0"
                            title="Delete task"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Footer */}
        <div className="mt-10 text-center">
          <div className="inline-flex gap-8 bg-white/70 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
            <div>
              <p className="text-gray-600 text-sm">Total Tasks</p>
              <p className="text-2xl font-bold text-gray-800">{todos.length}</p>
            </div>
            <div className="border-l border-gray-300"></div>
            <div>
              <p className="text-gray-600 text-sm">Completed</p>
              <p className="text-2xl font-bold text-emerald-600">
                {todos.filter(t => t.status === "done").length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;