import React from 'react';
import { useSelector } from 'react-redux';
import { userReducer } from '../../Redux/Slice/userSlice';
import useGreeting from '../../Hooks/useGreeting';


const HomeCmp = () => {
  const userDetails = useSelector(userReducer);
  const greeting = useGreeting();

  return (
    <div className='dark:bg-slate-800 bg-slate-00  h-screen overflow-scroll p-5 bg-gray-200'>
      <div className='dark:bg-slate-900 p-5 rounded bg-white  text-black  dark:text-white'>
          <h1 className='text-center'>{greeting + "  " +userDetails.name}</h1>
      </div>
    </div>
  )
}

export default HomeCmp
