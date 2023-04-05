import React from "react";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slice/userSlice";
import useGreeting from "../../Hooks/useGreeting";

const HomeCmp = () => {
  const userDetails = useSelector(userReducer);
  const { formattedDate, greeting } = useGreeting();
  return (
    <div className="dark:bg-slate-800 bg-slate-00  h-screen overflow-scroll p-5 bg-gray-200">
      <div className="text-blue-900  dark:text-white">
        <h1 className="text-center md:text-2xl text-lg  font-semibold ">
          {formattedDate}
        </h1>
        <h1 className="text-center md:text-3xl  text-xl  mt-2 font-semibold">
          {greeting + "  " + userDetails.name}
        </h1>
      </div>

      <div className="dark:bg-slate-900 w-full h-24 rounded mt-5 bg-white">

      </div>
    </div>
  );
};

export default HomeCmp;
