import React from "react";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slice/userSlice";
import useGreeting from "../../Hooks/useGreeting";
import FeatureSection from "./FeatureSection";
import HeadingCmp from "./HeadingCmp";

const HomeCmp = () => {
  const userDetails = useSelector(userReducer);
  const { formattedDate, greeting } = useGreeting();

  return (
    <div className="dark:bg-slate-800 bg-slate-00  h-screen overflow-scroll p-5 bg-gray-200 ">
      <div className="text-blue-900  dark:text-white">
        <h1 className="text-center md:text-2xl text-lg  font-semibold ">
          {formattedDate}
        </h1>
        <h1 className="text-center md:text-3xl  text-xl  mt-2 font-semibold">
          {greeting + "  " + userDetails.name}
        </h1>
      </div>
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 md:mt-20 md:mb-0 mb-[7rem] mt-10">
        <HeadingCmp />
        <FeatureSection />
      </div>
    </div>
  );
};

export default HomeCmp;
