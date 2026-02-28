import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Slice/todoSlice';

const AddTodo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        dispatch(addTodo(text));
        setText("");
    }

    return (
        <div className="bg-zinc-950 flex items-center justify-center p-6">
            <div className="w-full max-w-lg">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-xs font-mono tracking-[0.3em] text-amber-400 uppercase mb-2">
                        Task Manager
                    </p>
                    <h1 className="text-4xl font-black text-white tracking-tight leading-none">
                        Add a New<br />
                        <span className="text-amber-400">Todo.</span>
                    </h1>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="group">
                    <div className="relative flex items-stretch gap-0 border border-zinc-700 rounded-xl overflow-hidden bg-zinc-900 focus-within:border-amber-400 transition-colors duration-300">
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="What needs to be done?"
                            className="flex-1 bg-transparent px-5 py-4 text-white placeholder-zinc-500 text-sm font-mono outline-none"
                        />
                        <button
                            type="submit"
                            disabled={!text.trim()}
                            className="px-6 py-4 bg-amber-400 text-zinc-950 text-sm font-black tracking-widest uppercase hover:bg-amber-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
                        >
                            Add
                        </button>
                    </div>
                    <p className="mt-3 text-xs text-zinc-600 font-mono pl-1">
                        Press Enter or click Add to save your task
                    </p>
                </form>
            </div>
        </div>
    )
}

export default AddTodo