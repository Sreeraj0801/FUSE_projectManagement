import React,{useState} from "react";
import axiosInstance from "../../API/baseURL";
import { BsGoogle } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import useLoginValidation from "../../Hooks/useLoginValidation";
import Logo from "../../assets/Logo";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDetails } from "../../Redux/Slice/userSlice";
import userAuth from '../../Firebase/userAuth';
import LoaderCmp from "../Loader/Loader";


function LoginCmp() {
  const [loader ,setLoader] = useState(false);
  const {googleSignIn} = userAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleInputChange, checkSubmit, details, errors, isValid } =
    useLoginValidation();

  //---------------handle the submmit ----------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkSubmit(e);
    if (!isValid) toast.warning("Please check the credential");
    if (isValid) {
      setLoader(true)
      await axiosInstance
        .post("/login", details)
        .then((response) => {
          if (response.data && response.status === 200) {
            const { email, name, _id } =
              response.data.response;
            dispatch(setDetails({ name, email,userId:_id,accessToken:response.data.accessToken}));
            setLoader(false)
            navigate("/home");
          }
        })
        .catch((error) => {
          console.error(error);
          if (error.response.status === 409) {
            toast.error(error.response.data, {
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
            console.log(error.response);
          }
        });
    }
  };

  const handleGoogleSignIn = () => {
    try {
      googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="lg:grid grid-cols-2  h-screen lg:mx-32  lg:my-0">
      <div className="lg:block hidden lg:mt-8">
        <div className="relative">
          <img
            src="./Images/Login01.gif"
            alt="Background"
            className="w-full mt-5"
          />
        </div>
      </div>
      <div className="lg:border  border-slate-400 rounded lg:m-12 p-8 border m-12">
        <div className="flex justify-center mt-8">
          <Logo />
        </div>
        <h1 className="text-sm font-bold text-slate-600 text-center mb-5">
          Ready to take your project management to the next level{" "}
          <span className="text-orange-600">Log in to FUSE</span> and explore
          our latest features
        </h1>
        <div className="text-center md:flex lg:ml-10  justify-center lg:mt-14">
          <button
            type="button"
            className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
            onClick={handleGoogleSignIn}
          >
            <BsGoogle /> &nbsp; Sign in with Google
          </button>
          <button
            type="button"
            className="text-white  focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium  text-sm  py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2  bg-orange-300 rounded px-5 pt-2 lg:h-10  hover:bg-orange-600 h-10 w-11/12 md:w-48"
            onClick={()=>{navigate('/otpLogin')}}
          >
            <FaPhoneAlt />&nbsp; Sign in using OTP
          </button>
        </div>
        <div className="flex">
          <hr className="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <p className="mt-5 mx-5">OR</p>
          <hr className="w-96 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-1 lg:mt-5">
            <input
              type="email | mobile"
              placeholder="Email or mobile Number"
              name="credential"
              className={`${
                errors.credential
                  ? "border-red-500 focus:ring-red-600"
                  : " border-gray-300  focus:ring-blue-400"
              } px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`}
              value={details.credential}
              onChange={handleInputChange}
            />
            <p className="text-red-600 h-6 ">{errors.credential}</p>
            <input
              type="password"
              placeholder="Password"
              name="pword"
              className={`${
                errors.pword
                  ? "border-red-500 focus:ring-red-600"
                  : " border-gray-300  focus:ring-blue-400"
              } px-3 py-2 rounded-md focus:outline-none focus:ring-2 border-gray-300 border`}
              value={details.pword}
              onChange={handleInputChange}
            />
            <p className="text-red-600 h-6">{errors.pword}</p>
          </div>
          <div className="text-center mt-4 -mb-5">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-500 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
              <span className=" flex relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0 text-sm text-bold w-32">
                {loader?<LoaderCmp />:""}               
                LOGIN
              </span>
            </button>
          </div>
        </form>
        <div className="flex justify-end  lg:mt-12 mt-20 ">
          <h1 className="text-lg lg:font-bold">NEW TO FUSE ?</h1>
          <Link
            to="/signup"
            className="text-xl ml-2 text-blue-400 font-bold hover:text-orange-600"
          >
            REGISTER
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginCmp;
