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
  return {
    createProject,
  }
}

export default projectApi
