import React ,{lazy,Suspense} from 'react'
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from '../Components/ErrorBoundries/ErrorBoundries';
import ThreeCirclesLoader from '../Components/Loders/ThreeCirclesLoader';

const NewProjectPage = lazy(()=>import('../Pages/Users/NewProjectPage'));
const ProjectPage = lazy(()=>import('../Pages/Users/ProjectPage'))

const Project = () => {
  return (
    <div>
{/* Route for  New Project  */}
      <Routes>
        <Route exact path='project/create' element={
        <Suspense fallback={<ThreeCirclesLoader/>}>
          <ErrorBoundary >
            <NewProjectPage/>
          </ErrorBoundary>
        </Suspense>}/>
{/* Route for  New Project  */}
        <Route exact path='/project' element={
        <Suspense fallback={<ThreeCirclesLoader/>}>
          <ErrorBoundary >
            <ProjectPage/>
          </ErrorBoundary>
        </Suspense>}/>
      </Routes>
    </div>
  )
}

export default Project
