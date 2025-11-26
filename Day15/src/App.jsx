import { useState } from "react";
import image from "./assets/test.png";
import Modal from "react-modal";

// Important for accessibility
Modal.setAppElement("#root");

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const team = [
    {
      name: "Mayur Kumar",
      role: "Full Stack Developer",
      email: "mayur@gmail.com",
      location: "Ahmedabad, India",
      experience: "1 Year",
      img: image,
    },
    {
      name: "Brijesh Kumar",
      role: "Unity Developer",
      email: "brijesh@gmail.com",
      location: "Surat, India",
      experience: "3 Years",
      img: image,
    },
    {
      name: "Meet Kumar",
      role: "Full Stack Developer",
      email: "meet@gmail.com",
      location: "Mumbai, India",
      experience: "3 Years",
      img: image,
    },
  ];

  const handleModal = (member) => {
    setUser(member);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 flex flex-col items-center p-10 font-sans">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-wide">
          Our Team
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Meet our talented professionals
        </p>

        <div className="flex flex-wrap gap-8 justify-center">
          {team.map((member, index) => {
            return (
              <div
                key={index}
                className="bg-white shadow-xl rounded-2xl w-80 transition-transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex flex-col justify-center items-center bg-gray-100 p-6 rounded-t-2xl">
                  <img
                    src={member.img}
                    alt=""
                    className="rounded-full h-24 w-24 mb-3"
                  />
                  <h1 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h1>
                  <p className="text-sm text-gray-600">{member.role}</p>
                </div>

                <div className="p-4 text-gray-700">
                  <p>📧 {member.email}</p>
                  <p>📍 {member.location}</p>
                  <p>💼 {member.experience}</p>
                </div>

                <div className="p-4 flex justify-center">
                  <button
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                    onClick={() => handleModal(member)}
                  >
                    Show Details
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="bg-white rounded-2xl p-6 w-[30rem] mx-auto relative shadow-2xl animate-[fadeIn_0.3s_ease]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      >
        {user && (
          <div className="text-center">
            <img
              src={user.img}
              alt=""
              className="h-28 w-28 rounded-full mx-auto mb-4 shadow-md"
            />
            <h2 className="text-2xl font-bold mb-1 text-gray-800">
              {user.name}
            </h2>
            <p className="text-lg text-blue-600 font-medium mb-2">
              {user.role}
            </p>

            <div className="text-gray-700 space-y-1">
              <p>📧 {user.email}</p>
              <p>📍 {user.location}</p>
              <p>💼 {user.experience}</p>
            </div>

            <button
              className="bg-red-500 text-white px-5 py-2 rounded-lg mt-6 hover:bg-red-600 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </>
  );
}

export default App;
