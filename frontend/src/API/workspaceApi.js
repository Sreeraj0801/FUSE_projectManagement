/* eslint-disable react-hooks/rules-of-hooks */
import useAxiosPrivate from '../Hooks/useAxiosPrivate';
const workspaceApi = () => {
    const axiosPrivate = useAxiosPrivate();
    const createWorkspace = async (details) =>{
        try {
            return await  axiosPrivate.post('/workspace/create',details);
        } catch (error) {
            if(error.response.data.message) throw (error.response.data.message) ;
            if(error.response.data) throw(error.response.data)
        }
    }
    const getUserWorkspace = async (userId) => {
      try {
        return await axiosPrivate.get(`/workspace/${userId}`)
      } catch (error) {
      if (error.response.data.error.message) throw (error.response.data.error.message);
      console.log(error);
      }
    }

    const addUserToWorkspace = async (details) => {
      try {
        return await axiosPrivate.post('/workspace/invite',details)
      } catch (error) {
        console.log(error);
        throw {msg:"something went wrong"}
      }
    }

    const verifyWorkspaceInvitationMail = async (workspaceId,email,choice) =>{
      try {
        return await axiosPrivate.get(`/workspace/verifyUserinvitationEmail/${workspaceId}/${email}/${choice}`)
      } catch (error) {
        throw {msg:error.response.data.error.message}
      }
    }
    const getAllWorkspaceMembers = async (workspaceId) => {
      try {
       const {data} =  await axiosPrivate.get(`/workspace/members/${workspaceId}`) ;
       return data;
      }catch (error) {
        console.log(error);
        throw {error}
      }
    }

  return {
    createWorkspace,
    getUserWorkspace,
    addUserToWorkspace,
    verifyWorkspaceInvitationMail,
    getAllWorkspaceMembers,
    
  };
}

export default workspaceApi
