import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const [activeButton, setActiveButton] = useState<string>("overview"); // Define the type for useState
  const navigate = useNavigate();

  const handleButtonClick = (buttonName: "overview" | "information") => { // Specify the type of buttonName
    setActiveButton(buttonName);
  };
      

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="flex justify-center items-start py-6 bg-blue-700 w-screen">
        <div className="rounded-lg flex flex-col space-y-2 font-['Arial'] items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTITOztgVSNp-wUaIGSSTbL-_0WPDonbaXrTQ&s"
            className="rounded-full w-52 h-52"
          />
          <div className="font-bold text-2xl text-white">BRAND</div>
          <div className="flex flex-row space-x-6">
            <button
              className={`rounded-3xl px-28 py-2 font-bold text-xl ${
                activeButton === "overview"
                  ? "bg-white text-blue-700"
                  : "bg-blue-700 text-white"
              }`}
              onClick={() => handleButtonClick("overview")}
            >
              Overview
            </button>
            <button
              className={`rounded-3xl px-24 py-2 font-bold text-xl ${
                activeButton === "information"
                  ? "bg-white text-blue-700"
                  : "bg-blue-700 text-white"
              }`}
              onClick={() => handleButtonClick("information")}
            >
              Information
            </button>
          </div>
        </div>
        </div>
                {/* Content Area - Now Below the Blue Section */}
      <div className="w-full absolute justify-center mt-4  top-[400px] bg-white p-6 rounded-md shadow-md max-w-4xl"> {/* Moved content outside */}
        {activeButton === "overview" ? (
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center">
              <div className="bg-red-600 w-8 h-8 mr-2" /> <span>PH: 1.2</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-purple-600 w-8 h-8 mr-2" /> <span>A: 5.7</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-green-600 w-8 h-8 mr-2" /> <span>B: 4.3</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-yellow-600 w-8 h-8 mr-2" /> <span>C: 6.2</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-orange-600 w-8 h-8 mr-2" /> <span>D: 8.3</span>
            </div>
            <div className="flex items-center mt-2">
              <div className="bg-blue-800 w-8 h-8 mr-2" /> <span>E: 1.4</span>
            </div>
          </div>
        ) : (
          <div className="text-left">
            <p className="text-lg">Water Quality Information</p>
            <p className="mt-2">
              The water quality is assessed based on various factors including PH levels, mineral
              content, and safety for consumption. Maintaining a balanced PH is critical for
              ensuring that the water is safe for both environmental and human use.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
