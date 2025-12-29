import React from "react";

const Review = () => {
  return (
    <>
      <div className="flex justify-center items-start bg-gray-100 py-4">
        <div className="w-full max-w-3xl bg-white p-4 rounded-md shadow-sm">

          <h1 className="text-xl font-semibold text-center mb-4">
            Review Information
          </h1>

          <div className="space-y-4">

            {/* Personal & Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Personal Info */}
              <div className="border rounded p-3">
                <h2 className="text-sm font-semibold mb-2">
                  Personal Information
                </h2>
                <div className="text-sm space-y-1">
                  <p><span className="font-medium">Name:</span> {}</p>
                  <p><span className="font-medium">Email:</span> {}</p>
                  <p><span className="font-medium">Phone:</span> {}</p>
                  <p><span className="font-medium">DOB:</span> {}</p>
                  <p><span className="font-medium">Gender:</span> {}</p>
                </div>
              </div>

              {/* Address Info */}
              <div className="border rounded p-3">
                <h2 className="text-sm font-semibold mb-2">
                  Address Information
                </h2>
                <div className="text-sm space-y-1">
                  <p><span className="font-medium">Address:</span> {}</p>
                  <p><span className="font-medium">City:</span> {}</p>
                  <p><span className="font-medium">State:</span> {}</p>
                  <p><span className="font-medium">Zip:</span> {}</p>
                  <p><span className="font-medium">Country:</span> {}</p>
                </div>
              </div>

            </div>

            {/* Additional Info */}
            <div className="border rounded p-3">
              <h2 className="text-sm font-semibold mb-2">
                Additional Information
              </h2>
              <div className="text-sm space-y-1">
                <p><span className="font-medium">Occupation:</span> {}</p>
                <p><span className="font-medium">Company:</span> {}</p>
                <p><span className="font-medium">Website:</span> {}</p>
                <p><span className="font-medium">LinkedIn:</span> {}</p>
                <p><span className="font-medium">Emergency Contact:</span> {}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
