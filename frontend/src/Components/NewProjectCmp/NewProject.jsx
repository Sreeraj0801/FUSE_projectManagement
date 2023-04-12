/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { themeReducer } from "../../Redux/Slice/themeSlice";
import { Link, useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import CreateWorkspace from "../Modal/createWorkspace";
import { CirclePicker } from "react-color";
import InviteMembersWorkspace from "../Modal/InviteMembersWorkspace";
import workspaceApi from "../../API/workspaceApi";
import projectApi from "../../API/projectApi";
import { userReducer } from "../../Redux/Slice/userSlice";
import { ToastContainer, toast } from "react-toastify";
import ErrorBoundary from "../ErrorBoundries/ErrorBoundries";
import { RxUpdate } from "react-icons/rx";
import { ThreeCircles } from "react-loader-spinner";
import ModalLoader from "../Modal/ModalLoader";
import SuccessAlert from "../SweetAlert/successAlert";

const NewProject = () => {
  const { getUserWorkspace, getAllWorkspaceMembers } = workspaceApi();
  const {createProject} = projectApi();
  const navigate = useNavigate();
  const userDetails = useSelector(userReducer);
  const dark = useSelector(themeReducer);
  //----------------- States -------------------------------
  const [toggleName, setToggleName] = useState("workspace");
  const [workspace, setWorkspace] = useState([]);
  const [render, setRender] = useState(true);
  const [workspaceMembers, setWorkspaceMembers] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    workspaceName: "",
    projectName: "",
    projectDiscription: "",
    projectTheme: "#fff",
    fromDate: "",
    toDate: "",
    members: [],
  });
  const [loader,setLoader] = useState(false);
  const [finalLoader,setFinalLoader] = useState(false);

  //-----------------------------------------------------------------
  useEffect(() => {
    if (dark.isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const getUserWorspaceDetails = async () => {
    try {
      const response = await getUserWorkspace(userDetails?.userId);
      setWorkspace(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getWorkspaceMembers = async (workspaceId) => {
    try {
      setLoader(true)
      if (workspaceId) {
        const response = await getAllWorkspaceMembers(workspaceId);
        setWorkspaceMembers(response);
        console.log(workspaceMembers);
        setLoader(false)
      }
    } catch (error) {
      console.log(error);
      throw { error };
    }
  };
  useEffect(() => {
    getUserWorspaceDetails();
  }, [render]);

  useEffect(() => {
    try {
      getWorkspaceMembers(projectDetails.workspaceName);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong at fetching members");
    }

  }, [projectDetails.workspaceName]);


  const handleCheckboxClick = (e) => {
    const email = e.target.value;
    const index = projectDetails.members.indexOf(email);
    if (index === -1) {
      setProjectDetails((prevState) => ({
        ...prevState,
        members: [...prevState.members, email],
      }));
    } else {
      setProjectDetails((prevState) => ({
        ...prevState,
        members: [
          ...prevState.members.slice(0, index),
          ...prevState.members.slice(index + 1),
        ],
      }));
    }
  };

  const handleFinish = async () => {
    try {
      setFinalLoader(true);
      const response = await createProject(projectDetails);
      setFinalLoader(false);
      SuccessAlert(response,"success");
    } catch (error) {
      setFinalLoader(false);
      toast.error(error.msg);
    }
  } 

  return (
    <div className="dark:bg-slate-900 min-h-screen  dark:text-white text-slate-900 md:px-8 p-5 w-full h-max-screen">
      <div>
        <BsFillArrowLeftCircleFill
          className="text-5xl hover:text-slate-900  hover:bg-white hover:rounded-full cursor-pointer "
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>

      <div className="text-center ">
        <h1 className="mb-2 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-slate-200 text-center">
          Initiating a Successful Project{" "}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          {" "}
          Creating a Project Plan with{" "}
          <span className="text-orange-400 font-extrabold">FUSE</span> Project
          Management Tool
        </p>
      </div>

      <div className="flex justify-center items center ">
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
            className="border-t border-gray-300 dark:border-gray-600 "
          >
            {/*Workspace ----------------------------------------------------------------------------------------------------------------------------------------------------*/}
            {
              <ErrorBoundary>
                <div
                  className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800  ${
                    toggleName === "workspace" ? "block" : "hidden "
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
                          onChange={(e) => {
                            setProjectDetails({
                              ...projectDetails,
                              workspaceName: e.target.value,
                            });
                          }}
                        >
                          <option selected disabled>
                            Choose a Workspace
                          </option>
                          {!workspace.length ? (
                            <option className="text-red-500" disabled>
                              No workspace found
                            </option>
                          ) : (
                            workspace.map((wrkspace) => {
                              return (
                                <option
                                  key={wrkspace._id}
                                  value={wrkspace._id}
                                  style={{ color: wrkspace.color }}
                                >
                                  {wrkspace.workspaceName}
                                </option>
                              );
                            })
                          )}
                          ``
                        </select>
                      </div>
                      <div className="">
                        <CreateWorkspace data={[render, setRender]} />
                      </div>
                    </div>
                  </form>
                  <div className="text-center mt-10">
                    <button
                      type="button"
                      className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border   hover:bg-gray-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 border-slate-900 "
                      onClick={() => {
                        if (!projectDetails.workspaceName)
                          toast.error("Please select a workspace");
                        else setToggleName("project");
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </ErrorBoundary>
            }
  {/*Project -------------------------------------------------------------------------------------------------------------------------------------------------------*/}

            {/* its the content of add project */}
            {
              <ErrorBoundary>
                <div
                  className={`p-4 bg-white  rounded-lg md:p-8 dark:bg-gray-800  h-2/3 overflow-scroll ${
                    toggleName === "project"
                      ? "block "
                      : "hidden"
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
                          value={projectDetails.projectName}
                          onChange={(e) => {
                            setProjectDetails({
                              ...projectDetails,
                              projectName: e.target.value,
                            });
                          }}
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
                            value={projectDetails.projectDiscription}
                            onChange={(e) => {
                              setProjectDetails({
                                ...projectDetails,
                                projectDiscription: e.target.value,
                              });
                            }}
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

                            <div>
                              {projectDetails.projectTheme ? (
                                <p
                                  className="h-5  w-2/3 my-5"
                                  style={{
                                    background: `${projectDetails.projectTheme}`,
                                  }}
                                ></p>
                              ) : (
                                ""
                              )}
                              <CirclePicker
                                color={projectDetails.projectTheme}
                                onChange={(newColor) => {
                                  setProjectDetails({
                                    ...projectDetails,
                                    projectTheme: newColor.hex,
                                  });
                                }}
                              />
                            </div>
                          </div>
                          <div>
                            <p className="text-lg font-semibold m-1 text-blue-900 dark:text-white mt-5 md:mt-0">
                              Add a due date
                            </p>
                            <div className=" md:flex gap-5 text-center">
                              <input
                                type="date"
                                value={projectDetails.fromDate}
                                onChange={(e) => {
                                  setProjectDetails({
                                    ...projectDetails,
                                    fromDate: e.target.value,
                                  });
                                }}
                                className="dark:bg-gray-800 border h-12 p-3 border-slate-900"
                              />
                              <h1 className="font-extrabold mt-4 ">To </h1>
                              <input
                                type="date"
                                className="dark:bg-gray-800 border border-slate-900 h-12 p-3"
                                value={projectDetails.toDate}
                                onChange={(e) => {
                                  setProjectDetails({
                                    ...projectDetails,
                                    toDate: e.target.value,
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="text-center mt-5 md:mt-0">
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
                        if (
                          projectDetails.projectName &&
                          projectDetails.projectDiscription &&
                          projectDetails.projectTheme &&
                          projectDetails.fromDate &&
                          projectDetails.toDate
                        ) {
                          setToggleName("enlist");
                        } else {
                          toast.error("pleasee fill all the credentials");
                        }
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </ErrorBoundary>
            }
  {/*Enlist -------------------------------------------------------------------------------------------------------------------------------------------------------*/}
            {
              <ErrorBoundary>
                <div
                  className={`p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800  overflow-hidden ${
                    toggleName === "enlist"
                      ? "block transition-all duration-1000 delay-500"
                      : "hidden"
                  }`}
                  id="enlist"
                  role="tabpanel"
                  aria-labelledby="faq-tab"
                >
                  <div>
                    <div className="flex justify-end">
                      <InviteMembersWorkspace
                        workSpaceId={projectDetails.workspaceName}
                      />
                    </div>
                    <h1 className="mb-4 text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white text-center">
                      Select members on your{" "}
                      <span className="underline underline-offset-3 decoration-4 decoration-blue-400 dark:decoration-blue-600 ">
                        workspace
                      </span>
                    </h1>
                    *can select only accepted mails to project
                    <div
                      id=""
                      className="  bg-white rounded-lg shadow  dark:bg-gray-700 border border-gray-300"
                    >
                      <div className="p-3">
                        <label htmlFor="input-group-search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </div>
                          <input
                            type="text"
                            id="input-group-search"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search user"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end m-2 text-2xl font-extrabold  cursor-pointe " 
                       onClick={()=>{
                       getWorkspaceMembers(projectDetails.workspaceName)}}
                        >
                          <div className="flex bg-slate-900 p-1 rounded-full gap-2 cursor-pointer hover:bg-black hover:scale-110">
                          <span className="hidden md:block text-xl">Refresh</span>
                        <RxUpdate className="mt-1 "/>
                          </div>
                        </div>
                      <ul
                        className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200 grid  lg:grid-cols-3 gap-2 md:gap-5"
                        aria-labelledby="dropdownSearchButton "
                      >
                        {workspaceMembers.length ? (
                        loader ?
                        <div className="bg-transparent flex justify-center items-center h-full col-span-5">
                          <ThreeCircles/>
                        </div>
                        :
                        workspaceMembers.map((members) => {
                          return (
                            <div key={members.email}>
                              <li>
                                <input
                                  type="checkbox"
                                  id={members.email}
                                  value={members.email}
                                  className="hidden peer"
                                  required=""
                                  disabled={members.status === 'declined' || members.status === "pending" ? true : false}
                                  onClick={(e) => members.status==="accepted" &&  handleCheckboxClick(e)}
                                  />
                                <label
                                  htmlFor={members.email}
                                  className={`  break-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-gray-200 border-2  cursor-pointer dark:hover:text-gray-200  peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-green-400 peer-checked:text-gray-900 hover:bg-gray-300 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900 ${members.status==="accepted" ? 'border-gray-300 dark:border-gray-600 ': (members.status === 'declined' ?'border-red-600':'border-red-300 dark:border-red-600 ' )}`}
                                >
                                  <div className="flex gap-3">

                                    <div className="w-full md:text-lg font-semibold">
                                    {members.email}
                                    <div className={`font-light md:text-sm ${members.status==="accepted" ? 'text-green-400': (members.status === 'declined' ?'text-red-600':'text-yellow-600' )}`}>
                                      {members.status}
                                    </div>
                                    </div>
                                  </div>
                                </label>
                              </li>
                            </div>
                          );
                        })
                        ) : (
                          <h1 className=" text-2xl font-extrabold text-center border flex justify-center items-center col-span-4">
                            No members present
                          </h1>
                        )}
                      </ul>
                      <Link className="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-400 rounded-b-lg bg-gray-100 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
                        <svg
                          className="w-5 h-5 mr-1"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"></path>
                        </svg>
                        Finalise the Users
                      </Link>
                    </div>
                    <div className="text-center ">
                      <button
                        type="button"
                        className="border-slate-900 mt-3 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border 0 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={() => {
                          setToggleName("project");
                        }}
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg  border-slate-900 border hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        onClick={handleFinish}
                      >
                        Finish
                      </button>
                    </div>
                  </div>
                  {finalLoader&& <ModalLoader/>}
                </div>
              </ErrorBoundary>
            }
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default NewProject;
