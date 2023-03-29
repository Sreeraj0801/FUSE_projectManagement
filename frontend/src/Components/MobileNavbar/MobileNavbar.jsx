import React from 'react'
import {
    BsPlusCircleFill,
    BsFillCalendarFill,
    BsFillSunFill,
  } from "react-icons/bs";
  import { IoMdNotifications } from "react-icons/io";
  import { FaUserAlt } from "react-icons/fa";  
const MobileNavbar = () => {
  return (
    <div className='block md:hidden fixed -bottom-1 left-0 z-50 w-full h-16 text-center  bg-slate-900 '>
        <div className="grid grid-cols-5  ml-4 p-3" >
        <BsPlusCircleFill className="text-4xl p-2 rounded-full   bg-slate-400 hover:bg-slate-900 hover:text-white" />
        <IoMdNotifications className="rounded-full  bg-slate-300 text-4xl p-1 hover:bg-slate-900 hover:text-white" />
        <BsFillCalendarFill className="rounded-lg bg-slate-300 text-4xl p-2 hover:bg-slate-900 hover:text-white" />
        <BsFillSunFill className="rounded-full bg-slate-300 text-4xl p-2 hover:bg-slate-900 hover:text-white" />
        <FaUserAlt className="rounded-full bg-slate-300 text-4xl p-2 hover:bg-slate-900 hover:text-white"/>
      </div>
    </div>
  )
}

export default MobileNavbar
