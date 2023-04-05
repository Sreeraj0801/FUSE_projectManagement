import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import UserRouter from './Router/User';
import ProjectRouter from './Router/Project';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'


function App() {
  return (
    <div>
      <BrowserRouter>
          <UserRouter/>
          <ProjectRouter/>
      </BrowserRouter>

    </div>
  );
}

export default App;