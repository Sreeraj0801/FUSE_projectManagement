import React from 'react'
import AsideNavbar from '../../Components/AsideNavbar/AsideNavbar';
import NavBar from '../../Components/NavBarCmp/NavBar';
import HomeCmp from '../../Components/HomeCmp/HomeCmp';
const HomePage = () => {
  return (
    <div className='flex h-screen overflow-hidden'>
      <AsideNavbar/>
      <div className='w-full'>
      <NavBar/>
      <HomeCmp/>
      </div>
    </div>
      )
}

export default HomePage
