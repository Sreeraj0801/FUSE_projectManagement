/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { userReducer } from "../../Redux/Slice/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import CommentBox from "../TaskCmp/Cards/CommentBox";

import {
  BsCheckCircle,
  BsImages,
  BsSendFill,
  BsPersonFill,
  BsFillCalendarDateFill,
} from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { GoComment } from "react-icons/go";
import { HiStatusOnline } from "react-icons/hi";
import taskApi from "../../API/taskApi";
import { setTaskStatus } from "../../Redux/Slice/taskSlice";
import ModalLoader from "./ModalLoader";

const TaskDetails = ({ data }) => {
  const userDetails = useSelector(userReducer);
  const dispatch = useDispatch();
  const { changeStatus } = taskApi();
  const [loader, setLoader] = useState(false);
  const arr = [1, 2, 3, 4, 5, 6];
  const handleModalClose = () => {
    data.setShowModal(false);
  };
  console.log(data);
  const handleChangeStatus = async (e) => {
    try {
      if (userDetails.userId && data.task.task._id && e.target.value) {
        setLoader(true);
        await changeStatus(
          userDetails.userId,
          data.task.task._id,
          e.target.value
        );
        await dispatch(setTaskStatus({ status: e.target.value }));
        setLoader(false);
        data.task.fetchTask();
        // data.setShowModal(false);
      } else toast.error("something went wrong");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      id="staticModal"
      data-modal-backdrop="static"
      tabIndex="-1"
      aria-hidden="true"
      style={{ backgroundColor: " rgba(1, 1, 34, 0.6)" }}
      className={`fixed top-0 left-0 right-0 z-50  w-full h-full bg-opacity-50 backdrop-filter backdrop-blur-sm   items-center justify-center ${
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
              className="float-right text-white bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={handleChangeStatus}
              value="completed"
            >
              Mark Complete
            </button>
          </div>

          <div className="md:grid grid-cols-3  m-4">
            <div className=" block h-96 col-span-2 overflow-y-scroll dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-400  scrollbar-thin pt-8 md:p-8 md:gap-3">
              <section className="Details dark:text-slate-300 text-gray-600 grid gap-8 mb-20">
                <div>
                  <section className="flex gap-3 text-slate-500 dark:text-slate-400">
                    <CgNotes className="text-2xl" />
                    <h1 id="name" className="name text-xl  font-bold  ">
                      Discription
                    </h1>
                  </section>
                  <p className="max-h-20 overflow-y-scroll dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-400 scrollbar-thin text-md flex ">
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
                  <section className="flex md:gap-3 text-slate-500 dark:text-slate-400 ">
                    <BsPersonFill className="text-2xl" />
                    <h1 id="name" className="name text-xl   font-semibold  ">
                      Assignee
                    </h1>
                  </section>
                  <div className="grid  gap-3 max-h-36 overflow-y-scroll ">
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
                      <CommentBox/>
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
                    <div className="flex gap-3 text-slate-500 dark:text-slate-400 text-xl font-bold">
                      <BsImages className="text-2xl" />
                      <label htmlFor="Images">Images</label>
                    </div>
                    <section className="flex gap-3  max-h-56 overflow-scroll scrollbar-thumb-gray-400 scrollbar-thin items-center">
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
                  <div className="-mb-12 md:mb-0">
                    <section className="flex gap-3 text-slate-500 dark:text-slate-400">
                      <GoComment className="text-3xl" />
                      <h1 id="name" className="name text-xl  font-bold  ">
                        Comments
                      </h1>
                    </section>
                    <div className="max-h-52 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 md:p-5 grid gap-3 ">
                      {arr.map((a) => {
                        return (
                          <div
                            key={a}
                            className=" dark:border-slate-500 border-gray-400 grid gap-1 p-3"
                          >
                            <section className="header flex gap-5">
                              <div className="rounded-full bg-slate-900 w-8 h-8 flex justify-center items-center text-white">
                                C
                              </div>
                              <h1>lorem epsum</h1>
                              <h1>1 sec ago</h1>
                            </section>
                            <section className="text-left px-5 dark:text-slate-400">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                            </section>
                            <hr />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
              <div className="block  h-20 bg-slate-700   border-slate-400 border-t-2 backdrop-blur-sm p-2 md:absolute bottom-0 sticky w-[100%]   md:w-[60%] z-10 ">
                <div className="flex gap-5">
                  <div className="rounded-full bg-slate-900 w-8 h-8 p-5 md:flex justify-center items-center text-white hidden ">
                    C
                  </div>
                  <input
                    type="text"
                    id="helper-text"
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border p-3  border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-[32rem] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Add comment ..."
                  />
                  <button className="bg-green-200 rounded-lg px-3 font-bold">
                    <span className="hidden md:block">Submit</span>
                    <BsSendFill className="md:hidden bloc" />
                  </button>
                </div>
              </div>
            </div>
            <div className="  border-l-8 border-slate-600 md:grid hidden">
              <section className="items-start m-3 ">
                <div>
                  <section className="flex md:gap-3 text-slate-500 dark:text-slate-400 ">
                    <BsPersonFill className="md:text-3xl text-lg" />
                    <h1
                      id="name"
                      className="name md:text-xl text-sm  font-semibold  "
                    >
                      Assignee
                    </h1>
                  </section>
                  <div className="grid mt-5 gap-3 max-h-36 overflow-y-scroll">
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
