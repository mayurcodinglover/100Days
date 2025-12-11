import { useState } from 'react'
import { SquarePen, Trash, Plus, Edit3, Save } from 'lucide-react';

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [Notes, setNotes] = useState([]);
  const [state, setState] = useState("add");
  const [id, setId] = useState();

  const handleNote = () => {
    if (!title.trim() || !description.trim()) return;
    
    if (state === "add") {
      setNotes((note) => {
        return [...note, {
          id: crypto.randomUUID(),
          title: title,
          description: description,
          createdAt: new Date().toLocaleDateString()
        }];
      });
    } else {
      setNotes((note) => {
        return (
          note.map((n) => (
            n.id === id ? { ...n, title: title, description: description } : n
          ))
        );
      });
    }
    setTitle("");
    setDescription("");
    setId(0);
    setState("add");
  }

  const handleDelete = (id) => {
    setNotes((notes) => (
      notes.filter((n) => n.id !== id)
    ));
  }

  const handleEdit = (id) => {
    setState("update");
    setId(id);
    const data = Notes.filter((note) => note.id === id);
    setTitle(data[0].title);
    setDescription(data[0].description);
  }

  const handleCancel = () => {
    setTitle("");
    setDescription("");
    setState("add");
    setId(0);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50'>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3'>
            Smart Notes
          </h1>
          <p className='text-gray-600 text-lg'>Capture your thoughts and ideas effortlessly</p>
        </div>

        {/* Input Form */}
        <div className='max-w-2xl mx-auto mb-12'>
          <div className='bg-white rounded-2xl shadow-xl p-8 border border-gray-100'>
            <div className='space-y-5'>
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Title</label>
                <input
                  type="text"
                  placeholder='Enter note title...'
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all'
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              
              <div>
                <label className='block text-sm font-semibold text-gray-700 mb-2'>Description</label>
                <textarea
                  rows="4"
                  className='w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none'
                  placeholder='Write your note description...'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className='flex gap-3 pt-2'>
                <button
                  className='flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2'
                  onClick={handleNote}
                >
                  {state === "add" ? (
                    <>
                      <Plus size={20} />
                      Add Note
                    </>
                  ) : (
                    <>
                      <Save size={20} />
                      Update Note
                    </>
                  )}
                </button>
                
                {state === "update" && (
                  <button
                    className='px-6 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all'
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        {Notes.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {Notes.map((note) => (
              <div
                key={note.id}
                className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1'
              >
                <div className='h-2 bg-gradient-to-r from-purple-500 to-blue-500'></div>
                
                <div className='p-6'>
                  <div className='flex justify-between items-start mb-4'>
                    <h3 className='text-xl font-bold text-gray-800 flex-1 break-words'>
                      {note.title}
                    </h3>
                    <div className='flex gap-2 ml-2'>
                      <button
                        onClick={() => handleEdit(note.id)}
                        className='p-2 hover:bg-blue-100 rounded-lg transition-colors group'
                      >
                        <Edit3 size={18} className='text-blue-600 group-hover:scale-110 transition-transform' />
                      </button>
                      <button
                        onClick={() => handleDelete(note.id)}
                        className='p-2 hover:bg-red-100 rounded-lg transition-colors group'
                      >
                        <Trash size={18} className='text-red-600 group-hover:scale-110 transition-transform' />
                      </button>
                    </div>
                  </div>
                  
                  <p className='text-gray-600 leading-relaxed break-words mb-4'>
                    {note.description}
                  </p>
                  
                  {note.createdAt && (
                    <div className='text-xs text-gray-400 mt-4 pt-4 border-t border-gray-100'>
                      {note.createdAt}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='text-center py-20'>
            <div className='inline-block p-6 bg-white rounded-full shadow-lg mb-4'>
              <Plus size={48} className='text-gray-300' />
            </div>
            <h3 className='text-2xl font-semibold text-gray-400 mb-2'>No notes yet</h3>
            <p className='text-gray-400'>Create your first note to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App