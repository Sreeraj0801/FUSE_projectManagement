import React from 'react'

function MainLogo() {
  return (
    <div>
        <div className="flex items-center">
            <img
              className="h-10  md:h-14 w-auto"
              src="./Images/FuseMain.png"
              alt="FUSE"
            />
            <h1 className="font-mono md:text-4xl text-3xl  font-semibold dark:text-white text-gray-800  antialiased ">FUSE</h1>
          </div>
    </div>
  )
}

export default MainLogo
