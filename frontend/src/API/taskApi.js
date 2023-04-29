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
    const getTask  = async (projectId) => {
      try {
        return await axiosPrivate.get(`/task/${projectId}`) ;
      } catch (error) {
        console.log("Error while collecting the tasks",error)
        throw {error}
      }
    }
    const changeStatus = async(userId,taskId,status)=>{
      try {
        return await axiosPrivate.patch(`/task/updateStatus`,{userId,taskId,status});
      } catch (error) {
        console.log("Error while updating the task status ",error)
        throw {error}
      }
    }
  return {
    addTask,
    getTask,
    changeStatus 
  }
}

export default taskApi
