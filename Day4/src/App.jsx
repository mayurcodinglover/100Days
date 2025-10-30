import { useState } from 'react'

function App() {
  const [string, setString] = useState("")

  const currenttext=(e)=>{
    if(e.target.value==="C")
    {
      setString("");
    }
    else if(e.target.value==="=")
    {
      if(string[string.length-1]==="0" && string[string.length-2]==="/")
      {
        setString("Error");
      }
      else{
        setString(eval(string));
      }
    }
    else{
      if(e.target.value==="+" || e.target.value==="-"|| e.target.value==="*" || e.target.value==="/")
      {
        if(string[string.length-1]=="+" || string[string.length-1]=="-" || string[string.length-1]=="*" || string[string.length-1]=="/")
        {
          return;
        }
      }
      setString((string)=>(string+e.target.value)) ;
    }
    
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        
        <div className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-inner">
          <input 
            type="text" 
            name="display" 
            id="display" 
            className="w-full h-10 bg-transparent text-white text-right text-4xl font-light outline-none px-4" 
            readOnly
            placeholder="0"
            value={string}
          />
        </div>

        <div className="grid grid-cols-5 gap-3">
          {/* Row 1 */}
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" onClick={(e)=>currenttext(e)} value="7">
            7
          </button>
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="8" onClick={(e)=>currenttext(e)}>
            8
          </button>
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="9" onClick={(e)=>currenttext(e)}>
            9
          </button>
          <button className="col-span-2 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white text-2xl font-bold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="C" onClick={(e)=>currenttext(e)}>
            C
          </button>

          {/* Row 2 */}
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="4" onClick={(e)=>currenttext(e)}>
            4
          </button>
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="5" onClick={(e)=>currenttext(e)}>
            5
          </button>
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="6" onClick={(e)=>currenttext(e)}>
            6
          </button>
          <button className="col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-2xl font-bold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="+" onClick={(e)=>currenttext(e)}>
            +
          </button>
          <button className="col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-2xl font-bold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="-" onClick={(e)=>currenttext(e)}>
            -
          </button>

          {/* Row 3 */}
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="1" onClick={(e)=>currenttext(e)}>
            1
          </button>
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="2" onClick={(e)=>currenttext(e)}>
            2
          </button>
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="3" onClick={(e)=>currenttext(e)}>
            3
          </button>
          <button className="col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-2xl font-bold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="*" onClick={(e)=>currenttext(e)}>
            *
          </button>
          <button className="col-span-1 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white text-2xl font-bold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="/" onClick={(e)=>currenttext(e)}>
            /
          </button>

          {/* Row 4 */}
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="0" onClick={(e)=>currenttext(e)}>
            0
          </button>
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="00" onClick={(e)=>currenttext(e)}>
            00
          </button>
          <button className="col-span-1 bg-gradient-to-br from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white text-2xl font-semibold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="." onClick={(e)=>currenttext(e)}>
            .
          </button>
          <button className="col-span-2 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-2xl font-bold rounded-xl h-16 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200" value="=" onClick={(e)=>currenttext(e)}>
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default App