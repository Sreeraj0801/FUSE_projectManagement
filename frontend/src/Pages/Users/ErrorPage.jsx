import React from 'react';
import {useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 overflow-hidden">
      <div className="max-w-md mx-auto p-4  overflow-hidden">
        <img src='/Images/404Image.png' alt="Error" className="w-full" />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600"
          onClick={handleGoBack}
        >
          Go Back
        </button> 
      </div>
    </div>
  );
};

export default ErrorPage;
