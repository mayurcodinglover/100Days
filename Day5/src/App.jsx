import { useState } from 'react'
import {SketchPicker} from "react-color";
import {hexToRgb,hexToHsl} from "colors-convert";

function App() {
  const [tab, setTab] = useState("solid");
  const [color, setColor] = useState("#ff0000");
  const [color1, setColor1] = useState("#000000");
  const [color2, setColor2] = useState("#a5c0bb");
  const [showPicker1, setshowPicker1] = useState(false);
  const [showPicker2, setshowPicker2] = useState(false);
  const [GradientDirection, setGradientDirection] = useState("to right");
  const [showpicker, setShowPicker] = useState(false);
  const cleanHex = color.length === 9 ? color.slice(0, 7) : color;
  const rgbValue=`rgb(${hexToRgb(cleanHex).r},${hexToRgb(cleanHex).g},${hexToRgb(cleanHex).b})`
  const hslValue=`hsl(${hexToHsl(cleanHex).h},${hexToHsl(cleanHex).s}%,${hexToHsl(cleanHex).l}%)`
  const [copiedType, setcopiedType] = useState("");

  const gradientvalue=`linear-gradient(${GradientDirection}, ${color1}, ${color2})`

  const copyToClipboard=(value,text)=>{
    navigator.clipboard.writeText(value);
    setcopiedType(text);
    setTimeout(() => {
      setcopiedType("")
    }, 2000);
  }

  const presetColors = [
    '#e40f0f',
    '#2ce0e0',
    '#0d21d6',
    '#a4b608',
    '#e90c94',
  ];
  const presetGradientColors = [
    {direction:"to right",c1:"#ff7f50",c2:"#ff1493"},
    { direction: "to bottom", c1: "#6a11cb", c2: "#2575fc" },
    { direction: "45deg", c1: "#f7971e", c2: "#ffd200" },
    { direction: "135deg", c1: "#00c6ff", c2: "#0072ff" },
    { direction: "to left", c1: "#11998e", c2: "#38ef7d" }, 
  ];

  const directionOptions = [
    { value: "to right", label: "To Right" },
    { value: "to left", label: "To Left" },
    { value: "to bottom", label: "To Bottom" },
    { value: "to top", label: "To Top" },
    { value: "45deg", label: "Diagonal (45°)" },
    { value: "135deg", label: "Diagonal (135°)" },
    { value: "225deg", label: "Diagonal (225°)" },
    { value: "315deg", label: "Diagonal (315°)" },
  ];

  return (
    <div className='flex justify-center items-center min-h-screen transition-colors duration-500 p-4' style={{background:tab==="solid" ? color:gradientvalue}}>
      <div className='bg-white rounded-3xl shadow-2xl p-6 max-w-4xl w-full h-fit'>
        {/* Header */}
        <div className='text-center mb-6'>
          <h1 className='text-3xl font-bold text-gray-800 mb-1'>Color Studio</h1>
          <p className='text-gray-500 text-sm'>Create beautiful colors and gradients</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-2 mb-6 bg-gray-100 p-1.5 rounded-xl max-w-md mx-auto">
          <button 
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
              tab === 'solid' 
                ? 'bg-white text-gray-800 shadow-md' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setTab('solid')}
          >
            Solid Color
          </button>
          <button 
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
              tab === 'gradient' 
                ? 'bg-white text-gray-800 shadow-md' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setTab('gradient')}
          >
            Gradient
          </button>
        </div>

        {/* Main Content */}
        {tab === "solid" ? (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-start'>
            {/* Left Column - Color Picker */}
            <div className='flex flex-col items-center gap-5'>
              {/* Main Color Display */}
              <div className='relative'>
                <button 
                  className='h-30 w-30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-4 border-white ring-2 ring-gray-200' 
                  style={{backgroundColor:color}}  
                  onClick={()=>setShowPicker(!showpicker)}
                >
                  <span className='sr-only'>Pick a color</span>
                </button>
                
                {showpicker && (
                  <>
                    <div 
                      className='fixed inset-0 z-10' 
                      onClick={() => setShowPicker(false)}
                    />
                    <div className='absolute z-20 mt-4 left-1/2 transform -translate-x-1/2'>
                      <SketchPicker 
                        color={color} 
                        onChange={(newcolor)=>setColor(newcolor.hex)}
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Current Color Value Display */}
              <div className='bg-gray-50 px-6 py-2.5 rounded-xl border-2 border-gray-200'>
                <span className='text-xl font-mono font-semibold text-gray-700'>{cleanHex}</span>
              </div>

              {/* Preset Colors */}
              <div className='w-full'>
                <p className='text-xs font-medium text-gray-500 mb-3 text-center uppercase tracking-wide'>Quick Presets</p>
                <div className='flex justify-center items-center gap-3'>
                  {presetColors.map((presetColor) => (
                    <button 
                      key={presetColor}
                      className='h-12 w-12 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border-2 border-white ring-2 ring-gray-200' 
                      style={{backgroundColor: presetColor}}
                      onClick={()=>setColor(presetColor)}
                      title={presetColor}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Color Values */}
            <div className='bg-gray-50 p-5 rounded-2xl border-2 border-gray-200 h-full flex flex-col'>
              <h3 className='text-sm font-bold text-gray-700 mb-4 uppercase tracking-wide'>Color Values</h3>
              
              <div className='flex-1 flex flex-col justify-center gap-5'>
                {/* HEX */}
                <div className='flex justify-between items-center pb-5 border-b border-gray-300'>
                  <div className='flex-1'>
                    <span className='text-xs font-semibold text-gray-500 block mb-1.5'>HEX</span>
                    <span className='font-mono text-base text-gray-800'>{cleanHex}</span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(cleanHex, 'hex')}
                    className={`ml-3 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      copiedType === 'hex' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {copiedType === 'hex' ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                
                {/* RGB */}
                <div className='flex justify-between items-center pb-5 border-b border-gray-300'>
                  <div className='flex-1'>
                    <span className='text-xs font-semibold text-gray-500 block mb-1.5'>RGB</span>
                    <span className='font-mono text-base text-gray-800'>{rgbValue}</span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(rgbValue, 'rgb')}
                    className={`ml-3 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      copiedType === 'rgb' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {copiedType === 'rgb' ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
                
                {/* HSL */}
                <div className='flex justify-between items-center'>
                  <div className='flex-1'>
                    <span className='text-xs font-semibold text-gray-500 block mb-1.5'>HSL</span>
                    <span className='font-mono text-base text-gray-800'>{hslValue}</span>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(hslValue, 'hsl')}
                    className={`ml-3 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                      copiedType === 'hsl' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {copiedType === 'hsl' ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='space-y-6'>
            {/* Color Pickers */}
            <div className='flex justify-center items-center gap-8'>
              <div className='flex flex-col items-center gap-3'>
                <div className='relative'>
                  <button 
                    className='h-24 w-24 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-4 border-white ring-2 ring-gray-200 cursor-pointer' 
                    style={{backgroundColor:color1}} 
                    onClick={()=>setshowPicker1(!showPicker1)}
                  >
                    <span className='sr-only'>Pick first color</span>
                  </button>
                  {showPicker1 && (
                    <>
                      <div 
                        className='fixed inset-0 z-10' 
                        onClick={() => setshowPicker1(false)}
                      />
                      <div className='absolute z-20 mt-4 left-1/2 transform -translate-x-1/2'>
                        <SketchPicker 
                          color={color1} 
                          onChange={(newcolor)=>setColor1(newcolor.hex)}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className='bg-gray-50 px-4 py-2 rounded-lg border-2 border-gray-200'>
                  <span className='font-mono text-sm font-semibold text-gray-700'>{color1}</span>
                </div>
              </div>

              <div className='flex flex-col items-center gap-3'>
                <div className='relative'>
                  <button 
                    className='h-24 w-24 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-4 border-white ring-2 ring-gray-200 cursor-pointer' 
                    style={{backgroundColor:color2}} 
                    onClick={()=>setshowPicker2(!showPicker2)}
                  >
                    <span className='sr-only'>Pick second color</span>
                  </button>
                  {showPicker2 && (
                    <>
                      <div 
                        className='fixed inset-0 z-10' 
                        onClick={() => setshowPicker2(false)}
                      />
                      <div className='absolute z-20 mt-4 left-1/2 transform -translate-x-1/2'>
                        <SketchPicker 
                          color={color2} 
                          onChange={(newcolor)=>setColor2(newcolor.hex)}
                        />
                      </div>
                    </>
                  )}
                </div>
                <div className='bg-gray-50 px-4 py-2 rounded-lg border-2 border-gray-200'>
                  <span className='font-mono text-sm font-semibold text-gray-700'>{color2}</span>
                </div>
              </div>
            </div>

            {/* Direction Selector */}
            <div className='max-w-md mx-auto'>
              <label className='text-xs font-medium text-gray-500 mb-3 block uppercase tracking-wide'>Gradient Direction</label>
              <select 
                value={GradientDirection}
                onChange={(e)=>setGradientDirection(e.target.value)}
                className='w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all cursor-pointer'
              >
                {directionOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Preset Gradients */}
            <div>
              <p className='text-xs font-medium text-gray-500 mb-3 text-center uppercase tracking-wide'>Quick Presets</p>
              <div className='flex justify-center items-center gap-3 flex-wrap'>
                {presetGradientColors.map((g, index) => (
                  <button 
                    key={index}
                    className='h-16 w-16 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 border-2 border-white ring-2 ring-gray-200 cursor-pointer' 
                    style={{background:`linear-gradient(${g.direction},${g.c1},${g.c2})`}} 
                    onClick={() => {
                      setColor1(g.c1);
                      setColor2(g.c2);
                      setGradientDirection(g.direction);
                    }}
                    title={`${g.c1} → ${g.c2}`}
                  />
                ))}
              </div>
            </div>

            {/* CSS Output */}
            <div className='bg-gray-50 p-5 rounded-2xl border-2 border-gray-200'>
              <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3'>
                <div className='flex-1 min-w-0'>
                  <span className='text-xs font-semibold text-gray-500 block mb-2'>CSS</span>
                  <span className='font-mono text-sm text-gray-800 break-all'>{gradientvalue}</span>
                </div>
                <button 
                  onClick={() => copyToClipboard(gradientvalue, 'gradient')}
                  className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    copiedType === 'gradient' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {copiedType === 'gradient' ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App