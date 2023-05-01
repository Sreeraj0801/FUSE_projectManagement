/* eslint-disable react/prop-types */
import React from "react";
import TaskMiniCard from "./TaskMiniCard";


const TaskMainCards = ({data}) => {
  
  const {fetchTask} = data;
  return (
    <div>
      <div className=" p-6 bg-zinc-200 border border-gray-50  rounded-lg shadow-md shadow-gray-100 dark:shadow-gray-900 dark:bg-gray-800 dark:border-gray-700 h-max-96   scrollbar-thumb-gray-900  scrollbar-thin ">
        <h1 className="text-gray-700 dark:text-gray-300 text-2xl text-center font-extrabold m-2 sticky ">
          {data?.heading}
        </h1>
        {data.ongoingTask && (
          <div className="overflow-y-scroll scrollbar-thumb-gray-900  scrollbar-thin  py-3">
            <div className="max-h-96 grid  gap-3 ">
            {data.ongoingTask.map((task) => {
              return (
                <button key={task._id}>
                  <TaskMiniCard task={{task,ongoing:true,fetchTask}} />
                </button>
              );
            })}
            </div>
          </div>
        )}
               {data.pendingTask && (
           <div className="max-h-96 grid gap-3 overflow-y-scroll scrollbar-thumb-gray-900  scrollbar-thin ">
           {data.pendingTask.map((task) => {
              return (
                <button key={task._id}>
                  <TaskMiniCard task={{task,pending:true,fetchTask}} />
                </button>
              );
            })}
           </div>
        )}
        {data.completedTask && (
           <div className="max-h-96 grid gap-3 overflow-y-scroll scrollbar-thumb-gray-900  scrollbar-thin ">
           {data.completedTask.map((task) => {
              return (
                <button key={task._id}>
                  <TaskMiniCard task={{task,completed:true,fetchTask}} />
                </button>
              );
            })}
           </div>
        )}
      </div>
    </div>
  );
};

export default TaskMainCards;
