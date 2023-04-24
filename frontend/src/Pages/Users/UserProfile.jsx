import React,{lazy,Suspense} from 'react'
import AsideNavbar from "../../Components/AsideNavbar/AsideNavbar";
import Navbar from "../../Components/NavBarCmp/NavBar";
const UserProfileCmp = lazy(()=>import('../../Components/UserProfile/UserProfile'))

const UserProfile = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    <AsideNavbar />
    <div className="w-full">
      <Navbar />
      <Suspense fallback={"loadidng..."}>
       <UserProfileCmp/>
      </Suspense>
    </div>
  </div>
  )
}

export default UserProfile



