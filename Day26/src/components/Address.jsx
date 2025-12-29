import React from "react";

const Address = () => {
  return (
    <>
      <div className="flex justify-center items-start bg-gray-100 py-4">
        <div className="w-full max-w-2xl bg-white p-4 rounded-md shadow-sm">

          <h1 className="text-xl font-semibold text-center mb-4">
            Address Information
          </h1>

          <div className="space-y-3">

            {/* Street Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                Street Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter street address"
                className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* City & State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium mb-1">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Zip & Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="zip" className="block text-sm font-medium mb-1">
                  Zip Code
                </label>
                <input
                  type="number"
                  name="zip"
                  id="zip"
                  placeholder="Zip code"
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Country"
                  className="w-full border rounded px-2 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
