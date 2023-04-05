import React from 'react'
import { Routes, Route } from "react-router-dom";


import NewProjectPage from '../Pages/Users/NewProjectPage';

const Project = () => {
  return (
    <div>
      <Routes>
        <Route exact path='project/create' element={<NewProjectPage/>}/>
      </Routes>
    </div>
  )
}

export default Project
