import React ,{Suspense} from 'react'
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from '../Components/ErrorBoundries/ErrorBoundries';
import LogoLoader from "../Components/Loders/LogoLoader";
import WorkspaceInvitationMain from '../Components/WorkspaceInvitation/WorkspaceInvitationMain';
const Workspace = () => {
  return (
    <div>
        <Routes>
        <Route exact path='/verifyworkspaceinvitation/:workspaceId/:email/:choice' element={
        <Suspense fallback={<LogoLoader/>}>
          <ErrorBoundary >
            <WorkspaceInvitationMain/>
          </ErrorBoundary>
        </Suspense>}/>
      </Routes>
    </div>
  )
}

export default Workspace
