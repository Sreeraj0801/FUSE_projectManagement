import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundries/ErrorBoundries";
import LogoLoader from "../Components/Loders/LogoLoader";

import { useSelector } from "react-redux";
import { userReducer } from "../Redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const HomePage = lazy(() => import("../Pages/Users/HomePage"));

const User = () => {
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
                <HomePage />
              </ErrorBoundary>
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default User
