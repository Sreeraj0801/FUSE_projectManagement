import React from "react";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slice/userSlice";
import useGreeting from "../../Hooks/useGreeting";
import CountUp from "react-countup";


const HomeCmp = () => { 

  const userDetails = useSelector(userReducer);
  const { formattedDate, greeting } = useGreeting();
  return (
    <div className="dark:bg-slate-800 bg-slate-00  h-screen overflow-scroll p-5 bg-gray-200  ">
      <div className="text-blue-900  dark:text-white">
        <h1 className="text-center md:text-2xl text-lg  font-semibold ">
          {formattedDate}
        </h1>
        <h1 className="text-center md:text-3xl  text-xl  mt-2 font-semibold">
          {greeting + "  " + userDetails.name}
        </h1>
      </div>

        {" "}
        <div className="flex gap-3   text-center  overflow-x-scroll mt-10 over scrollbar-thin">
          <div className="block w-full p-2 lg:h-24 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Workspaces
            </h5>
            <p className="  text-blue-500 text-3xl text-center font-extrabold">
              <CountUp end={30} duration={3} />
            </p>
          </div>
          <div className="block w-full p-2 lg:h-24 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Projects
            </h5>
            <p className="  text-yellow-500 text-3xl text-center font-extrabold">
              <CountUp end={13} duration={1} />
            </p>
          </div>
          <div className="block w-full p-2 lg:h-24 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Tasks
            </h5>
            <p className="  text-green-500 text-3xl text-center font-extrabold">
              13.
            </p>
          </div>
        </div>
    </div>
  );
};

export default HomeCmp;
