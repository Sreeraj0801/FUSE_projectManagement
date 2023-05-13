import React, { useEffect, useState } from "react";
import workspaceApi from "../../API/workspaceApi";
import projectApi from "../../API/projectApi";
import { userReducer } from "../../Redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import ChatApi from "../../API/chatApi";
import { format } from "date-fns";
import ModalLoader from '../Modal/ModalLoader'
import ScrollableFeed from "react-scrollable-feed";
import ChatInputBox from "../InputBox/ChatInputBox";
import io from "socket.io-client";

const ChatCmp = () => {
  //const [socket, setSocket] = useState(null);
  const ENDPOINT = import.meta.env.VITE_BASE_URL_SOCKET;
  let socket = io.connect(ENDPOINT);

  const userDetails = useSelector(userReducer);
  const { fetchMyWorkspaces } = workspaceApi();
  const { getAllProjectDetails } = projectApi();
  const { fetchGroupChat, addMessage, fetchMessages } = ChatApi();
  const [workspaces, setWorkSpaces] = useState([]);
  const [projects, setProjects] = useState([]);
  const [chat, setChat] = useState();
  const [messages, setMessages] = useState([]);
  const [selectedProject,setSelectedProject] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [loader, setLoader] = useState({
    fetchProject: false,
    fetchMessages: false,
  });

  //---------------------- @toAdd Connection to socket.IO-----------

  useEffect(() => {
    getAllWorkspaces();
  }, []);

  const getAllWorkspaces = async () => {
    try {
      const results = await fetchMyWorkspaces(
        userDetails.userId,
        userDetails.email
      );
      const { ownedWorkspaces, sharedWorkspaces } = results;
      setWorkSpaces([...ownedWorkspaces, ...sharedWorkspaces]);
    } catch (error) {
      console.log(error);
      toast.error("Error on fetching workspaces");
    }
  };
  // ------------------------------------------------@When workspace is selected ------------------
  const handleWorkspaceSelection = async (e) => {
    const { value } = e.target;
    setLoader({ ...loader, fetchProject: true });
    try {
      const projectDetails = await getAllProjectDetails(
        value,
        userDetails.email,
        userDetails.userId
      );
      setProjects(projectDetails);
      setLoader({ ...loader, fetchProject: false });
    } catch (error) {
      //
    }
  };

  // --------------------------------------------- @When Project is selected ---------------------
  const handleProjectSelection = async (projectId) => {
    try {
      setSelectedProject(true);
      const result = await fetchGroupChat(projectId);
      socket.emit("joinChat", result._id);
      const messagesArray = await fetchMessages(result._id);
      setMessages(messagesArray);
      setMobileView(true);
      setChat(result);
      setSelectedProject(false);
    } catch (error) {
      toast.error(error.msg);
    }
  };

  const handleChatSubmit = async (message) => {
    try {
      const response = await addMessage({
        sender: userDetails.userId,
        content: message,
        chat: chat._id,
      });
      console.log(response);
      await socket.emit("newMessage", response);
      setMessages([...messages, response]);
    } catch (error) {
      toast.error(error.msg);
    }
  };

  //---------@toAdd New Messages----------------------------------
  useEffect(() => {
    socket.on("recievedMessage", (data) => {
      console.log(data.sender._id === userDetails.userId);
      if(data.sender._id !== userDetails.userId){
        setMessages((message) => [...message, data]);
      }
    });
  });

  return (
    <>
      <div className="dark:bg-slate-800 bg-gray-300  h-screen  md:overflow-y-hidden md:grid  grid-cols-4  ">
        <div
          className={`p-5 md:p-8 ${mobileView ? "hidden md:block" : "block"}`}
        >
          <label
            htmlFor="workspace"
            className="block mb-2 text-md md:text-xl font-medium text-gray-900 dark:text-white"
          >
            Select a workspace
          </label>
          <select
            id="workspace"
            name="workspace"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onClick={handleWorkspaceSelection}
          >
            <option selected disabled>
              Choose a workspace
            </option>
            {workspaces.map((workspace) => {
              return (
                <>
                  <option
                    key={workspace._id}
                    value={workspace._id}
                    className=""
                  >
                    {workspace.workspaceName}
                  </option>
                </>
              );
            })}
          </select>
          <div
            className={`max-w-sm p-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-slate-700 mt-12 `}
          >
            {loader.fetchProject ? (
              <div className="flex justify-center items-center h-40">
                <TailSpin height="50" width="100" color="#4fa94d" />
              </div>
            ) : !projects[0] ? (
              <p className="text-red-500 text-lg font-bold">
                No Projects available 🥲
              </p>
            ) : (
              <>
                <p className="dark:text-slate-500 text-gray-500 font-semibold ">
                  select a project
                </p>
                {projects.map((project) => {
                  return (
                    <>
                      <button
                        className="dark:bg-slate-700 w-full rounded p-2 text-start font-semibold text-xl flex gap-2 items-center hover:dark:bg-gray-900 hover:dark:text-gray-500 transition-transform duration-200 transform hover:scale-105 "
                        key={project._id}
                        onClick={() => {
                          handleProjectSelection(project._id);
                        }}
                      >
                        <p className="w-8 h-8 dark:bg-slate-900 dark:text-slate-600 rounded-full items-center flex justify-center">
                          {project.projectName[0]}
                        </p>
                        <span>{project.projectName}</span>
                      </button>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
        {!chat ? (
          <div className=" col-span-3  md:border-l-4  dark:border-slate-600 p-5 flex justify-center items-center ">
            <img
              src="./Images/chat-removebg-preview.png"
              alt=""
              className="h-[40%] md:h-[60%] animate-pulse"
            />
          </div>
        ) : loader.fetchMessages ? (
          <div className="flex justify-center items-center col-span-3  md:border-l-4  dark:border-slate-600 p-5">
            <TailSpin color="orange" />
            <br />
          </div>
        ) : (
          <div
            className={`col-span-3  md:border-l-4  dark:border-slate-600 p-5 w-full ${
              mobileView ? "  block" : "hidden md:block "
            }`}
          >
            <div className=" dark:bg-slate-900 bg-gray-4`00 -m-4">
              <div className="flex md:block">
                <button
                  className="block md:hidden"
                  onClick={() => {
                    setMobileView(false);
                  }}
                >
                  <IoArrowBackCircleOutline className="text-4xl dark:text-white hover:dark:text-gray-400 -mr-9 grow" />
                </button>
                <div className="flex gap- ml-5">
                  <div className="rounded-full w-10 h-10  bg-red-200 mt-2  justify-center items-center font-bold text-xl md:flex hidden">
                    {chat?.chatName[0]}
                  </div>
                  <p className="text-xl dark:text-gray-200 text-slate-900 font-bold px-5 py-2 ">
                    {chat?.chatName}
                  </p>
                </div>
              </div>
              <div className="  rounded-lg md:w-[30%] mx-10 dark:text-gray-500 text-slate-800 pb-2 grid gap-5 truncate text-ellipsis overflow-hidden">
                <p className="flex w-full">
                  {chat?.userDetails.map((user) => {
                    return <p key={user._id}>{user.name} ,</p>;
                  })}
                </p>
              </div>
            </div>

            <div className="message-content h-screen mt-8  w-full ">
              <div className="overflow-y-scroll md:h-[80%] h-[79%] scrollbar-thin ">
                <ScrollableFeed className="scrollbar-thin ">
                  {messages.length ? (
                    messages.map((message) => {
                      return (
                        <div
                          key={message._id}
                          className={`flex ${
                            message.sender._id == userDetails.userId
                              ? "justify-end"
                              : ""
                          }`}
                        >
                          <div
                            className={`rounded block  w-fit md:max-w-[40%]   p-2 mb-10 ${
                              message.sender._id == userDetails.userId
                                ? "dark:bg-green-900 text-end bg-green-500  "
                                : "dark:bg-gray-600 bg-gray-400"
                            }`}
                          >
                            {message.sender._id !== userDetails.userId && (
                              <p className="text-sm dark:text-yellow-400 text-yellow-200 font-semibold">
                                {message?.sender.name}
                              </p>
                            )}
                            <p className="max-w-[100%] truncate dark:text-slate-50 text-gray-200  font-semibold">
                              {message.content}
                            </p>
                            <p className="text-[.80rem] text-end font-semibold dark:text-gray-300">
                              {format(new Date(message.createdAt), "h:mm a")}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="flex justify-center items-center md:h-96">
                      <p className="text-green-300 font-bold md:text-xl animate-pulse">
                        Start sending messages ...
                      </p>
                    </div>
                  )}
                </ScrollableFeed>
              </div>
            </div>
            <div className="absolute md:bottom-2 z-50 bottom-0  md:max-w-[60%] grow w-full -ml-5 md:ml-6   border md:border-0  ">
              <ChatInputBox props={{ handleChatSubmit }} />
            </div>
          </div>
        )}
        {selectedProject && <ModalLoader/>}
      </div>
      <ToastContainer />
    </>
  );
};

export default ChatCmp;
