import React from "react";

const Home = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Home</h1>

      <p className="mb-2">
        Welcome to our website! This is the home page where you can explore
        important updates, features, and announcements.
      </p>

      <ul className="list-disc ml-5 mb-6">
        <li>Latest News: React Router tutorial added</li>
        <li>New UI updates coming soon</li>
        <li>Tailwind CSS integrated in project</li>
        <li>User-friendly navigation with tab system</li>
      </ul>

      {/* Section 1 */}
      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-semibold mb-2">📌 Highlights</h2>
        <p className="mb-1">✔ Smooth page transitions with React Router</p>
        <p className="mb-1">✔ Clean UI using Tailwind CSS</p>
        <p>✔ Easy and responsive tab navigation</p>
      </div>

      {/* Section 2 */}
      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-semibold mb-2">🔥 Latest Features Added</h2>
        <ul className="list-disc ml-5">
          <li>Improved navbar with active tab indicator</li>
          <li>Better content card styling</li>
          <li>Reusable components for pages</li>
          <li>Simplified routing structure</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-semibold mb-2">📞 Need Help?</h2>
        <p className="mb-2">You can reach out anytime for support or updates.</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Contact Support
        </button>
      </div>
    </>
  );
};

export default Home;
