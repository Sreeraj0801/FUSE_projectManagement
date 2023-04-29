/* eslint-disable react/prop-types */
import React,{useState} from "react";
import TaskDetails from "../../Modal/TaskDetails";


const TaskMiniCard = ({task}) => {
  const [showModal,setShowModal] = useState(false);
  const handleClick = () =>{
    setShowModal(true);
  }
  return (
    <div>
      <>
        <button onClick={()=>{handleClick()}}>
          <div
            className={` p-2  w-72  flex justify-between h-16 overflow-y-auto bg-white   ${task.completed?'border-green-400 border  ' :(task.pending?'border-red-600 border ':'border-gray-200 dark:border-gray-700 border-2')} rounde shadow hover:bg-gray-300 dark:bg-gray-900  dark:hover:bg-gray-700 dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-400  scrollbar-thin`}
          >
            <h5 className="dark:text-slate-400 text-start">{task.task.name}</h5>

            <p
                className={`${
                  task.task.priority === "High"
                    ? "text-red-500"
                    : task.task.priority === "Medium"
                    ? "text-yellow-500"
                    : "dark:text-gray-300 text-slate-700 "
                } font-semibold text-sm`}
              >
                {task.task.priority} &#128681;{" "}
              </p>          </div>
        </button>
      </>
      <TaskDetails data={{showModal,setShowModal,task}}/>
    </div>
  );
};

export default TaskMiniCard;
