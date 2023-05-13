import io from 'socket.io-client';


const useSocket = (ENDPOINT) => {
  if (!ENDPOINT) return console.log('please provide server ENDPOINT to connect with socket.IO');
  let socket;
  //----------- Connecting the socket
  const connectSocketIo = async () => {
    socket = await io.connect(ENDPOINT);
  }

  //---------join chat room
  const joinChatRoom = async (chatId) => {
    await socket?.emit("joinChat", chatId)
  }

  // ------- to send message
  const newMessage = async (newMessage) => {
    await socket?.emit("newMessage", newMessage)
  }

  // ----listen to new Messages
  const listenToNewMessages = async (callback) => {
    await socket?.on("recievedMessage", (data) => {
      callback(data);
    });
  }

  return [connectSocketIo, joinChatRoom, newMessage, listenToNewMessages];
}

export default useSocket
