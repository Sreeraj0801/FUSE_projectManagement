import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "../Pages/Users/LandingPage";
import RegisterPage from "../Pages/Users/RegisterPage";
import LoginPage from "../Pages/Users/LoginPage";
import HomePage from "../Pages/Users/HomePage";
import EmailVerificationPgae from "../Pages/Users/EmailVerificationPage";
import OTPloginPage from "../Pages/Users/OTPloginPage";
import Test from "../Components/TestCmp/Test"

function User() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/signup" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route
          exact
          path="/verifyUser/:verifyToken/:userId"
          element={<EmailVerificationPgae />}
        />
        <Route exact path="/otpLogin" element={<OTPloginPage />} />
        <Route exact path="/home" element={<HomePage />} />
        
        <Route exact path = "/test" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default User;
