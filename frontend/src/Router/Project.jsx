import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundries/ErrorBoundries";
import ThreeCirclesLoader from "../Components/Loders/ThreeCirclesLoader";

import { useSelector } from "react-redux";
import { userReducer } from "../Redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ErrorPage from "../Pages/Users/ErrorPage";

const NewProjectPage = lazy(() => import("../Pages/Users/NewProjectPage"));
const ProjectPage = lazy(() => import("../Pages/Users/ProjectPage"));

const Project = () => {
  const navigate = useNavigate();
  const userDetails = useSelector(userReducer);
  useEffect(() => {
    if (!userDetails.userId) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      {/* Route for  New Project  */}
      <Routes>
        <Route
          exact
          path="/create"
          element={
            <Suspense fallback={<ThreeCirclesLoader />}>
              <ErrorBoundary>
                <NewProjectPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        {/* Route for  New Project  */}
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<ThreeCirclesLoader />}>
              <ErrorBoundary>
                <ProjectPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
       <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
};

export default Project;
