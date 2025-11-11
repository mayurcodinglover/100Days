import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-gray-200 text-center m-5 p-5">
        <h1 className="text-3xl m-2 p-2 font-bold">FAQ Accordion Builder</h1>
        <p className="m-2 p-2 mb-10 text-gray-500">
          Create beutiful, interactive FAQ selections with our professionallll
          accordion generator
        </p>
        <div className="flex justify-center items-center">
          <div className=" bg-blue-400 rounded-[1rem] w-[70%]">
            <div className="m-2 p-2 text-left">
              <p> + Add New FAQ Item</p>
            </div>
            <div className="bg-gray-100 flex justify-between px-5 rounded-b-[1rem]">
              <div className="text-left m-2 p-2 mx-2 my-2">
                <div className="mx-2 my-1">
                  <img src="" alt="" />
                  <p>Questions</p>
                </div>
                <input
                  type="text"
                  name="question"
                  id="question"
                  placeholder="Enter Question"
                  className="mx-2 my-1 w-80 border border-black-200 m-2 p-2 rounded-md"
                />
              </div>
              <div className="text-left m-2 p-2 mx-2 my-2">
                <div className="mx-2 my-1">
                  <img src="" alt="" />
                  <p>Answer</p>
                </div>
                <textarea
                  rows="3"
                  cols="35"
                  name="answer"
                  id="answer"
                  placeholder="Enter Answer Here..."
                  className="mx-2 my-1 w-80 border border-black-200 m-2 p-2 rounded-md"
                ></textarea>
                <div className="m-2 p-2 text-right">
                  <button className="bg-blue-700 m-2 p-2 rounded-md">
                    + Add FAQ Item
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="faqs flex justify-center items-center m-2 p-2">
          <div className="flex justify-between items-center w-[70%]">
            <div className="flex justify-center items-center gap-5">
              <p>1</p>
              <p>What is HTML?</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <button className="">^</button>
              <p>delete</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
