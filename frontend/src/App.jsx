import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserRouter from './Router/User';
import ProjectRouter from './Router/Project';
import WorkspaceRouter from './Router/Workspace';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'


function App() {
  return (
    <div>
      <BrowserRouter>
          <UserRouter/>
          <ProjectRouter/>
          <WorkspaceRouter/>
      </BrowserRouter>

    </div>
  );
}

export default App;