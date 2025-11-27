import { useState } from "react";

function App() {
  const [texts, setTexts] = useState("");
  const [totalWord, settotalWord] = useState(200);
  const [totalTypeWord, setTotalTypeWord] = useState(0);
  const [totalRemaining, settotalRemaining] = useState(200);
  const [onlyWord, setonlyWord] = useState(0);
  const [line, setline] = useState(0);
  const [nospaceCount, setnospaceCount] = useState(0);
  const [copytext, setCopyText] = useState("Copy Text");
  const [progress, setprogress] = useState(0);
  const handleChange=(e)=>{

    let value=e.target.value;
    if(value.length>200)
    {
      alert("Maximum limit reached!");
      return;
    }
    setTexts(value);
    setTotalTypeWord(value.length);
    settotalRemaining(totalWord-value.length);
    setonlyWord(gettotalwords(value));
    setline(gettotalLine(value));
    setnospaceCount(getNoSpaceCount(value));
    setprogress(Math.floor((value.length/200)*100));
  }
  console.log(progress);
  
  const gettotalwords=(value)=>{
    if(value.trim()==="") return 0;
    return value.trim().split(/\s+/).length;
  }
  const gettotalLine=(value)=>{
    if(value.trim()==="") return 0;
    return value.split('\n').length;
  }
  const getNoSpaceCount=(value)=>{
    return value.replace(/\s/g,"").length;
  }
  const clearText=()=>{
    setTexts("");
    setTotalTypeWord(0);
    settotalRemaining(200);
    setonlyWord(0);
    setline(0);
    setnospaceCount(0);
  }
  const copyToClipBoard=()=>{
    navigator.clipboard.writeText(texts);
    setCopyText("Copied");
    setTimeout(() => {
      setCopyText("Copy Text");
    }, 3000);
  }
  
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
        <h1 className="p-2 font-bold text-4xl text-blue-600">Smart Text Counter</h1>
        <p className="p-2 mb-4 text-gray-600 text-lg">
          Keep track of your character count as you type
        </p>
        {progress>90  && <>
        <p className=" absolute ml-[43rem] mt-[-23rem] bg-red-300 text-black m-2 p-1 rounded-full font-bold text-sm px-2">Almost Full</p>
        </>}

        <textarea
          name="characters"
          onChange={(e)=>handleChange(e)}
          id="characters"
          cols="105"
          value={texts}
          rows="7"
          placeholder="Type here..."
          className="m-2 p-4 w-[60%] outline-none border-2 border-gray-300 rounded-md focus:border-blue-600 resize-none"
        ></textarea>

        <div className="m-2 p-2 flex justify-between items-center w-[60%] text-gray-700 font-semibold">
          <p>Progress</p>
          <p>{progress}%</p>
        </div>

        <div className="w-[60%] h-3 bg-gray-300 rounded-full">
          <div
  className={`h-3 rounded-full transition-all ${
  progress > 90 ? "bg-red-600" : "bg-green-600"
}`}

  style={{ width: `${progress}%` }}
></div>

        </div>

        <div className="flex justify-center items-center m-4 p-2 w-[60%] gap-4">
          <div className="flex flex-col justify-center items-center w-[50%] bg-white shadow-md rounded-md p-3">
            <h1 className="text-2xl font-bold text-blue-700">{totalTypeWord}</h1>
            <p className="text-gray-600">Characters Used</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[50%] bg-white shadow-md rounded-md p-3">
            <h1 className="text-2xl font-bold text-blue-700">{totalRemaining}</h1>
            <p className="text-gray-600">Remaining</p>
          </div>
        </div>

        <div className="flex justify-between items-center w-[60%] gap-4">
          <div className="w-[40%] bg-white shadow-md rounded-md p-3 flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-blue-700">{onlyWord}</h1>
            <p className="text-gray-600">Words</p>
          </div>
          <div className="w-[40%] bg-white shadow-md rounded-md p-3 flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-blue-700">{line}</h1>
            <p className="text-gray-600">Lines</p>
          </div>
          <div className="w-[40%] bg-white shadow-md rounded-md p-3 flex flex-col justify-center items-center">
            <h1 className="text-xl font-bold text-blue-700">{nospaceCount}</h1>
            <p className="text-gray-600">No Spaces</p>
          </div>
        </div>

        <div className="flex justify-around items-center w-[60%] mt-6">
          <button className="m-2 p-2 bg-gray-700 hover:bg-gray-800 text-white font-semibold w-[30%] rounded-md" onClick={clearText}>
            Clear Text
          </button>
          <button className="m-2 p-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold w-[30%] rounded-md" onClick={copyToClipBoard}>
            {copytext}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
