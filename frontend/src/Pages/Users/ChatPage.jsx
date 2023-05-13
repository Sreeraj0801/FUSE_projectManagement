import React from "react";
import AsideNavbar from "../../Components/AsideNavbar/AsideNavbar";
import Navbar from "../../Components/NavBarCmp/NavBar";
import ChatCmp from "../../Components/ChatCmp/ChatCmp";
const ChatPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <AsideNavbar />
      <div className="w-full">
        <Navbar />
        <ChatCmp />
      </div>
    </div>
  );
};

export default ChatPage;
