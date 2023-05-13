import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRouter from "./Router/Auth";
import UserRouter from './Router/User';
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/src/sweetalert2.scss";

import ProjectRouter from "./Router/Project";
import WorkspaceRouter from "./Router/Workspace";
import ChatRouter from './Router/Chat';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/workspace/*" element={<WorkspaceRouter />} />
          <Route path="/project/*" element={<ProjectRouter />} />
          <Route path="/chat/*" element={<ChatRouter/>} />
          <Route path="/*" element={<AuthRouter />} />
          <Route path="/home" element={<UserRouter />} />
          <Route component={"NotFound"} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
