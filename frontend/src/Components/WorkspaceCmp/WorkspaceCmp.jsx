/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userReducer } from "../../Redux/Slice/userSlice";
import workspaceApi from "../../API/workspaceApi";
import projectApi from "../../API/projectApi";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import InviteMembersWorkspace from "../Modal/InviteMembersWorkspace";
import { RxUpdate } from "react-icons/rx";
import { toast, ToastContainer } from "react-toastify";
import { IoPersonRemove } from "react-icons/io5";
import CreateWorkspace from "../Modal/createWorkspace";
import { AiFillCrown, AiOutlineShareAlt } from "react-icons/ai";

const ProjectCmp = () => {
  const userDetails = useSelector(userReducer);
  const { fetchMyWorkspaces } = workspaceApi();
  const { getAllProjectDetails } = projectApi();
  const [apiLoader, setApiLoader] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState({});
  const [render, setRender] = useState(true);
  const [dropDown, setDropDown] = useState(false);
  const [sharedWorkspaces, setSharedWorkspaces] = useState([]);
  const [ownedWorkspaces, setOwnedWorkspaces] = useState([]);
  const [wrkSpaceCategery, setWrkSpaceCategery] = useState("ownedWorkspaces");
  const [icons, setIcon] = useState("");

  const navigate = useNavigate();

  const getAllworkspace = async (userId, email) => {
    try {
      setApiLoader(true);
      const { ownedWorkspaces, sharedWorkspaces } = await fetchMyWorkspaces(
        userId,
        email
      );
      setOwnedWorkspaces(ownedWorkspaces);
      setSharedWorkspaces(sharedWorkspaces);
      setApiLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllworkspace(userDetails.userId, userDetails.email);
  }, [render]);

  const handleWrkspaceCategory = async (wrkCategory) => {
    try {
      setWrkSpaceCategery(wrkCategory);
    } catch (error) {
      //
    }
  };
  const handleWorkspaceChange = async (workspaceId, category) => {
    try {
      setDropDown(false);
      let wrkSelected
      if(category === 'ownedWorkspaces'){
        wrkSelected = ownedWorkspaces.filter((wrk) => {
          if (wrk._id === workspaceId) {
            return wrk;
          }
        });
      }
      else if(category === 'sharedWorkspace')  {
        wrkSelected = sharedWorkspaces.filter((wrk) => {
          if (wrk._id === workspaceId) {
            return wrk;
          }
        });
      }
      else {
        return 
      }
      setIcon(category);
      setSelectedWorkspace(wrkSelected[0]);
      setApiLoader(true);
      const response = await getAllProjectDetails(workspaceId);
      setProjects(response);
      setApiLoader(false);
    } catch (error) {
      toast.error("somwthing went wrong");
    }
  };
  return (
    <div className="dark:bg-slate-800 bg-gray-300  lg:p-8 p-3 h-screen overflow-y-auto scrollbar-thumb-gray-500  scrollbar-thin  ">
      <div className="flex justify-end -mt-10  ">
        <CreateWorkspace data={[render, setRender]} />
      </div>
      <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  col-span-2 ">
        <div className="flex gap-2  text-5xl dark:text-white text-slate-900">
          {icons === "ownedWorkspaces" ? (
            <AiFillCrown />
          ) : icons === "sharedWorkspace" ? (
            <AiOutlineShareAlt />
          ) : (
            ""
          )}
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white">
            {selectedWorkspace?.workspaceName
              ? selectedWorkspace.workspaceName
              : "Select Your Workspace"}
              {
                selectedWorkspace && selectedWorkspace?.masterDetails ? 
                <div className=" inline-flex relative -left-1 items-center justify-center w-12 h-12 text-xs font-bold text-white bg-blue-500 border-white rounded-full -top-7 -right-2 dark:border-gray-900">Shared</div>
                :
                (selectedWorkspace?._id ? 
                  <div className=" inline-flex relative -left-1 items-center justify-center w-12 h-12 text-xs font-bold text-white bg-green-500 border-white rounded-full -top-7 -right-2 dark:border-gray-900">Owned</div>
                  :' '
                )
              }
          </h1>

        </div>
        <input
          type="text"
          className="w-full  p-2 bg-transparent border border-slate-700  dark:border-slate-400 cursor-pointer"
          placeholder="Select a workspace"
          readOnly
          onClick={() => {
            setDropDown(!dropDown);
          }}
        />
      </div>
      <div
        className={`dark:bg-gray-600 bg-gray-200  h-48 rounded-xl   w-full md:p-5 p-2 gap-2 mt-2  ${
          dropDown ? "flex " : "hidden"
        }`}
      >
        <>
          <ul className=" dark:text-slate-300 text-black leading-10 grid h-10 ">
            <button
              className={`text-lg hover:cursor-pointer rounded-lg dark:hover:bg-slate-800 hover:bg-gray-400 px-6 py-2 w-full  dark:text-slate-300 text-black font-bold transition  delay-75  hover:-translate-y-1 hover:scale-110  duration-300 ${
                wrkSpaceCategery === "ownedWorkspaces"
                  ? "font-extrabolddark:bg-slate-900 bg-gray-400 "
                  : ""
              }`}
              onClick={() => {
                handleWrkspaceCategory("ownedWorkspaces");
              }}
            >
              <div className="flex gap-2">
                <AiFillCrown className="text-xl" />
                Owned
              </div>
            </button>
            <button
              className={`text-lg rounded-lg hover:cursor-pointer dark:hover:bg-slate-800 hover:bg-gray-400 px-6 py-2  dark:text-slate-300 text-black font-bold transition   hover:-translate-y-1 hover:scale-110   ${
                wrkSpaceCategery === "sharedWorkspace"
                  ? "font-extrabold dark:bg-slate-900 bg-gray-400"
                  : ""
              }`}
              onClick={() => {
                handleWrkspaceCategory("sharedWorkspace");
              }}
            >
              <div className="flex gap-2">
                <AiOutlineShareAlt className="text-2xl " />
                Shared
              </div>
            </button>
          </ul>
        </>
        <div className="h-50 border-l-2 h-full dark:border-gray-500 border-slate-400 overflow-x-scroll text-left "></div>
        <div
          className={`overflow-auto w-full ${
            wrkSpaceCategery === "sharedWorkspace" ? "block" : "hidden"
          } `}
        >
       <ul>
       {sharedWorkspaces.length ? sharedWorkspaces.map((sharedWorkspaces) => {
            return (
              <li
                key={sharedWorkspaces._id}
                className="dark:text-white cursor-pointer text-gray-600 font-bold p-2 text-xl dark:hover:bg-gray-700 hover:bg-gray-300 hover:transform hover:-translate-y-1 transition duration-300 hover:cursor-pointer"
                onClick={() => {
                  handleWorkspaceChange(sharedWorkspaces._id, wrkSpaceCategery);
                }}
              >
                 {sharedWorkspaces.workspaceName}
              </li>
            );
          })
          :
          <li className="dark:text-white text-xl text-slate-700 mt-5">No workspaces Shared</li>
           }
       </ul>
        </div>
        <div
          className={`overflow-auto w-full ${
            wrkSpaceCategery === "ownedWorkspaces" ? "block" : "hidden"
          } `}
        >
          <ul>
          {ownedWorkspaces.length? ownedWorkspaces.map((ownedWorkspace) => {
            return (
              <li
                key={ownedWorkspace._id}
                className="dark:text-white cursor-pointer text-gray-600  font-bold p-2 text-xl dark:hover:bg-gray-700 hover:bg-gray-300 hover:transform hover:-translate-y-1 transition duration-300 "
                onClick={() => {
                  handleWorkspaceChange(ownedWorkspace._id, wrkSpaceCategery);
                }}
              >
                {ownedWorkspace.workspaceName}
              </li>
            );
          }) :
          <li className="dark:text-white text-xl text-slate-700 mt-5">No workspaces owned</li>
        }
          </ul>
        </div>
      </div>

      {!selectedWorkspace?.workspaceName && (
        <div className="flex justify-center">
          <div className=" w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  mt-5 ">
            <div className="flex justify-center items-center">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white items-center">
                SELECT WORKSPACE TO VIEW DETAILS
              </h5>
            </div>
            <div className="flex justify-center items-center">
              <ThreeDots color="orange" />
            </div>
          </div>
        </div>
      )}

      {apiLoader ? (
        <div className="h-40 flex justify-center items-center ">
          <ThreeDots color="orange" />
        </div>
      ) : (
        <div
          className={` ${
            selectedWorkspace?.projects && !apiLoader
              ? "lg:grid grid-cols-2 gap-5"
              : "hidden "
          }  `}
        >
          <div className="">
            {projects && (
              <div className="flex gap-3  mt-4 w-full text-center overflow-x-auto ">
                <div className="block w-full p-2 lg:h-24 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Total Projects
                  </h5>
                  <p className="  text-blue-500 text-3xl text-center font-extrabold">
                    <CountUp end={projects.length} duration={3} />
                  </p>
                </div>
                <div className="block w-full p-2 lg:h-24 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Ongoing Projects
                  </h5>
                  <p className="  text-yellow-500 text-3xl text-center font-extrabold">
                    <CountUp end={13} duration={1} />
                  </p>
                </div>
                <div className="block w-full p-2 lg:h-24 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Completed Projects
                  </h5>
                  <p className="  text-green-500 text-3xl text-center font-extrabold">
                    13.
                  </p>
                </div>
              </div>
            )}
            <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5   lg:mb-0 ">
              <h1 className=" text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white sticky z-40 -top-7 p-2   backdrop-blur-md ">
                LIST OF PROJECTS
              </h1>
              <div className="lg:mx-10 my-5  max-h-26 overflow-y-auto scrollbar-thumb-gray-500  scrollbar-thin ">
                {projects?.length ? <ul className="max-w-full divide-y divide-gray-200 dark:divide-gray-700  ">
                  {projects.map((project) => {
                    return (
                      <li
                        key={project._id}
                        className="pb-3 sm:pb-4 cursor-pointer hover:dark:bg-slate-700 p-2 hover:bg-gray-300 hover:transform hover:-translate-y-1 transition duration-300"
                        onClick={() => {
                          navigate("/project", {
                            state: { projectId: project._id ,wrkSpaceCategery},
                          });
                        }}
                      >
                        <div className="flex items-center space-x-4 ">
                          <div className="flex-shrink-0">
                            <div
                              className="w-8 h-8 rounded-full text-center flex justify-center font-semibold text-2xl "
                              style={{ background: project.projectTheme }}
                            >
                              {project.projectName[0].toUpperCase()}
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                              {project.projectName}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                              {project.projectDiscription}
                            </p>
                          </div>
                          <div
                            className={`inline-flex items-center text-base font-semibold  ${
                              !project.status
                                ? "text-green-600"
                                : "dark:text-white"
                            }`}
                          >
                            {project.status ? "Ongoing" : "Completed"}
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>:
                  <h1 className="dark:text-white text-slate-800 font-extrabold">NO PROJECTS ARE PRESENT IN WORKSPACE</h1>
                }
              </div>
            </div>
          </div>
          {/* //----------------------- */}
          <div className="">
            <div className="md:grid md:grid-cols-2 md:gap-4">
              <div className=" p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5   lg:mb-0  max-h-72 overflow-y-auto ">
                <h1 className="dark:text-slate-400 text-center m-2 font-extrabold -mt-2">
                  {selectedWorkspace && selectedWorkspace?.masterDetails ?'OWNER DETAILS':'YOUR WORKSPACE' }
                  
                </h1>
                {selectedWorkspace && selectedWorkspace?.masterDetails ? (
                  <div className="">
                    <div className="flex gap-2">
                      <h1 className="text-bold text-lg text-slate-900 dark:text-white  ">
                        {selectedWorkspace.masterDetails[0].name}
                      </h1>
                    </div>
                    <h1 className="text-semibold text-slate-900 dark:text-white mt-2 ">
                      {selectedWorkspace.masterDetails[0].email}
                    </h1>
                  </div>
                ) : (

                  <div className="">
                      
                      <h1 className="text-bold text-lg text-slate-900 dark:text-white  ">
                      {userDetails.name}
                      </h1>
                    
                    <h1 className="text-semibold text-slate-900 dark:text-white mt-2 ">
                    {userDetails.email}
                    </h1>
                  </div>
                )}
              </div>

              <div className="lg:m-10 m-5    md:h-14">
                <InviteMembersWorkspace workSpaceId={selectedWorkspace?._id} />
              </div>
            </div>
            <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mb-36  lg:mb-0  ">
              <div className="flex justify-between sticky z-40 -top-7 p-2   backdrop-blur-2xl">
                <h1 className=" text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">
                  MEMBERS ON WORKSPACE
                </h1>
              </div>
              <div
                className="flex justify-end m-2 text-2xl font-extrabold  cursor-pointer ">
                <button className=" bg-slate-300 p-1 rounded-full cursor-pointer hover:bg-gray-100 hover:scale-110 hover:rotate-90"
                onClick={()=>{getAllworkspace(userDetails.userId, userDetails.email);}}>
                  <RxUpdate className="" />
                </button>
              </div>
              <div className="lg:mx-10 my-5 ">
                {!selectedWorkspace?.members?.length ? (
                  <h1 className="dark:text-white text-slate-800 font-extrabold">NO MEMBERS ARE PRESENT IN WORKSPACE</h1>
                ) : (
                  <div className="max-w-full divide-y divide-gray-200 dark:divide-gray-700  max-h-26 overflow-y-auto scrollbar-thumb-gray-500  scrollbar-thin">
                    {selectedWorkspace.members.map((member) => {
                      return (
                        <div
                          key={member._id}
                          className="pb-3 sm:pb-4 hover:dark:bg-slate-700 p-2 hover:bg-gray-300 hover:transform hover:-translate-y-1 transition duration-300"
                        >
                          <div className="flex items-center space-x-4 ">
                            <div className="flex-shrink-0">
                              <div className="w-8 h-8 rounded-full text-center flex justify-center font-semibold text-2xl dark:text-slate-100 ">
                                {member?.email[0].toUpperCase()}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                {member.email}
                              </p>
                            </div>
                            <div
                              className={`font-bold md:text-lg  ${
                                member.status === "accepted"
                                  ? "text-green-400"
                                  : member.status === "declined"
                                  ? "text-red-600"
                                  : "text-yellow-400"
                              }`}
                            >
                              {member.status}
                            </div>

                            <button
                              className="flex-4 min-w-0 hover:transform hover:translate-y-1 transition duration-300 hover:cursor-pointer "
                              onClick={() => {
                                alert("hai");
                              }}
                            >
                              <p className="text-xl font-medium  truncate text-red-600">
                                <IoPersonRemove />
                              </p>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default ProjectCmp;
