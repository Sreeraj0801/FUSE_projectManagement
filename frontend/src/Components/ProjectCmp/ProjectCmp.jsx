import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const ProjectCmp = () => {
  return (
    <div className="dark:bg-slate-800 bg-gray-200 h-screen lg:p-8 p-3">
      <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
          SELECT YOUR WORKSPACE
        </h1>

        <div className="flex items-center">
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border lg:text-xl border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="select your workspace"
              disabled
            />
          </div>
          <div
            type="submit"
            className="p-2 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <AiFillCaretDown className="text-2xl" />
          </div>
        </div>
        <div className="flex justify-end hidden">
          <div
            id="dropdownRightEnd"
            className=" absolute z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700  right-12 mt-1 "
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownRightEndButton"
            >
              <li>
                <a
                  href="#_"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#_"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

     <div>

     <div className="flex gap-3  mt-4 w-full text-center" >
        <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Total Projects</h5>
        <p className="  text-blue-500 text-3xl text-center font-extrabold">13.</p>
        </div>
        <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ongoing Projects</h5>
        <p className="  text-yellow-500 text-3xl text-center font-extrabold">13.</p>
        </div>
        <div className="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Completed Projects</h5>
        <p className="  text-green-500 text-3xl text-center font-extrabold">13.</p>
        </div>
      </div>

      <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">
      <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
          LIST OF PROJECTS
        </h1>
        </div>

     </div>
      
    </div>
  );
};

export default ProjectCmp;
