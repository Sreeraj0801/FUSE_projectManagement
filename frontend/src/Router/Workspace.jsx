import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundries/ErrorBoundries";
import LogoLoader from "../Components/Loders/LogoLoader";
import WorkspaceInvitationMain from "../Components/WorkspaceInvitation/WorkspaceInvitationMain";
import { useSelector } from "react-redux";
import { userReducer } from "../Redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../Pages/Users/ErrorPage";
const WorkspacePage = lazy(() => import(`../Pages/Users/WorkspacePage`));

const Workspace = () => {
  const userDetails = useSelector(userReducer);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userDetails.userId) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/verifyworkspaceinvitation/:workspaceId/:email/:choice"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <WorkspaceInvitationMain />
              </ErrorBoundary>
            </Suspense>
          }
        />
        {/* Route for  Project Page  */}
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <WorkspacePage />
              </ErrorBoundary>
            </Suspense>
          }
        />
       <Route path="/*" element={<ErrorPage/>}/>
      </Routes>

    </div>
  );
};

export default Workspace;
