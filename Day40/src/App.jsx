import { useState } from 'react'
import { z } from 'zod';

function App() {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1,"Email is required").email("Invalid Email Address"),
    password: z.string()
      .min(6,"Password must be at least 6 characters long")
      .regex(/[A-Z]/,"Password must contain at least one uppercase letter")
      .regex(/[a-z]/,"Password must contain at least one lowercase letter")
      .regex(/[0-9]/,"Password must contain at least one number")
      .regex(/[^A-Za-z0-9]/,"Password must contain at least one special character"),
    confirmPassword: z.string()
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.issues.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
    } else {
      setErrors({});
      alert("Registration Successful");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-xl mb-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Create Account</h1>
          <p className="text-slate-500 text-sm mt-1">Fill in your details to register</p>
        </div>

        <form onSubmit={handleSubmit} method="post" className="space-y-5">

          {/* Name */}
          <div className="name">
            <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
              className={`w-full px-4 py-2.5 rounded-xl border text-slate-800 placeholder-slate-400 text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                errors.name ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'
              }`}
            />
            <p className="text-red-500 text-xs mt-1.5 min-h-[16px]">{errors.name}</p>
          </div>

          {/* Email */}
          <div className="email">
            <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className={`w-full px-4 py-2.5 rounded-xl border text-slate-800 placeholder-slate-400 text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                errors.email ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'
              }`}
            />
            <p className="text-red-500 text-xs mt-1.5 min-h-[16px]">{errors.email}</p>
          </div>

          {/* Password */}
          <div className="password">
            <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className={`w-full px-4 py-2.5 rounded-xl border text-slate-800 placeholder-slate-400 text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                errors.password ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'
              }`}
            />
            <p className="text-red-500 text-xs mt-1.5 min-h-[16px]">{errors.password}</p>
          </div>

          {/* Confirm Password */}
          <div className="confirmpassword">
            <label className="block text-sm font-semibold text-slate-600 mb-1.5" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Enter Confirm Password"
              className={`w-full px-4 py-2.5 rounded-xl border text-slate-800 placeholder-slate-400 text-sm transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                errors.confirmPassword ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'
              }`}
            />
            <p className="text-red-500 text-xs mt-1.5 min-h-[16px]">{errors.confirmPassword}</p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-indigo-200 hover:shadow-lg mt-2"
          >
            Register
          </button>

        </form>
      </div>
    </div>
  )
}

export default App