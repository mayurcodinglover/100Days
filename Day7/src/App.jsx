import { useState } from 'react'
import './App.css'

function App() {
  const [celsius, setCelsius] = useState("-");
  const [fahrenheit, setFahrenheit] = useState("-");
  const [kelvin, setKelvin] = useState("-");
  const [value, setValue] = useState(0);
  const [temprature, setTemprature] = useState("c");

  const convert=(value,temprature)=>{
    
    const newvalue=Number(value);
    if(temprature==="c")
    {
      setCelsius(newvalue);
      setFahrenheit((newvalue*9/5)+32);
      setKelvin(newvalue+273.15);
    }
    else if(temprature==="f")
    {
      setFahrenheit(newvalue);
      setCelsius((newvalue-32)*5/9);
      setKelvin((newvalue-32)*5/9+273.15);
    }
    else{
      setKelvin(newvalue);
      setCelsius(newvalue-273.15);
      setFahrenheit((newvalue-273.15)*9/5+32);
    }
  }
  const reset=()=>{
    setCelsius("-");
    setFahrenheit("-");
    setKelvin("-");
    setValue(0);
    setTemprature("c");
  }
  const handlevalueChange=(e)=>{
    const newvalue=e.target.value;
    setValue(newvalue);
    convert(newvalue,temprature);
  }
  const handletemp=(e)=>{
    const newtemp=e.target.value;
    setTemprature(newtemp);
    convert(value,newtemp);
  }

  return (
    <>
        <div>
          <h1>Temperature Converter</h1>
          <p>Convert between Celsius,Fahrenheit & Kelvin</p>
          <div>
            <label htmlFor="">Enter Temperature Value</label>
            <div>
                <input type="number" name="number" id="number" value={value} onChange={(e)=>handlevalueChange(e)}/>
                <select onChange={(e)=>handletemp(e)}>
                  <option value="c">C</option>
                  <option value="f">F</option>
                  <option value="k">K</option>
                </select>
            </div>
            <button onClick={reset}>Reset</button>
          </div>
          <h2>Converted Result</h2>
          <div className='flex justify-center items-center gap-10'>
            <div className=''>
              <h3>Celsius</h3>
              <p>Degrees Celsius(C)</p>
            </div>
            <div>
              <h2>{celsius}</h2>
              <p>C</p>
            </div>
          </div>
           <div className='flex justify-center items-center gap-10'>
            <div>
              <h3>Fahrenheit</h3>
              <p>Degrees Fahrenheit(F)</p>
            </div>
            <div>
              <h2>{fahrenheit}</h2>
              <p>F</p>
            </div>
          </div>
           <div className='flex justify-center items-center gap-10'>
            <div>
              <h3>Kelvin</h3>
              <p>Kelvin scale(K)</p>
            </div>
            <div>
              <h2>{kelvin}</h2>
              <p>K</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
