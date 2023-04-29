import React from 'react';


function ModalLoader() {
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900">
      <div className="flex items-center justify-center">
        { <svg className="animate-spin h-10 w-10 text-white" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg> 
        }
        {/* <div className="animate-spin h-12 w-12 text-white" >
          <img src="./Images/FuseMain.png" alt="logo" />
        </div> */}
      </div>
    </div>
  );
}

export default ModalLoader;
