import React from "react";

const About = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-3">About</h1>

      <p className="mb-2">
        This project demonstrates how to use React Router with simple tab-style navigation. 
        It is designed to help learners understand routing in React in the simplest way.
      </p>

      <p className="mb-4">
        Our goal is to build a clean and responsive UI using modern technologies like 
        React, React Router, and Tailwind CSS.
      </p>

      {/* Section 1 */}
      <div className="p-4 bg-gray-100 rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 What You Will Learn</h2>
        <ul className="list-disc ml-5 mt-2">
          <li>React Router DOM basics</li>
          <li>Navigation using Link components</li>
          <li>Creating clean tab navigation</li>
          <li>Conditional active styling for tabs</li>
          <li>Building reusable page components</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="p-4 bg-gray-100 rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-2">📘 Technologies Used</h2>
        <ul className="list-disc ml-5">
          <li><strong>React</strong> – Frontend UI library</li>
          <li><strong>React Router</strong> – For routing between pages</li>
          <li><strong>Tailwind CSS</strong> – For styling and UI components</li>
          <li><strong>Vite</strong> – Fast build tool for development</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="p-4 bg-gray-100 rounded-md mb-6">
        <h2 className="text-xl font-semibold mb-2">🚀 Project Purpose</h2>
        <p>
          This mini-project helps beginners understand how routing works 
          inside a React application. It also teaches how to create a simple 
          dashboard-like UI using tabs.
        </p>
      </div>

      {/* Section 4 */}
      <div className="p-4 bg-gray-100 rounded-md">
        <h2 className="text-xl font-semibold mb-2">💡 Future Enhancements</h2>
        <ul className="list-disc ml-5">
          <li>Implement protected routes</li>
          <li>Add login and signup pages</li>
          <li>Use Context API for global state</li>
          <li>Add dynamic tabs using an array</li>
          <li>Improve mobile responsiveness</li>
        </ul>
      </div>
    </>
  );
};

export default About;
