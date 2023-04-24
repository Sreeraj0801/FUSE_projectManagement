/* eslint-disable react-hooks/rules-of-hooks */
import useAxiosPrivate from '../Hooks/useAxiosPrivate';

const taskApi = () => {
 const axiosPrivate = useAxiosPrivate();
    const addTask = async (details)=>{
        try {
            return await axiosPrivate.post('/task/create',details)
        } catch (error) {
            console.log("Error while adding new Task");
            if(error.response.data.error.msg) throw(error.response.data.error.msg)
            throw {error}
        }
    } 
  return {
    addTask
  }
}

export default taskApi
