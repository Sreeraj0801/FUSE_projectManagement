/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { userReducer } from "../../Redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import CommentBox from "../Quil/CommentBox";
import { GrCompliance } from "react-icons/gr";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import moment from "moment";
import {
  BsCheckCircle,
  BsImages,
  BsPersonFill,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { GoComment } from "react-icons/go";
import { HiStatusOnline } from "react-icons/hi";
import taskApi from "../../API/taskApi";
import ModalLoader from "./ModalLoader";
import Swal from "sweetalert2";

const TaskDetails = ({ data }) => {
  const userDetails = useSelector(userReducer);
  const { changeStatus, postComment, fetchAllComments,deleteTask } = taskApi();
  const [loader, setLoader] = useState(false);
  const [commentLoader, setCommentLoader] = useState(false);
  const [comments, setComments] = useState([]);
  const [showDetails, setShowDetails] = useState({
    discription: true,
    images: false,
    comments: false,
    assignee: false,
  });
  const handleModalClose = () => {
    data.setShowModal(false);
  };

  const handleShowDetails = (name) => {
    setShowDetails({ ...showDetails, [name]: !showDetails[name] });
  };
  const handleChangeStatus = async (e) => {
    try {
      if (userDetails.userId && data.task.task._id && e.target.value) {
        setLoader(true);
        await changeStatus(
          userDetails.userId,
          data.task.task._id,
          e.target.value
        );
        setLoader(false);
        data.task.fetchTask();
      } else toast.error("something went wrong");
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async (comment) => {
    try {
      if (userDetails.userId && data.task.task._id && comment) {
        await postComment(
          userDetails.userId,
          userDetails.name,
          data.task.task._id,
          comment
        );
        await getAllComments();
      } else if (!comment) {
        toast.error("empty comment");
      }
    } catch (error) {
      toast.error(error.msg);
    }
  };

  const getAllComments = async () => {
    try {
      const response = await fetchAllComments(data.task.task._id);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllComments();
  }, []);

  const handleDeleteTask = async ()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async(result) => {

      if (result.isConfirmed) {
        await deleteTask(data.task.task._id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
          )
        data.task.fetchTask();
      }
    })
  }
  return (
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      style={{ backgroundColor: " rgba(1, 1, 34, 0.6)" }}
      className={`fixed h-full top-0 left-0 right-0 z-50  w-full bg-opacity-50 backdrop-filter backdrop-blur-sm   items-center justify-center ${
        data.showModal ? "flex " : "hidden"
      }`}
    >
      <div className="relative w-full max-w-6xl max-h-full">
        <div className="relative bg-gray-300 rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Task Details
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="staticModal"
              onClick={handleModalClose}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="m-4 flex justify-between md:px-5 px-2 border-b border-slate-800">
            <div className="flex gap-2 dark:text-gray-100 text-slate-700">
              <h1
                id="name"
                className={`name text-xl  font-bold  ${
                  data.task.task.status == "completed" ? "text-green-400 " : ""
                }`}
              >
                {data.task.task.name}
              </h1>
              <BsCheckCircle
                className={`text-2xl ${
                  data.task.task.status == "completed" ? "text-green-400 " : ""
                }`}
              />
            </div>
            <div>
              <p
                className={`${
                  data.task.task.priority === "High"
                    ? "text-red-500"
                    : data.task.task.priority === "Medium"
                    ? "text-yellow-500"
                    : "dark:text-gray-300 text-slate-700 "
                } font-extrabold text-xl`}
              >
                {data.task.task.priority} &#128681;{" "}
              </p>
            </div>
            <button
              type="button"
              className="w-fit float-right text-white bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleChangeStatus}
              value="completed"
            >
              <span className="block md:hidden text-xl">
                <GrCompliance />
              </span>
              <span className="hidden md:block ">Mark Complete</span>
            </button>
          </div>

          <div className="md:grid grid-cols-3  m-4">
            <div className=" block h-96 col-span-2 overflow-y-scroll dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-400  scrollbar-thin pt-8 md:p-8 md:gap-3">
              <section className="Details dark:text-slate-300 text-gray-600 grid gap-8 mb-20">
                <div>
                  <section className="flex justify-between text-slate-500 dark:text-slate-400">
                    <div className="flex gap-3">
                      <CgNotes className="text-2xl" />
                      <h1 id="name" className="name text-xl  font-bold  ">
                        Discription
                      </h1>
                    </div>
                    <BsFillArrowDownCircleFill
                      className={`text-3xl ${
                        showDetails.discription ? "rotate-180 " : ""
                      }  duration-300`}
                      onClick={() => handleShowDetails("discription")}
                    />
                  </section>
                  <p
                    className={`overflow-y-scroll dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-400 scrollbar-thin text-md flex ${
                      showDetails.discription ? "max-h-20 " : "h-0 "
                    } delay-100  duration-300`}
                  >
                    {data.task.task.discription}{" "}
                  </p>
                </div>
                <div className="md:hidden ">
                  <section className="flex gap-3 text-slate-500 dark:text-slate-400 ">
                    <BsFillCalendarDateFill className="md:text-3xl text-2xl" />
                    <h1 id="name" className="name text-xl  font-semibold  ">
                      Date
                    </h1>
                  </section>
                  <p className="dark:text-slate-50  font-extrabold text-sm md:text-lg text-start mt-2">
                    {data.task.task.from}{" "}
                    <span className="text-black mx-5">TO</span>{" "}
                    {data.task.task.to}
                  </p>
                </div>
                <div className="md:hidden">
                  <section className="flex justify-between text-slate-500 dark:text-slate-400 ">
                    <div className="flex gap-3">
                      <BsPersonFill className="text-2xl" />
                      <h1 id="name" className="name text-xl   font-semibold  ">
                        Assignee
                      </h1>
                    </div>
                    <BsFillArrowDownCircleFill
                      className={`text-3xl ${
                        showDetails.assignee ? "rotate-180 " : ""
                      }  duration-300`}
                      onClick={() => handleShowDetails("assignee")}
                    />
                  </section>
                  <div
                    className={`grid mt-5 gap-3  overflow-y-scroll ${
                      showDetails.assignee ? "max-h-36" : "h-0 "
                    } duration-300`}
                  >
                    {!data.task.task?.assigneeDetails[0] ? (
                      <p>Unassigned</p>
                    ) : (
                      data.task.task?.assigneeDetails.map((assignee) => {
                        return (
                          <div
                            key={assignee._id}
                            className=" dark:border-slate-500 border-gray-400  flex gap-2 mt-2 "
                          >
                            <div className="flex  dark:bg-slate-200 h-8 w-8 rounded-full  justify-center items-center text-slate-900    text-xl">
                              {assignee.name[0]}
                            </div>
                            <div className="text-start">
                              <h1 className="text-md text-slate-200 ">
                                {assignee.name}
                              </h1>
                              <h1 className="text-sm text-slate-400 -mt-2 text- overflow-hidden  whitespace-nowrap truncate	text-ellipsis md:max-w-full max-w-[100%] ">
                                {assignee.email}
                              </h1>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                <div className="block md:hidden">
                  <section className="flex md:gap-3 text-slate-500 dark:text-slate-400">
                    <HiStatusOnline className="md:text-3xl text-3xl mr-2 " />
                    <h1
                      id="name"
                      className="name md:text-xl text-xl  font-semibold  "
                    >
                      Status
                    </h1>
                  </section>

                  <div className=" grid gap-3 w-[90%] md:w-full  ">
                    <p
                      className={` font-extrabold text-start  ${
                        data.task.task.status == "completed"
                          ? "text-green-400 "
                          : data.task.task.status == "pending"
                          ? "text-yellow-400"
                          : "text-gray-50"
                      }`}
                    >
                      {data.task.task.status}
                    </p>

                    <select
                      id="countries"
                      className=" bg-gray-50 border w-full font-bold border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChangeStatus}
                    >
                      <option selected>{data.task.task.status}</option>
                      {data.task.task.status != "pending" && (
                        <option value="pending">pending</option>
                      )}
                      {data.task.task.status != "completed" && (
                        <option value="completed">completed</option>
                      )}
                      {data.task.task.status != "ongoing" && (
                        <option value="ongoing">ongoing</option>
                      )}
                    </select>
                  </div>
                </div>

                {data.task.task?.images ? (
                  <div className="grid gap-3">
                    <div className="flex justify-between text-slate-500 dark:text-slate-400 text-xl font-bold">
                      <div className="flex gap-3 ">
                        <BsImages className="text-2xl" />
                        <label htmlFor="Images">Images</label>
                      </div>
                      <BsFillArrowDownCircleFill
                        className={`text-3xl ${
                          showDetails.images ? "rotate-180 " : ""
                        }  duration-300`}
                        onClick={() => handleShowDetails("images")}
                      />
                    </div>
                    <section
                      className={`flex gap-3  duration-300 overflow-scroll scrollbar-thumb-gray-400 scrollbar-thin items-center ${
                        showDetails.images ? "max-h-56" : "h-0 "
                      } `}
                    >
                      {data.task.task.images.map((image) => {
                        return (
                          <img
                            key={image}
                            src={image}
                            alt="Images"
                            className="h-52"
                          />
                        );
                      })}
                    </section>
                  </div>
                ) : (
                  ""
                )}

                <div>
                  <div className="-mb-12 md:mb-0 h-72 ">
                    <section className="flex justify-between text-slate-500 dark:text-slate-400">
                      <div className="flex gap-3">
                        <GoComment className="text-3xl" />
                        <h1 id="name" className="name text-xl  font-bold ">
                          Comments
                        </h1>
                      </div>
                      <BsFillArrowDownCircleFill
                        className={`text-3xl ${
                          showDetails.comments ? "rotate-180 " : ""
                        }  duration-300`}
                        onClick={() => handleShowDetails("comments")}
                      />
                    </section>

                    <div
                      className={`${
                        showDetails.comments
                          ? "max-h-72   duration-300 "
                          : "hidden    duration-300"
                      } overflow-y-scroll border border-slate-600 rounded-lg scrollbar-thin scrollbar-thumb-gray-400 md:p-5 grid gap-3`}
                    >
                      {comments.map((comment) => {
                        const isLink = comment.comment.startsWith("<a");
                        const isCode = comment.comment.startsWith("<code>");

                        return (
                          <div
                            key={comment._id}
                            className=" dark:border-slate-500 border-gray-400 grid gap-1 p-3"
                          >
                            <section className="header flex gap-5 ">
                              <div className="rounded-full bg-slate-900 w-8 h-8 flex justify-center items-center text-white  ">
                                {comment.reporterName[0] || "l"}
                              </div>
                              <h1>{comment.reporterName}</h1>

                              <h1>{moment(comment.time).fromNow()}</h1>
                            </section>
                            <section className="text-left px-5 ">
                              <div className="comment">
                                {
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: comment.comment,
                                    }}
                                  />
                                }

                                            <style>{`
                                                pre {
                                                  background-color: black;
                                                  color: white;
                                                  padding: 10px;
                                                }
                                                a {
                                                  color: #5A67D8;
                                                  text-decoration: underline;
                                                  
                                                }
                                                code {
                                                  background:black;
                                                  color:white;
                                                  padding:5px;
                                                  border-radius:5px;
                                                }
                                              `}
                                            </style>
                              </div>{" "}
                            </section>
                            <hr />
                          </div>
                        );
                      })}
                      <div className="block  h-fit sticky  z-10 -bottom-5 bg-gray-300 dark:bg-gray-700 pt-2">
                        <div className="flex gap-5 ">
                          <div className="md:flex justify-center items-center hidden">
                            <div className="rounded-full bg-slate-900 w-8 h-8 p-5 md:flex justify-center items-center text-white">
                              C
                            </div>
                          </div>
                          <CommentBox
                            props={{
                              commentLoader,
                              setCommentLoader,
                              addComment,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="  border-l-8 border-slate-600 md:grid hidden">
              <section className="items-start m-3 ">
                <div>
                  <section className="flex justify-between text-slate-500 dark:text-slate-400 ">
                    <div className="flex md:gap-3 ">
                      <BsPersonFill className="md:text-3xl text-lg" />
                      <h1
                        id="name"
                        className="name md:text-xl text-sm  font-semibold  "
                      >
                        Assignee
                      </h1>
                    </div>
                    <BsFillArrowDownCircleFill
                      className={`text-3xl ${
                        showDetails.assignee ? "rotate-180 " : ""
                      }  duration-300`}
                      onClick={() => handleShowDetails("assignee")}
                    />
                  </section>
                  <div
                    className={`grid mt-5 gap-3  overflow-y-scroll ${
                      showDetails.assignee ? "max-h-36  top-20 " : "h-0 "
                    } duration-300`}
                  >
                    {!data.task.task?.assigneeDetails[0] ? (
                      <p>Unassigned</p>
                    ) : (
                      data.task.task?.assigneeDetails.map((assignee) => {
                        return (
                          <div
                            key={assignee._id}
                            className=" dark:border-slate-500 border-gray-400  flex gap-2"
                          >
                            <div className=" md:flex  hidden dark:bg-slate-200 bg-slate-800 h-10 w-10 rounded-full  justify-center items-center text-slate-50 dark:text-black   text-xl">
                              {assignee.name[0]}
                            </div>
                            <div className="float-left text-start">
                              <h1 className="md:text-lg dark:text-slate-200 text-slate-800  text-sm">
                                {assignee.name}
                              </h1>
                              <h1 className="text-sm text-slate-400 -mt-2 text- overflow-hidden  whitespace-nowrap truncate	text-ellipsis md:max-w-full max-w-[5rem] ">
                                {assignee.email}
                              </h1>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                <div>
                  <section className="flex md:gap-3 text-slate-500 dark:text-slate-400 mt-10">
                    <BsFillCalendarDateFill className="md:text-3xl text-lg" />
                    <h1
                      id="name"
                      className="name md:text-xl text-sm  font-semibold  "
                    >
                      Date
                    </h1>
                  </section>
                  <div className="m-3 md:flex gap-8">
                    <h1 className="text-start dark:text-slate-200 font-semibold ">
                      from{" "}
                    </h1>
                    <p className="dark:text-slate-50  font-extrabold text-sm md:text-lg">
                      {data.task.task.from}
                    </p>
                  </div>
                  <div className="m-3 md:flex gap-12">
                    <h1 className="text-start dark:text-slate-200 font-semibold md:text-lg text-x s">
                      To{" "}
                    </h1>
                    <p className="dark:text-slate-50  font-extrabold">
                      {data.task.task.to}
                    </p>
                  </div>
                </div>
                <div>
                  <section className="flex md:gap-3 text-slate-500 dark:text-slate-400 mt-10">
                    <HiStatusOnline className="md:text-3xl text-lg" />
                    <h1
                      id="name"
                      className="name md:text-xl text-sm  font-semibold  "
                    >
                      Status
                    </h1>
                  </section>
                  <div className=" grid gap-3 w-fit md:w-full ">
                    <p
                      className={` font-extrabold text-start  ${
                        data.task.task.status == "completed"
                          ? "text-green-400 "
                          : data.task.task.status == "pending"
                          ? "text-yellow-400"
                          : "text-gray-50"
                      }`}
                    >
                      {data.task.task.status}
                    </p>

                    <select
                      id="countries"
                      className=" bg-gray-50 border font-bold border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChangeStatus}
                    >
                      <option selected>{data.task.task.status}</option>
                      {data.task.task.status != "pending" && (
                        <option value="pending">pending</option>
                      )}
                      {data.task.task.status != "completed" && (
                        <option value="completed">completed</option>
                      )}
                      {data.task.task.status != "ongoing" && (
                        <option value="ongoing">ongoing</option>
                      )}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end mt-5 ">
                  <button className="p-2 font-bold bg-red-600 rounded-xl" onClick={handleDeleteTask}>Delete </button>
                </div>
              </section>
            </div>
          </div>
        </div>
        {loader && <ModalLoader />}
      </div>
      <ToastContainer />
    </div>
  );
};

export default TaskDetails;
