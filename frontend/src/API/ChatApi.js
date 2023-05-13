import useAxiosPrivate from '../Hooks/useAxiosPrivate';

const ChatApi = () => {

  const axiosPrivate = useAxiosPrivate();

  const fetchGroupChat = async (projectId) => {
    try {
      const { data } = await axiosPrivate.get(`/chat/${projectId}`);
      return data;
    } catch (error) {
      throw { error }
    }
  }
  const addMessage = async (details) => {
    try {
      const response = await axiosPrivate.post('/chat/addMessage', details);
      return response.data;
    } catch (error) {
      throw { error }
    }
  }

  const fetchMessages = async (projectId) => {
    try {
      const {data} = await axiosPrivate.get(`/chat/messages/${projectId}`);
      return data ;
    } catch (error) {
     throw {error} 
    }
  }
  return {
    fetchGroupChat,
    addMessage,
    fetchMessages
  }
}


export default ChatApi
