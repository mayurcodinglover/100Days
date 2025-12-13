import { useState } from "react";
import { Upload, X, ImageIcon } from "lucide-react";

function App() {
  const [preview, setPreview] = useState(null);
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    processFile(file);
  };

  const processFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setFileName(file.name);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      processFile(file);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    setPreview(null);
    setFileName("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Upload Your Image
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Click or drag and drop to upload
        </p>

        <label
          htmlFor="fileupload"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`relative block w-full rounded-xl border-2 border-dashed 
                     cursor-pointer transition-all duration-300 overflow-hidden
                     ${isDragging 
                       ? "border-blue-500 bg-blue-50 scale-105" 
                       : preview 
                       ? "border-green-400 bg-green-50" 
                       : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50"
                     }`}
        >
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-64 object-cover rounded-lg"
              />
              
              <button
                onClick={handleRemove}
                className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 
                         text-white rounded-full p-2 shadow-lg transition-all duration-200
                         hover:scale-110"
              >
                <X size={20} />
              </button>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                            from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium truncate">
                  {fileName}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                {isDragging ? (
                  <Upload size={40} className="text-blue-600 animate-bounce" />
                ) : (
                  <ImageIcon size={40} className="text-blue-600" />
                )}
              </div>
              
              <p className="text-gray-700 font-semibold mb-1">
                {isDragging ? "Drop your image here" : "Choose an image"}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                or drag and drop
              </p>
              
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>PNG, JPG, GIF up to 10MB</span>
              </div>
            </div>
          )}
        </label>

        <input
          type="file"
          id="fileupload"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />

        {preview && (
          <div className="mt-6 flex gap-3">
            <label
              htmlFor="fileupload"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white 
                       font-semibold py-3 px-4 rounded-lg cursor-pointer
                       transition-all duration-200 text-center"
            >
              Change Image
            </label>
            <button
              onClick={handleRemove}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 
                       font-semibold py-3 px-4 rounded-lg
                       transition-all duration-200"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;