import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-3">Contact</h1>

      <p className="mb-4">
        You can reach us through the following channels or send us a direct message.
      </p>

      {/* Contact Info Box */}
      <div className="p-4 bg-gray-100 rounded-md w-full mb-6">
        <h2 className="text-xl font-semibold mb-2">📞 Contact Information</h2>
        <p className="mb-1"><strong>Email:</strong> support@example.com</p>
        <p className="mb-1"><strong>Phone:</strong> +91 9876543210</p>
        <p><strong>Address:</strong> Ahmedabad, India</p>
      </div>

      {/* Office Hours */}
      <div className="p-4 bg-gray-100 rounded-md w-full mb-6">
        <h2 className="text-xl font-semibold mb-2">⏰ Office Hours</h2>
        <ul className="list-disc ml-5">
          <li>Monday – Friday: 9:00 AM – 6:00 PM</li>
          <li>Saturday: 10:00 AM – 4:00 PM</li>
          <li>Sunday: Closed</li>
        </ul>
      </div>

      {/* Contact Form */}
      <div className="p-4 bg-gray-100 rounded-md w-full">
        <h2 className="text-xl font-semibold mb-3">📩 Send Us a Message</h2>

        <form className="flex flex-col gap-3 w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your name"
            className="border rounded-md p-2"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-md p-2"
          />
          <textarea
            rows="4"
            placeholder="Write your message..."
            className="border rounded-md p-2"
          ></textarea>

          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
