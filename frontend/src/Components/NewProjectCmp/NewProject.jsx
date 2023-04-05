import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { themeReducer } from "../../Redux/Slice/themeSlice";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import CreateWorkspace from "../Modal/createWorkspace";
import { CirclePicker } from "react-color";

import successAlert from "../SweetAlert/successAlert";
import EmailInput from "../EmailInput/EmailInput";

const NewProject = () => {
  const dark = useSelector(themeReducer);
  const [toggleName, setToggleName] = useState("workspace");
  const navigate = useNavigate();

  useEffect(() => {
    if (dark.isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  const handleSubmit = (tags) => {
    // Do something with the submitted tags, e.g. send them to the backend
    console.log(tags);
  };

  const [details,setDetails] = useState({
    color:"#fff",
  })

  const handleColorChange = (newColor) => {
    setDetails({...details,color:newColor.hex});
  };

  return (
    <div className="dark:bg-slate-900 min-h-screen  dark:text-white text-slate-900 md:p-8 p-5 w-full">
      <div>
        <BsFillArrowLeftCircleFill
          className="text-5xl hover:text-slate-900  hover:bg-white hover:rounded-full cursor-pointer m-6"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-slate-200 text-center">
          Initiating a Successful Project{" "}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {" "}
          Creating a Project Plan with{" "}
          <span className="text-orange-400 font-extrabold">FUSE</span> Project
          Management Tool
        </p>
      </div>

      <div className="flex justify-center items center">
        <div className="w-5/6 bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
              Select tab
            </label>
            <select
              id="tabs"
              className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Select a workspace</option>
              <option>Add Project</option>
              <option>Enlist</option>
            </select>
          </div>
          <ul
            className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li className="w-full">
              <button
                id="stats-tab"
                data-tabs-target="#stats"
                type="button"
                role="tab"
                aria-controls="stats"
                aria-selected="true"
                className={`inline-block w-full p-4 rounded-tl-lg  hover:bg-gray-100 focus:outline-none text-lg  dark:hover:bg-gray-600 ${
                  toggleName === "workspace"
                    ? "dark:bg-gray-900 bg-gray-300 "
                    : "dark:bg-gray-700 bg-gray-50"
                }`}
                value="workspace"
                onClick={""}
              >
                Select a workspace
              </button>
            </li>
            <li className="w-full">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="false"
                className={`inline-block w-full p-4    hover:bg-gray-100 focus:outline-none text-lg  dark:hover:bg-gray-600 ${
                  toggleName === "project"
                    ? "dark:bg-gray-900 bg-gray-300 "
                    : "dark:bg-gray-700 bg-gray-50"
                }`}
              >
                Add Project
              </button>
            </li>
            <li className="w-full">
              <button
                id="faq-tab"
                data-tabs-target="#faq"
                type="button"
                role="tab"
                aria-controls="faq"
                aria-selected="false"
                className={`inline-block w-full p-4 rounded-tr-lg  hover:bg-gray-100 focus:outline-none text-lg  dark:hover:bg-gray-600 ${
                  toggleName === "enlist"
                    ? "dark:bg-gray-900 bg-gray-300 "
                    : "dark:bg-gray-700 bg-gray-50"
                }`}
              >
                Enlist
              </button>
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            className="border-t border-gray-300 dark:border-gray-600"
          >
{/*Workspace ----------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div
              className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800  ${
                toggleName === "workspace" ? "block" : "hidden"
              }`}
              id="stats"
              role="tabpanel"
              aria-labelledby="stats-tab"
            >
              {/* its the content of select a workspace */}
              <form action="" className="md:flex  justify-center">
                <div className="grid grid-cols-3 gap-10">
                  <div className="col-span-2">
                    <label
                      htmlFor="countries"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      select a workspace
                    </label>
                    <select
                      id="countries"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected disabled>
                        Choose a Workspace
                      </option>
                      <option value="US">Project Mangement</option>
                      <option value="CA">Canada</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                    </select>
                  </div>
                  <div className="">
                    <CreateWorkspace />
                  </div>
                </div>
              </form>
{/*Project -------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              <div className="text-center mt-10">
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border   hover:bg-gray-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 border-slate-900 "
                  onClick={() => {
                    setToggleName("project");
                  }}
                >
                  Next
                </button>
              </div>
            </div>

            {/* its the content of add project */}
            <div
              className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800  overflow-hidden ${
                toggleName === "project" ? "block  transition delay-300" : "hidden"
              }`}
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <div className="md:mx-44 transition duration-700 ease-in-out ">
                <form>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="email"
                      name="floating_email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Project Name
                    </label>
                  </div>

                  <div className="">
                    <div className="relative z-0 w-full mb-6 group">
                      <textarea
                        type="text"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                      />
                      <label
                        htmlFor="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Project discription
                      </label>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 md:m-5 ">
                      <div>
                        <p className="text-lg font-semibold m-1 text-blue-900 dark:text-white">
                          Select a theme{" "}
                        </p>

                        <div >
                      {details.color ?                      
                      <p className="h-5  w-2/3 my-5" style={{background:`${details.color}`}}></p>  :""} 
                      <CirclePicker color={details.color} onChange={handleColorChange}/>
                      </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold m-1 text-blue-900 dark:text-white mt-5 md:mt-0">
                          Add a due date
                        </p>
                        <div className=" md:flex gap-5 text-center">
                          <input
                            type="date"
                            className="dark:bg-gray-800 border h-12 p-3 border-slate-900"
                          />
                          <h1 className="font-extrabold mt-4 ">To </h1>
                          <input
                            type="date"
                            className="dark:bg-gray-800 border border-slate-900 h-12 p-3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>


                </form>
              </div>
              <div className="text-center mt-10">
                <button
                  type="button"
                  className="border-slate-900  py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border 0 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => {
                    setToggleName("workspace");
                  }}
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  border-slate-900 border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => {
                    setToggleName("enlist");
                  }}
                >
                  Next
                </button>
              </div>
            </div>
            {/*Enlist -------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            <div
              className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800  overflow-hidden ${
                toggleName === "enlist" ? "block transition-all duration-1000 delay-500" : "hidden"
              }`}
              id="enlist"
              role="tabpanel"
              aria-labelledby="faq-tab"
            >
              <div>
                <h1 className="text-xl text-center font-extrabold my-5">
                  Invite Members to workspace{" "}
                </h1>
                <EmailInput onSubmit={handleSubmit} />

                <div className="text-center mt-10">
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => {
                      setToggleName("project");
                    }}
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => {
                      successAlert(
                        "Email send succesfully",
                        "Succesfully created"
                      );
                    }}
                  >
                    Finish
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProject;
