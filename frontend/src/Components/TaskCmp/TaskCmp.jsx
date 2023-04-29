/* eslint-disable react/prop-types */
import React, { useState } from "react";
import NewTask from "../Modal/NewTask";
import taskApi from "../../API/taskApi";
import { useEffect } from "react";
import TaskMainCards from "./Cards/TaskMainCards";

const TaskCmp = ({ projectId }) => {
  const { getTask } = taskApi();
  const [ongoingTask, setOngoingTask] = useState([]);
  const [pendingTask, setPendingTask] = useState([]);
  const [completedTask, setCompletedTask] = useState([]);

  const fetchTask = async () => {
    try {
      const { data } = await getTask(projectId);
      setOngoingTask(
        data.filter((task) => {
          return task.status === "ongoing";
        })
      );
      setPendingTask(
        data.filter((task) => {
          return task.status === "pending";
        })
      );
      setCompletedTask(
        data.filter((task) => {
          return task.status === "completed";
        })
      );
      console.log(completedTask);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <div className=" dark:bg-slate-800 bg-gray-200  lg:p-8   p-3   ">
      <div className="flex justify-end">
        {projectId ? (
          <NewTask data={{ projectId,fetchTask }} />
        ) : (
          ""
        )}
      </div>
      <>
        <div className="grid lg:grid-cols-3 gap-2  mb-36 lg:mb-0 ">
          <TaskMainCards
            data={{ heading: `TASK (${ongoingTask.length})`, ongoingTask,fetchTask }}
          />

          <TaskMainCards
            data={{
              heading: `COMPLETED (${completedTask.length})`,
              completedTask,
              fetchTask
            }}
          />
          <TaskMainCards
            data={{ heading: `PENDING (${pendingTask.length})`, pendingTask,fetchTask }}
          />
        </div>
        <div></div>
      </>
    </div>
  );
};

export default TaskCmp;
