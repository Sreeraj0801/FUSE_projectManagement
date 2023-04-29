/* eslint-disable react-hooks/rules-of-hooks */
import useAxiosPrivate from '../Hooks/useAxiosPrivate';

const projectApi = () => {
    const axiosPrivate = useAxiosPrivate();
    const createProject = async (details) => {
        try {
          const {data} = await axiosPrivate.post('/project/create',details);
          return data
        } catch (error) {
            if(error.response.data.error.msg) throw {msg:error.response.data.error.msg}
            console.log(error);
            throw {msg:"something bad happened"}
        }
      }

      const getAllProjectDetails = async (workspaceId,email,userId) =>{
        try {
         const {data} = await axiosPrivate.get(`/project/${workspaceId}/${email}/${userId}`);
         return data ;
        } catch (error) {
          throw {error}
        }
      }
      const getProjectDetaiils = async (projectId) => {
        try {
          const {data} = await axiosPrivate.get(`/project/details/${projectId}`);
          return data ;
        } catch (error) {
          console.error("Error from getProjectDetails api ",error);
          throw {msg:"Something went wrong"}
        }
      } 
      const getRegisterdProjectMembers = async (projectId) => {
        try {
          const {data} = await axiosPrivate.get(`/project/members/${projectId}`);
          return data
        } catch (error) {
          console.error("Error from getRegisterdProjectMembers api ",error);
          throw {error}
        }
      }
  return {
    createProject,
    getAllProjectDetails,
    getProjectDetaiils,
    getRegisterdProjectMembers
  }
}

export default projectApi
