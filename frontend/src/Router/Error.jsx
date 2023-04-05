import React from 'react'
import { Route,Routes } from 'react-router-dom'
const Error = () => {
  return (
    <div>
      <Routes>
            <Route exact path="*" element={<>404 page not found</>} />
      </Routes>
    </div>
  )
}

export default Error
