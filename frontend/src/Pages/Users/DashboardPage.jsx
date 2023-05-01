import React from "react";
import AsideNavbar from "../../Components/AsideNavbar/AsideNavbar";
import Navbar from "../../Components/NavBarCmp/NavBar";
import DashboardComp from "../../Components/Dashboard/DashboardComp";
const DashboardPage = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <AsideNavbar />
        <div className="w-full">
          <Navbar />
          <DashboardComp />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
