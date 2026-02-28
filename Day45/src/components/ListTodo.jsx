import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Slice/todoSlice';

const ListTodo = () => {
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <div className="bg-zinc-950 flex items-start justify-center p-6 pt-12">
            <div className="w-full max-w-lg">
                {/* Header */}
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-mono tracking-[0.3em] text-amber-400 uppercase mb-2">
                            Your Tasks
                        </p>
                        <h1 className="text-4xl font-black text-white tracking-tight leading-none">
                            Todo<br />
                            <span className="text-amber-400">List.</span>
                        </h1>
                    </div>
                    <div className="text-right">
                        <span className="text-5xl font-black text-zinc-800 leading-none">
                            {todos.length}
                        </span>
                        <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">
                            {todos.length === 1 ? 'task' : 'tasks'}
                        </p>
                    </div>
                </div>

                {/* List */}
                {todos.length === 0 ? (
                    <div className="border border-dashed border-zinc-800 rounded-xl p-10 text-center">
                        <p className="text-zinc-600 font-mono text-sm">No tasks yet.</p>
                        <p className="text-zinc-700 font-mono text-xs mt-1">Add one above to get started.</p>
                    </div>
                ) : (
                    <ul className="space-y-2">
                        {todos.map((todo, index) => (
                            <li
                                key={todo.id}
                                className="group flex items-center justify-between gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-5 py-4 hover:border-zinc-600 transition-all duration-200"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <span className="text-xs font-mono text-zinc-600 shrink-0 w-5 text-right">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-white text-sm font-medium truncate">
                                        {todo.text}
                                    </span>
                                </div>
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="shrink-0 w-8 h-8 flex items-center justify-center rounded-lg text-zinc-600 hover:bg-red-500/10 hover:text-red-400 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                    aria-label="Remove todo"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M3 6h18M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2"/>
                                    </svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Footer */}
                {todos.length > 0 && (
                    <p className="mt-4 text-xs font-mono text-zinc-700 text-center">
                        Hover a task to reveal the remove button
                    </p>
                )}
            </div>
        </div>
    )
}

export default ListTodo