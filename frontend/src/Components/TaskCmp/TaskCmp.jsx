/* eslint-disable react/prop-types */
import React from "react";
import NewTask from "../Modal/NewTask";

const TaskCmp = ({ projectId }) => {
  return (
    <div className=" dark:bg-slate-800 bg-gray-200  lg:p-8 p-3  overflow-y-auto ">
      <div className="flex justify-end">
        {projectId ? <NewTask projectId={projectId} /> : ""}
      </div>
    </div>
  );
};

export default TaskCmp;
