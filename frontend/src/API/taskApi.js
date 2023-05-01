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
    const postComment = async(userId,userName,taskId,comment) =>{
      try {
        return await axiosPrivate.post('/task/postComment',{userId,userName,taskId,comment});
      } catch (error) {
        console.log("Error while posting comment ",error)
        throw {error}
      }
    }
    const fetchAllComments = async(taskId) =>{
      try {
        return await axiosPrivate.get(`/task/comments/${taskId}`)
      } catch (error) {
        console.log("Error while fetching all comment ",error)
        throw {error} 
      }
    }
    const deleteTask = async(taskId) =>{
      try {
        return await axiosPrivate.delete(`/task/delete/${taskId}`);
      } catch (error) {
        console.log("Error while deleting task ",error)
       throw {error} 
      }
    }
    const getProgression = async(projectId) =>{
      try {
        if(projectId){
          const {data} = await axiosPrivate.get(`/task/progress/${projectId}`);
          return data ;
        }
      } catch (error) {
        console.error("Error from getting project progression  api ",error);
       throw {error}
      }
    }
  return {
    addTask,
    getTask,
    changeStatus,
    postComment,
    fetchAllComments ,
    deleteTask,
    getProgression
  }
}

export default taskApi
