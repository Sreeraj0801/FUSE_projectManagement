
import React from "react";
import { useNavigate } from "react-router-dom";
const SomethingWrongPage = () => {
const navigate = useNavigate();  
    const handleGoBack = () => {
      navigate(-1);
    };
  
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
          <p className="text-lg mb-8">We apologize for the inconvenience.</p>
          <button
            className="px-4 py-2 bg-white text-purple-500 rounded shadow hover:bg-gray-200"
            onClick={handleGoBack}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  };
  
  export default SomethingWrongPage;