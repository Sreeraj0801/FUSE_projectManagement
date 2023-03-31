import React from 'react';
import { useSelector } from 'react-redux';
import { userReducer } from '../../Redux/Slice/userSlice';
import useAxiosPrivateInstance from '../../Hooks/useAxiosPrivate';


const Test = () => {

    const instance = useAxiosPrivateInstance();
const handler = async ()=>{
    try {
        instance.get('/testCase')
    } catch (error) {
      console.log(error);  
    }
}

    const userDetails = useSelector(userReducer)
  return (
    <div className='text-slate-900'>
<div className='bg-lime-300 m-5 rounded p-5'>
<h1>{userDetails.name}</h1>
        <h1>{userDetails.email}</h1>
        <h1>{userDetails.accessToken}</h1>
</div>
        <button className='bg-blue-900 rounded-lg m-5 p-5 text-white' onClick={handler}>Request new accesToken</button>    
    </div>
  )
}

export default Test
