import { useState } from "react";
import "./App.css";
import QrCode from "react-qr-code";
import QRCodeGenerator from "qrcode"

function App() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const [level, setLevel] = useState("L");
  const [color, setColor] = useState("");
  const [qrDataUrl, setQrDataUrl] = useState("");

  const handleGenerateQr=async()=>{
    try {
      const url=await QRCodeGenerator.toDataURL(text,{
        width:size,
        margin:2,
        color:{
          dark:color,
          light:"#ffffff"
        },
        errorCorrectionLevel:level,
      });
      setQrDataUrl(url);
    } catch (error) {
      console.error(err);
    }
  }
  const handleClear=()=>{
    setText("");
    setQrDataUrl("");
  }
  const handleDownload=()=>{
    const link=document.createElement("a");
    link.href=qrDataUrl;
    link.download="QRCode.png";
    link.click();
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-[90%] max-w-5xl p-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          QR Code Generator
        </h1>

        <div className="flex gap-8">
          {/* LEFT SIDE */}
          <div className="w-[70%]">
            <label className="font-semibold text-lg">Text / URL</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="5"
              value={text}
              onChange={(e)=>setText(e.target.value)}
              placeholder="Enter text or URL here..."
            ></textarea>

            {/* Options Section */}
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div>
                <p className="font-medium">Size : {size}</p>
                <input
                  type="range"
                  min="100"
                  max="400"
                  value={size}
                  onChange={(e)=>setSize(e.target.value)}
                  className="w-full accent-blue-600 cursor-pointer"
                />
              </div>

              <div>
                <p className="font-medium">Error level</p>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 cursor-pointer focus:ring-2 focus:ring-blue-400" onChange={(e)=>setLevel(e.target.value)} value={level}>
                  <option value="L">L (Low)</option>
                  <option value="M">M (Medium)</option>
                  <option value="H">H (High)</option>
                </select>
              </div>

              <div>
                <p className="font-medium">Foreground</p>
                <input
                  type="color"
                  value={color}
                  onChange={(e)=>setColor(e.target.value)}
                  className="w-full h-[40px] rounded-md cursor-pointer"
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex gap-5 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold rounded-lg transition" onClick={handleGenerateQr}>
                Generate
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-semibold rounded-lg transition" onClick={handleDownload}>
                Download PNG
              </button>
              <button className="bg-gray-300 hover:bg-gray-400 text-black px-6 py-2 font-semibold rounded-lg transition" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-[30%] text-center">
            <p className="font-semibold text-lg text-gray-700">Preview</p>
            <div className="border border-dashed border-gray-400 h-[18rem] w-[18rem] flex justify-center items-center rounded-xl mt-3 bg-gray-100">
              {
                qrDataUrl ? <img src={qrDataUrl} alt="No QR generated yet" className="max-h-full" />
                : <p>No QR generated yet</p>
              }
            </div>
            <p className="text-sm text-gray-600 mt-3">
              💡 Tip: Use short URLs for cleaner QR codes. <br />
              Customize colors for branding.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
