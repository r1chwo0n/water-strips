import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Result() {
  const [activeButton, setActiveButton] = useState<string>("overview"); // Define the type for useState
  const navigate = useNavigate();

  const handleButtonClick = (buttonName: "overview" | "information") => { // Specify the type of buttonName
    setActiveButton(buttonName);
    if (buttonName === "overview") {
      handleOverview();
    } else {
      handleInformation();
    }
  };

  const handleOverview = () => {
    
  };

  const handleInformation = () => {
    
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
    </div>
  );
}
