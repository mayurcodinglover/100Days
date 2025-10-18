import './App.css'
import { useState } from 'react'
function App() {
const [count, setcount] = useState(0);
  return (
    <>
    <div className='flex justify-center items-center w-full min-h-full'>
        <div className='container shadow-2xl w-[40%] rounded-2xl bg-gray-100'>
          <h1 className='mt-2 text-4xl font-bold text-blue-600'>Counter</h1>
          <p className='px-2 py-4 text-gray-700 font-bold'>Interactive Counter Component</p>
          <div className=' px-2 py-4 w-full flex justify-center items-center'>
              <div className='h-30 w-30 rounded-full bg-pink-400 flex justify-center items-center'>
                <p className='text-3xl'>{count}</p>
          </div>
          </div>
          <p className='px-2 py-4 text-gray-700 font-bold'>Current Count</p>
          <div className='flex justify-center items-center gap-6 px-2 py-4'>
              <button   className="px-3 py-3 bg-gradient-to-l from-red-400 to-red-600 text-white font-semibold rounded-xl 
             shadow-lg hover:scale-105 active:scale-90 active:translate-y-1 
             transition-all duration-150 ease-in-out" onClick={()=>setcount(count-1)}>- Decrement</button>
              <button className='px-3 py-3 bg-yellow-200 rounded-xl bg-gradient-to-l from-green-400 to-green-600 font-semibold rounded-xl 
             shadow-lg hover:scale-105 active:scale-90 active:translate-y-1 
             transition-all duration-150 ease-in-out' onClick={()=>setcount(count+1)}>+ Increment</button>
          </div>
          <div className='px-2 py-4 '>
            <button className='w-60 px-2 py-2 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl font-semibold rounded-xl 
             shadow-lg hover:scale-105 active:scale-90 active:translate-y-1 
             transition-all duration-150 ease-in-out' onClick={()=>setcount(0)}>Reset to 0</button>
          </div>
          <div className=' px-2 py-2 flex justify-center items-center'>
              <hr className='w-80 text-gray-300'/>
          </div>
          
          <div className='px-3 py-4 flex justify-around items-center text-gray-600'>
            <p>Status:</p>
            <div className={`font-bold w-10 ${count===0 ? 'text-gray-800' : count > 0 ? 'text-green-800': 'text-red-800'}`}>
                <p>{count==0 ? 'Zero': count>0 ? 'Positive' : 'Nagative'}</p>
            </div>
          </div>


        </div>
    </div>
    
    </>
  )
}

export default App
