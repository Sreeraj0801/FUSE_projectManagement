import React, { lazy, Suspense ,useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundries/ErrorBoundries";
import LogoLoader from "../Components/Loders/LogoLoader";

import { useSelector } from "react-redux";
import { userReducer } from "../Redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import ErrorPage from "../Pages/Users/ErrorPage";


const ChatPage = lazy(() => import(`../Pages/Users/ChatPage`));
const Chat = () => {
  const navigate = useNavigate();
  const userDetails = useSelector(userReducer);
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
          path="/"
          element={
            <Suspense fallback={<LogoLoader />}>
              <ErrorBoundary>
                <ChatPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
};

export default Chat;
