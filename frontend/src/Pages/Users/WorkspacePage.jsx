import React from 'react'
import AsideNavbar from "../../Components/AsideNavbar/AsideNavbar";
import Navbar from "../../Components/NavBarCmp/NavBar";
import WorkspaceCmp from '../../Components/WorkspaceCmp/WorkspaceCmp';
const WorkspacePage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    <AsideNavbar />
    <div className="w-full">
      <Navbar />
      <WorkspaceCmp/>
    </div>
  </div>
  )
}

export default WorkspacePage
