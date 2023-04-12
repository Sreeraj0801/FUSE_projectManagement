import React from 'react'
import NavBarSkelton from '../Skelton/NavBarSkelton';
import AsideSkelton from '../Skelton/AsideSkelton';
import BodySkelton from '../Skelton/BodySkelton';
const PageLoader = () => {
  return (
    <div className='bg-slate-900'>
      <NavBarSkelton/>
      <div className='flex'>
        <div className='w-65'>
            <AsideSkelton/>
        </div>
        <BodySkelton/>
      </div>
    </div>
  )
}

export default PageLoader
