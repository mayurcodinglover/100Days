import React, { useState } from 'react';

// Personal Component
const Personal = ({ formData, setFormData, onNext }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <div className="space-y-3">
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
            onChange={handleChange}
            placeholder="Full name"
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            id="phone"
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          id="email"
          onChange={handleChange}
          placeholder="Email"
          className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

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
            onChange={handleChange}
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
        </div>

        <div>
          <label htmlFor="gender" className="block text-sm font-medium mb-1">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="w-full mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

// Address Component
const Address = ({ formData, setFormData, onNext }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: "" }));
    }
  };

  const validateData = () => {
    const newErrors = {};
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.trim()) newErrors.zip = "Zip is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateData()) {
      onNext();
    }
  };

  return (
    <div className="space-y-3">
      <div>
        <label htmlFor="address" className="block text-sm font-medium mb-1">
          Street Address
        </label>
        <input
          type="text"
          name="address"
          value={formData.address}
          id="address"
          onChange={handleChange}
          placeholder="Enter street address"
          className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-1">
            City
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            id="city"
            onChange={handleChange}
            placeholder="City"
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-1">
            State
          </label>
          <input
            type="text"
            name="state"
            value={formData.state}
            id="state"
            onChange={handleChange}
            placeholder="State"
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="zip" className="block text-sm font-medium mb-1">
            Zip Code
          </label>
          <input
            type="text"
            name="zip"
            value={formData.zip}
            id="zip"
            onChange={handleChange}
            placeholder="Zip code"
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1">
            Country
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            id="country"
            onChange={handleChange}
            placeholder="Country"
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
        </div>
      </div>

      <button
        onClick={handleNext}
        className="w-full mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

// Additional Component
const Additional = ({ formData, setFormData, onNext }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: "" }));
    }
  };

  const validateData = () => {
    const newErrors = {};
    if (!formData.occupation.trim()) newErrors.occupation = "Occupation is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.website.trim()) newErrors.website = "Website is required";
    if (!formData.linkedin.trim()) newErrors.linkedin = "LinkedIn is required";
    if (!formData.emecontact.trim()) newErrors.emecontact = "Emergency contact is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateData()) {
      onNext();
    }
  };

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label htmlFor="occupation" className="block text-sm font-medium mb-1">
            Occupation
          </label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            id="occupation"
            onChange={handleChange}
            placeholder="Your occupation"
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.occupation && <p className="text-red-500 text-xs mt-1">{errors.occupation}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            id="company"
            onChange={handleChange}
            placeholder="Company name"
            className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm font-medium mb-1">
          Website
        </label>
        <input
          type="url"
          name="website"
          value={formData.website}
          id="website"
          onChange={handleChange}
          placeholder="https://example.com"
          className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.website && <p className="text-red-500 text-xs mt-1">{errors.website}</p>}
      </div>

      <div>
        <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
          LinkedIn Profile
        </label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          id="linkedin"
          onChange={handleChange}
          placeholder="https://linkedin.com/in/username"
          className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.linkedin && <p className="text-red-500 text-xs mt-1">{errors.linkedin}</p>}
      </div>

      <div>
        <label htmlFor="emecontact" className="block text-sm font-medium mb-1">
          Emergency Contact
        </label>
        <input
          type="tel"
          name="emecontact"
          value={formData.emecontact}
          id="emecontact"
          onChange={handleChange}
          placeholder="Emergency contact number"
          className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        {errors.emecontact && <p className="text-red-500 text-xs mt-1">{errors.emecontact}</p>}
      </div>

      <button
        onClick={handleNext}
        className="w-full mt-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
};

// Review Component
const Review = ({ formData }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded p-3">
          <h2 className="text-sm font-semibold mb-2">Personal Information</h2>
          <div className="text-sm space-y-1">
            <p><span className="font-medium">Name:</span> {formData.name || "N/A"}</p>
            <p><span className="font-medium">Email:</span> {formData.email || "N/A"}</p>
            <p><span className="font-medium">Phone:</span> {formData.phone || "N/A"}</p>
            <p><span className="font-medium">DOB:</span> {formData.dob || "N/A"}</p>
            <p><span className="font-medium">Gender:</span> {formData.gender || "N/A"}</p>
          </div>
        </div>

        <div className="border rounded p-3">
          <h2 className="text-sm font-semibold mb-2">Address Information</h2>
          <div className="text-sm space-y-1">
            <p><span className="font-medium">Address:</span> {formData.address || "N/A"}</p>
            <p><span className="font-medium">City:</span> {formData.city || "N/A"}</p>
            <p><span className="font-medium">State:</span> {formData.state || "N/A"}</p>
            <p><span className="font-medium">Zip:</span> {formData.zip || "N/A"}</p>
            <p><span className="font-medium">Country:</span> {formData.country || "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="border rounded p-3">
        <h2 className="text-sm font-semibold mb-2">Additional Information</h2>
        <div className="text-sm space-y-1">
          <p><span className="font-medium">Occupation:</span> {formData.occupation || "N/A"}</p>
          <p><span className="font-medium">Company:</span> {formData.company || "N/A"}</p>
          <p><span className="font-medium">Website:</span> {formData.website || "N/A"}</p>
          <p><span className="font-medium">LinkedIn:</span> {formData.linkedin || "N/A"}</p>
          <p><span className="font-medium">Emergency Contact:</span> {formData.emecontact || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    occupation: "",
    company: "",
    website: "",
    linkedin: "",
    emecontact: ""
  });

  const totalSteps = 4;
  const progressWidth = (step / totalSteps) * 100;

  const stepTitle = {
    1: "Personal Details",
    2: "Address Details",
    3: "Additional Details",
    4: "Review & Submit",
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-1">
          Registration Form
        </h1>
        <p className="text-center text-gray-500 mb-4">
          Step {step} of {totalSteps} – {stepTitle[step]}
        </p>

        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold
              ${step >= num ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"}`}
            >
              {num}
            </div>
          ))}
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${progressWidth}%` }}
          />
        </div>

        <div className="mb-6">
          {step === 1 && (
            <Personal 
              formData={formData} 
              setFormData={setFormData} 
              onNext={() => setStep(2)} 
            />
          )}
          {step === 2 && (
            <Address 
              formData={formData} 
              setFormData={setFormData} 
              onNext={() => setStep(3)} 
            />
          )}
          {step === 3 && (
            <Additional 
              formData={formData} 
              setFormData={setFormData} 
              onNext={() => setStep(4)} 
            />
          )}
          {step === 4 && <Review formData={formData} />}
        </div>

        {step === 4 && (
          <div className="flex justify-between">
            <button
              onClick={() => setStep((s) => s - 1)}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400"
            >
              Previous
            </button>

            <button
              onClick={handleSubmit}
              className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}