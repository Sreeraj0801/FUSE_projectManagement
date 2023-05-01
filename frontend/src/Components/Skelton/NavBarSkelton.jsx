import React from "react";

const NavBarSkelton = () => {
  return (
    <div>
      <div role="status" className="animate-pulse">
        <div className="grid grid-cols-3 gap-5 mt-8 border border-slate-100">
        <div>
                <div className="flex items-center  space-x-2">
                    <div className="h-auto bg-gray-500 rounded-full dark:bg-gray-600 w-24"></div>
                    <div className="h-auto bg-gray-400 rounded-full dark:bg-gray-600 w-24"></div>
                </div>  
            </div>
            <div>
                <div className="flex items-center  space-x-2">
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-32"></div>
                    <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-600 w-24"></div>
                    <div className="h-2.5 bg-gray-400 rounded-full dark:bg-gray-600 w-24"></div>
                </div>  
            </div>
            <div>
                <div className="flex items-center  space-x-2">
                    <div className="h-auto bg-gray-300 rounded-full dark:bg-gray-700 w-32"></div>
                    <div className="h-auto bg-gray-400 rounded-full dark:bg-gray-600 w-24"></div>
                    <div className="h-auto bg-gray-400 rounded-full dark:bg-gray-600 w-24"></div>
                </div>  
            </div>
        </div>
    </div>
    </div>
  );
};

export default NavBarSkelton;
