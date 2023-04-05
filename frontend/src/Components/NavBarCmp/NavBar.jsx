/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { BiMessageSquareAdd ,BiCalendarCheck} from "react-icons/bi";
import { useDispatch,useSelector } from "react-redux";
import { themeReducer, toggleTheme } from "../../Redux/Slice/themeSlice";

import { useEffect } from "react";
import Logo from "../../assets/MainLogo";
function Navbar() {

  const dispatch = useDispatch();
  const theme = useSelector(themeReducer);
  const handleToggleClick = async () => {
    dispatch(toggleTheme());
  };

  const [handBurger,setHandBurger] = useState({
    mainMenu:false
  })

  useEffect(() => {
    if (theme.isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme.isDarkMode]);

  


  return (
    <div>
      <nav className=" bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 top-0 left-0  border-gray-200 dark:border-gray-600">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link className="flex items-center">
            <Logo />
          </Link>
          <div className="flex md:order-2 gap-4 ">
            <div
              className="bg-gray-700 rounded-lg mt-0.5 hover:cursor-pointer h-9 w-9 flex justify-center items-center"
              onClick={handleToggleClick}
            >
              {theme?.isDarkMode ? (
                <BsSunFill className="text-white "  />
              ) : (
                <BsFillMoonFill className="text-white" />
              )}
            </div>
            <div 
            className="bg-gray-700 rounded-lg mt-0.5 hover:cursor-pointer h-9 w-9  text-2xl flex justify-center items-center text-white  hover:bg-sky-900">
              <BiCalendarCheck/>
            </div>
            <Link
            to={'/project/create'}
              type="button"
              className="hidden md:flex gap-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
             <BiMessageSquareAdd className='text-xl'/>
              New Project
            </ Link>
            <div className="">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={ () => {setHandBurger({ mainMenu: !handBurger.mainMenu })}}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            </div>
          </div>
          <div
            className={ `items-center justify-between   md:flex md:w-auto md:order-1 z-10 lg:z-0 md:top-0 top-14 w-11/12 fixed md:static  ${handBurger.mainMenu ? 'block' :'hidden'}`} 
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 border border-white rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
  
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  About
                </Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Services
                </Link>
              </li>
              <li>
                <Link className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
