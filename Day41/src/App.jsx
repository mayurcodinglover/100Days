import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function App() {
  const [userid, setuserid] = useState(0);
  const fetchUsers= async (id) => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      return res.data
    }
  const { data, isLoading, error, refetch, isFetching, isSuccess, isError } = useQuery({
    queryKey: ['users',userid],
    queryFn: () => fetchUsers(userid),
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
    enabled:!!userid
  })
  console.log(data);
  

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-mono px-6 py-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-zinc-500">Live Data</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">
          Tanstack Query
          <span className="text-emerald-400"> Demo</span>
        </h1>
        <p className="text-zinc-500 text-sm mt-2">Fetching from jsonplaceholder.typicode.com</p>
      </div>

      <div className="max-w-3xl mx-auto">

        {/* Loading State */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-10 h-10 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-zinc-400 text-sm tracking-widest uppercase">Fetching users...</p>
          </div>
        )}

        {/* Error State */}
        {isError && (
          <div className="border border-red-500/30 bg-red-950/20 rounded-xl px-6 py-5 flex items-start gap-4">
            <div className="mt-0.5 w-5 h-5 rounded-full border border-red-500 flex items-center justify-center shrink-0">
              <span className="text-red-400 text-xs font-bold">!</span>
            </div>
            <div>
              <p className="text-red-400 font-semibold text-sm">Request Failed</p>
              <p className="text-red-300/70 text-sm mt-0.5">{error.message}</p>
            </div>
          </div>
        )}

        {/* Refetching overlay indicator */}
        {isFetching && !isLoading && (
          <div className="flex items-center gap-2 mb-4 text-xs text-emerald-400/70 uppercase tracking-widest">
            <div className="w-3 h-3 border border-emerald-400 border-t-transparent rounded-full animate-spin" />
            Refreshing...
          </div>
        )}

        {/* User Cards Grid */}
        {isSuccess && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {/* Single User Card */}
{isSuccess && (
  <div className="border border-zinc-800 bg-zinc-900 rounded-xl p-5 mb-8">
    <div className="flex items-start justify-between mb-3">
      <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
        {data.name.charAt(0)}
      </div>
      <span className="text-zinc-700 text-xs tabular-nums">#{data.id}</span>
    </div>
    <p className="text-white font-semibold text-sm">{data.name}</p>
    <p className="text-emerald-400/80 text-xs mt-1">{data.email}</p>
    <p className="text-zinc-500 text-xs mt-1">{data.phone}</p>
    <div className="mt-3 pt-3 border-t border-zinc-800">
      <span className="text-zinc-600 text-xs">{data.company?.name}</span>
    </div>
  </div>
)}
          </div>
        )}

        {/* Refetch Button */}
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="w-full sm:w-auto px-8 py-3 bg-emerald-400 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-emerald-300 active:scale-95 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100"
        >
          {isFetching ? 'Fetching...' : '↺ Refetch'}
        </button>
        <button onClick={()=>setuserid(prev=>prev+1)} className="w-full sm:w-auto mt-3 px-8 py-3 bg-emerald-400 text-zinc-950 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-emerald-300 active:scale-95 transition-all duration-150">
          Fetch By Id
        </button>
      </div>
    </div>
  )
}

export default App