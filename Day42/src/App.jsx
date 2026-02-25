import { useState } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function App() {
  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:3000/users")
    return res.data
  }

  const queryClient = useQueryClient()
  const [editingUser, setEditingUser] = useState(null);
  const [name, setName] = useState("")

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  })

  const addUser = async (name) => {
    const res = await axios.post("http://localhost:3000/users", name)
    return res.data
  }
  const deleteUser=async(id)=>{
    const res=await axios.delete(`http://localhost:3000/users/${id}`);
    return res.data
  }

  const updateUser = async ({ id, name }) => {
  const res = await axios.put(`http://localhost:3000/users/${id}`, { name });
  return res.data
}
  const updateMutation=useMutation({
    mutationFn:updateUser,
    onSuccess:()=>{
      queryClient.invalidateQueries(["users"]);
    }
  })
  const deleteMutation=useMutation({
    mutationFn:deleteUser,
    onSuccess:()=>{
      queryClient.invalidateQueries(["users"]);
    },
  });

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    },
  })

  const handleAdd = () => {
    if (!name.trim()) return
    if(editingUser){
      updateMutation.mutate({id:editingUser.id,name})
      setEditingUser(null)
    }
    else{
      mutation.mutate({ name })
    }
    setName("")
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAdd()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono">
      <div className="max-w-xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-3">
            v1.0 — TanStack Query
          </p>
          <h1 className="text-5xl font-black tracking-tight text-white leading-tight">
            User<br />
            <span className="text-violet-500">Management</span>
          </h1>
          <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        </div>

        {/* Status Messages */}
        {isLoading && (
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse flex-shrink-0" />
            Fetching users...
          </div>
        )}

        {isError && (
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm mb-5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse flex-shrink-0" />
            {error.message}
          </div>
        )}

        {/* Add User Form */}
        <div className="flex gap-3 mb-10">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none">›</span>
            <input
              type="text"
              value={name}
              placeholder="Enter name..."
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-9 pr-4 py-3.5 text-sm text-gray-100 placeholder-gray-600 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            />
          </div>
          <button
            onClick={handleAdd}
            disabled={mutation.isPending || !name.trim()}
            className="bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-sm px-5 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/30 active:scale-95 whitespace-nowrap"
          >
            {editingUser ? updateMutation.isPending ? "Updating..." : "Update User" : mutation.isPending ? "Adding..." : "Add User"}
          </button>
        </div>

        {/* User List */}
        {data && data.length > 0 ? (
          <>
            <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">All Users</p>
            <div className="flex flex-col gap-2">
              {data.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between bg-gray-900 border border-gray-800 hover:border-gray-700 rounded-xl px-5 py-4 transition-all"
                >
                  {/* Avatar + Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {user.name?.[0]?.toUpperCase() ?? '?'}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-100 text-sm">{user.name}</p>
                      <p className="text-xs text-gray-600 mt-0.5">#{user.id}</p>
                    </div>
                  </div>

                  {/* Action Buttons — wire up PUT/DELETE handlers here */}
                  <div className="flex gap-2">
                    <button
                      title="Edit"
                      onClick={()=>{setEditingUser(user);setName(user.name)}}
                      className="w-8 h-8 rounded-lg border border-gray-700 text-gray-500 flex items-center justify-center text-sm transition-all hover:border-violet-500 hover:text-violet-400 hover:bg-violet-500/10"
                    >
                      ✎
                    </button>
                    <button
                      title="Delete"
                      className="w-8 h-8 rounded-lg border border-gray-700 text-gray-500 flex items-center justify-center text-sm transition-all hover:border-red-500 hover:text-red-400 hover:bg-red-500/10"
                      onClick={()=>deleteMutation.mutate(user.id)}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-right text-xs text-gray-600 mt-5">
              <span className="text-violet-400 font-medium">{data.length}</span>{' '}
              user{data.length !== 1 ? 's' : ''} total
            </p>
          </>
        ) : (
          !isLoading && (
            <div className="text-center py-16 text-gray-600 text-sm">
              No users yet — add one above
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default App