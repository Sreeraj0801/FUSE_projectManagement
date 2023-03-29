import React from "react";
import axiosInstance from "../../API/baseURL";

import { ToastContainer, toast } from "react-toastify";
import useSignupValidation from "../../Hooks/useSignupValidation";
import Logo from "../../assets/Logo";
import { Link } from "react-router-dom";
import successAlert from "../SweetAlert/successAlert";
import userAuth from "../../Firebase/userAuth";
import { BsGoogle } from "react-icons/bs";


function RegisterCmp() {

  const { errors, signupFormData, handleInputChange, isValidForm } =
    useSignupValidation();
  const { googleAuthUserSignUp } = userAuth();

  const handleSubmit = async (e) => {
    let formStatus = await isValidForm(e);
    if (!formStatus) {
      toast.warning("Please check the credentials");
      return;
    }
    if (formStatus) {
      try {
        const response = await axiosInstance.post("/register", signupFormData);
        if (response)
          successAlert(
            "Please verify your Email by Google SignIn or by the Email link",
            "Email Resended succesfully"
          );
      } catch (error) {
        if (error.response.data) {
          toast.error(error.response.data, { theme: "dark" });
        }
        if (error.response.error.response.data.message) {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          console.log(error);
        }
      }
    }
  };

  const handleGoogleSignUp = async (e) => {
    e.preventDefault();

    try {
      googleAuthUserSignUp();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="lg:grid grid-cols-2 max-h-screen lg:mx-24">
      <div className="lg:block hidden lg:mt-8">
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 absolute rounded p-5 flex -right-3 bottom-40 text-white hover:scale-110 transition-all duration-500 cursor-pointer ">
            <p className="text-xl">Already an user ? </p>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link
              to="/login"
              className="text-2xl -mt-1  cursor-pointer hover:text-yellow-400"
            >
              {" "}
              LOGIN
            </Link>
          </div>
          <img
            src="./Images/Register04.gif"
            alt="Background"
            className="w-full mt-5"
          />
        </div>
      </div>
      <div className="border  border-slate-400 rounded lg:m-12 p-8 m-5 md:m-20">
        <div className="flex justify-center lg:mt-2">
          <Logo />
        </div>
        <h1 className="text-sm font-bold text-slate-600 text-center mb-5">
          Join FUSE today and start managing your projects effortlessly.
        </h1>
        <div className="text-center">
          <button
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 "
            onClick={handleGoogleSignUp}
          >
            <BsGoogle /> &nbsp; Sign in with Google
          </button>
        </div>
        <div className="flex mb-2">
          <hr className="w-96 h-px my-5  border-0 bg-gray-700" />
          <p className="mt-2 mx-5">OR</p>
          <hr className="w-96 h-px my-5 border-0 bg-gray-700" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-1">
          <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className={`${
                  errors.name
                    ? "border-red-500 focus:ring-red-600"
                    : " border-gray-300  focus:ring-blue-400"
                } px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`}
                value={signupFormData.name}
                onChange={handleInputChange}
              />
              <p className="text-red-600 h-6">{errors.name}</p>

            <input
              name="email"
              type="email"
              placeholder="Email"
              className={`${
                errors.email
                  ? "border-red-500 focus:ring-red-600"
                  : " border-gray-300  focus:ring-blue-400"
              } px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`}
              value={signupFormData.email}
              onChange={handleInputChange}
            />
            <p className="text-red-600 h-6">{errors.email}</p>

            <input
              type="tel"
              name="mobile"
              className={`${
                errors.mobile
                  ? "border-red-500 focus:ring-red-600"
                  : " border-gray-300  focus:ring-blue-400"
              } px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`}
              placeholder="Mobile Number"
              value={signupFormData.mobile}
              onChange={handleInputChange}
            />
            <p className="text-red-600 h-6">{errors.mobile}</p>
            <input
              name="pword"
              type="password"
              placeholder="Password"
              className={`${
                errors.pword
                  ? "border-red-500 focus:ring-red-600"
                  : " border-gray-300  focus:ring-blue-400"
              } px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`}
              value={signupFormData.pword}
              onChange={handleInputChange}
            />
            <p className="text-red-600 h-6">{errors.pword}</p>
            <input
              name="confirmPword"
              type="password"
              placeholder="confirm password"
              className={`${
                errors.confirmPword
                  ? "border-red-500 focus:ring-red-600"
                  : " border-gray-300  focus:ring-blue-400"
              } px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`}
              value={signupFormData.confirmPword}
              onChange={handleInputChange}
            />
            <p className="text-red-600 h-6">{errors.confirmPword}</p>
          </div>
          <div className="text-center mt-2 -mb-5">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-500 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-sm text-bold w-32">
                Register
              </span>
            </button>
          </div>
        </form>
        <div className=" mx- mt-8  lg:hidden">
          <h1 className="text-sm">Already An User ?
              <Link to="/login" className="text-lg  text-blue-400 font-bold">
                LOGIN
              </Link>
          </h1>

        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterCmp;
