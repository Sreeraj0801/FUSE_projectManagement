import React from 'react'
import { ThreeCircles } from 'react-loader-spinner'
const BasicLoader = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-slate-900'>
<ThreeCircles
  height="100"
  width="100"
  color="orange"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="three-circles-rotating"
  outerCircleColor=""
  innerCircleColor=""
  middleCircleColor=""
/>
    </div>
  )
}

export default BasicLoader
