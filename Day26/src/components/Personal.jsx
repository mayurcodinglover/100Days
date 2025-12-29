import React from "react";
import {useState} from "react";
const Personal = () => {
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState(
        {
            name:"",
            phone:"",
            email:"",
            dob:"",
            gender:""
        }
    );
    const handleChnage=(e)=>{
        const {name,value}=e.target;
        setFormData((f)=>({...f,[name]:value}));
    }

    console.log(formData);
  return (
    <>
      <div className="flex justify-center items-start bg-gray-100 py-4">
        <div className="w-full max-w-2xl bg-white p-4 rounded-md shadow-sm">
          
          <h1 className="text-xl font-semibold text-center mb-4">
            Personal Information
          </h1>

          <div className="space-y-3">
            
            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  id="name"
                  onChange={handleChnage}
                  placeholder="Full name"
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  id="phone"
                  onChange={handleChnage}
                  placeholder="Phone number"
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                id="email"
                onChange={handleChnage}
                placeholder="Email"
                className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* DOB & Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="dob" className="block text-sm font-medium mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  id="dob"
                  onChange={handleChnage}
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                {errors.dob && (
                <p className="text-red-500 text-xs">{errors.dob}</p>
              )}
              </div>

              <div>
                <label htmlFor="gender" className="block text-sm font-medium mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChnage}
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                <p className="text-red-500 text-xs">{errors.gender}</p>
              )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Personal;
