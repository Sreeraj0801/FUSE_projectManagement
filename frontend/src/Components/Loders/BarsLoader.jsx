import React from 'react'
import { Bars } from 'react-loader-spinner'

const BarsLoader = () => {
  return (
<div className='flex justify-center items-center h-screen bg-slate-900'>
      <Bars 
  height="100"
  width="100"
  color="orange"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
    </div>
  )
}

export default BarsLoader
