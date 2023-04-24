import React,{useState,useEffect} from 'react'
import { BsClipboardPlus } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import workspaceApi from "../../API/workspaceApi";


const AddMembersToProject = () => {
    const {  getAllWorkspaceMembers } = workspaceApi();

    const [showModal, setShowModal] = useState(false);
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
    const [loader, setLoader] = useState(false);
    const getWorkspaceMembers = async (workspaceId) => {
        try {
          setLoader(true);
          if (workspaceId) {
            const response = await getAllWorkspaceMembers(workspaceId);
            setWorkspaceMembers(response);
            setLoader(false);
          }
        } catch (error) {
          console.log(error);
          throw { error };
        }
      };
      useEffect(() => {
        getUserWorspaceDetails();
      }, [render]);

  return (
    <div>
          <>
      <button
        className="text-gray-900 mt-7 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 flex gap-5"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <BsClipboardPlus className="text-2xl " />
        <span className="hidden md:block">Invite to Project</span>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg  relative flex flex-col  bg-white dark:bg-slate-800 outline-none focus:outline-none shadow-lg shadow-slate-300 dark:shadow-slate-900 w-full">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white ">Create a Workspace </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto ">
                <div>
                    {/* <div className="flex justify-end">
                      <InviteMembersWorkspace
                        workSpaceId={projectDetails.workspaceName}
                      />
                    </div> */}
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
                      <div
                        className="flex justify-end m-2 text-2xl font-extrabold  cursor-pointe "
                        onClick={() => {
                          getWorkspaceMembers(projectDetails.workspaceName);
                        }}
                      >

                      </div>
                      <ul
                        className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200 grid  lg:grid-cols-3 gap-2 md:gap-5"
                        aria-labelledby="dropdownSearchButton "
                      >
                        {workspaceMembers.length ? (
                          loader ? (
                            <div className="bg-transparent flex justify-center items-center h-full col-span-5">
                              Loading...
                            </div>
                          ) : (
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
                                      disabled={
                                        members.status === "declined" ||
                                        members.status === "pending"
                                          ? true
                                          : false
                                      }
                                      onClick={(e) =>
                                        members.status === "accepted" &&
                                        handleCheckboxClick(e)
                                      }
                                    />
                                    <label
                                      htmlFor={members.email}
                                      className={`  break-all inline-flex items-center justify-between w-full p-3 text-gray-500 bg-gray-200 border-2  cursor-pointer dark:hover:text-gray-200  peer-checked:border-green-600 hover:text-gray-600 dark:peer-checked:text-green-400 peer-checked:text-gray-900 hover:bg-gray-300 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-900 ${
                                        members.status === "accepted"
                                          ? "border-gray-300 dark:border-gray-600 "
                                          : members.status === "declined"
                                          ? "border-red-600"
                                          : "border-red-300 dark:border-red-600 "
                                      }`}
                                    >
                                      <div className="flex gap-3">
                                        <div className="w-full md:text-lg font-semibold">
                                          {members.email}
                                          <div
                                            className={`font-light md:text-sm ${
                                              members.status === "accepted"
                                                ? "text-green-400"
                                                : members.status === "declined"
                                                ? "text-red-600"
                                                : "text-yellow-600"
                                            }`}
                                          >
                                            {members.status}
                                          </div>
                                        </div>
                                      </div>
                                    </label>
                                  </li>
                                </div>
                              );
                            })
                          )
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
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Create Workspace
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
    </div>
  )
}

export default AddMembersToProject
