import React from 'react';
import UserRouter from './Router/User';
import { BrowserRouter } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'


function App() {
  return (
    <div>
        <BrowserRouter>
          <UserRouter/>
        </BrowserRouter>
    </div>
  );
}

export default App;