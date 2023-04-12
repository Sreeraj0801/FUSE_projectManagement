import React from 'react'
import AsideNavbar from "../../Components/AsideNavbar/AsideNavbar";
import Navbar from "../../Components/NavBarCmp/NavBar";
import ProjectCmp from '../../Components/ProjectCmp/ProjectCmp';
const ProjectPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    <AsideNavbar />
    <div className="w-full">
      <Navbar />
      <ProjectCmp/>
    </div>
  </div>
  )
}

export default ProjectPage
