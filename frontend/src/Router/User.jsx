import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundries/ErrorBoundries";
import LogoLoader from "../Components/Loders/LogoLoader";

const LandingPage = lazy(() => import("../Pages/Users/LandingPage"));
const RegisterPage = lazy(() => import("../Pages/Users/RegisterPage"));
const LoginPage = lazy(() => import("../Pages/Users/LoginPage"));
const HomePage = lazy(() => import("../Pages/Users/HomePage"));
const DashboardPage = lazy(()=>import('../Pages/Users/DashboardPage'))
const EmailVerificationPgae = lazy(() =>
  import("../Pages/Users/EmailVerificationPage")
);
const OTPloginPage = lazy(() => import("../Pages/Users/OTPloginPage"));
const Test = lazy(() => import("../Components/TestCmp/Test"));

function User() {
  return (
    <div>
      <Routes>
        <Route exact
          path="/"
          element={
            <Suspense fallback={<LogoLoader/>} >
              <ErrorBoundary>
                <LandingPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <Suspense fallback={<LogoLoader/>}>
              <ErrorBoundary>
                  <RegisterPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Suspense fallback={<LogoLoader/>}>
              <ErrorBoundary>
                <LoginPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/verifyUser/:verifyToken/:userId"
          element={
            <Suspense fallback={<LogoLoader/>}>
              <ErrorBoundary>
                <EmailVerificationPgae />
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          exact
          path="/otpLogin"
          element={
            <Suspense fallback={<LogoLoader/>}>
              <ErrorBoundary>
                  <OTPloginPage />
              </ErrorBoundary>
            </Suspense>
          }
        />

        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<LogoLoader/>}>
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            </Suspense>
          }
        />

        <Route
          exact
          path="/dashboard"
          element={
            <Suspense fallback={<LogoLoader/>}>
              <ErrorBoundary>
                <DashboardPage />
              </ErrorBoundary>
            </Suspense>
          }
        />

        <Route
          exact
          path="/test"
          element={
            <Suspense fallback={<LogoLoader/>}>
              <ErrorBoundary>
               <Test />
              </ErrorBoundary>
            </Suspense>
          }
        />
      </Routes>


    </div>
  );
}

export default User;
