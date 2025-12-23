import { useState } from 'react';
import {z} from "zod";

//  const formSchema=z.object({
//     fullName:z.string()
//     .min(1,"Name is Required")
//     .min(2,"Name must be at least 2 letters")
//     .regex(/^[a-zA-Z\s]+$/, "Name must contain only letters and spaces"),

//     email:z.string()
//     .min(1,"Email is required")
//     .email("Please Enter a valid email address"),

//     password:z.string()
//     .min(1,"Password is required")
//     .min(8,"Password must be atlease 8 character long")
//     .regex(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain uppercase, lowercase, and number"),

//     confirmPassword:z.string()
//     .min(1,"Confirm Password is required"),

//     age:z.number({
//       required_error:"Age is required",
//       invalid_type_error:"Age must be a number"
//     }),

//     phone:z.string()
//     .min(1,"Phone no is required")
//     .regex(/^\d{10}$/, "Phone must be exactly 10 digits"),

//     agree:z.boolean()
//     .regine(val=>val===true,{
//       message:"You must accept the terms and conditions"
//     })
//   }).refine(data=>data.password===data.confirmPassword,{
//     message:"passwod do not match",
//     path:["confirmPassword"]
//   });
function App() {
  const [erros, seterros] = useState({});
  const [form, setform] = useState({
    fullName:"",
    email:"",
    password:"",
    confirmPassword:"",
    age:"",
    phone:"",
    agree:false
  });
 
  const handleChange=(e)=>{
    const {name,value,type,checked}=e.target;
    setform((f)=>({...f,[name]:type==="checkbox" ? checked:value}));

    if(erros[name])
    {
      seterros(prev=>({...prev,[name]:undefined}));
    }
  }
  const handleReset=()=>{
    setform(()=>({
       fullName:"",
    email:"",
    password:"",
    confirmPassword:"",
    age:"",
    phone:"",
    agree:false
    }))
  }
  const validateData=()=>{
    let err={};
    if(!form.fullName) err.fullName="Name is required";
    if(!form.email) err.email="Email is required";
    if(!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      err.email = "Please enter a valid email";
    }
    if(form.password && form.password.length<8)
    {
      err.password="Password Must be at least 8 character";
    }
    if(!form.password) err.password="Password is required";
    if(!form.confirmPassword) err.confirmPassword="Confirm password is required";
    if(form.password && form.confirmPassword && form.password!==form.confirmPassword){
      err.confirmPassword="Password do not match"
    }
    if(!form.age) err.age="Age is required";
    if(!form.phone) err.phone="Phone no is required";
        if(form.phone && !form.phone.match(/^\d{10}$/)) {
        err.phone = "Phone must be 10 digits";
    }
    if(!form.agree) err.agree="You must accept terms";
    
    return err;

  }
  const handleSubmit=(e)=>{
    const err=validateData();
    seterros(err);

    if(Object.keys(err).length===0)
    {
      alert("Form Submited");
    }
  }
  console.log(form);
  

  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
            Create Account
          </h1>
          <p className="text-gray-600 text-center mb-6">Fill in your details to get started</p>
          
          <div className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={form.fullName}
                id="fullName"
                name="fullName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                placeholder="John Doe"
                onChange={handleChange}
              />
              {erros.fullName && <p className="text-red-700 m-1">{erros.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                id="email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                placeholder="john@example.com"
              />
              {erros.email && <p className="text-red-700 m-1">{erros.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={form.password}
                id="password"
                onChange={handleChange}
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                placeholder="••••••••"
              />
              {erros.password && <p className="text-red-700 m-1">{erros.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={form.confirmPassword}
                id="confirmPassword"
                onChange={handleChange}
                name="confirmPassword"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                placeholder="••••••••"
              />
              {erros.confirmPassword && <p className="text-red-700 m-1">{erros.confirmPassword}</p>}
            </div>

            {/* Age and Phone in a grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Age */}
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  value={form.age}
                  name="age"
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                  placeholder="25"
                />
                {erros.age && <p className="text-red-700 m-1">{erros.age}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                  placeholder="1234567890"
                />
                {erros.phone && <p className="text-red-700 m-1">{erros.phone}</p>}
              </div>
            </div>

            {/* Terms Checkbox */}
            <div>
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agree"
                  onChange={handleChange}
                  checked={form.agree}
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">
                  I agree to the terms and conditions
                </span>
              </label>
              {erros.agree && <p className='text-red-700 m-1'>{erros.agree}</p>}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                className="flex-1 bg-blue-600 text-white py-2.5 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 transition"
               type='button' onClick={handleSubmit}>
                Submit
              </button>
              <button
                className="flex-1 bg-gray-200 text-gray-700 py-2.5 px-4 rounded-lg font-semibold hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 transition"
               onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;