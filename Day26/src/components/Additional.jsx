import React from "react";

const Additional = () => {
  return (
    <>
      <div className="flex justify-center items-start bg-gray-100 py-4">
        <div className="w-full max-w-2xl bg-white p-4 rounded-md shadow-sm">

          <h1 className="text-xl font-semibold text-center mb-4">
            Additional Information
          </h1>

          <div className="space-y-3">

            {/* Occupation & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="occupation" className="block text-sm font-medium mb-1">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  id="occupation"
                  placeholder="Your occupation"
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="Company name"
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Website */}
            <div>
              <label htmlFor="website" className="block text-sm font-medium mb-1">
                Website
              </label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="https://example.com"
                className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium mb-1">
                LinkedIn Profile
              </label>
              <input
                type="url"
                name="linkedin"
                id="linkedin"
                placeholder="https://linkedin.com/in/username"
                className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Emergency Contact */}
            <div>
              <label htmlFor="emecontact" className="block text-sm font-medium mb-1">
                Emergency Contact
              </label>
              <input
                type="number"
                name="emecontact"
                id="emecontact"
                placeholder="Emergency contact number"
                className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Additional;
