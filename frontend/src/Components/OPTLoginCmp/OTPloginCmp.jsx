import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ImCross } from "react-icons/im";
import userAuth from "../../Firebase/userAuth";
import axiosInstance from "../../API/baseURL";
import errorAlert from "../SweetAlert/errorSweetAlert";
import { useDispatch } from "react-redux";
import { setDetails } from "../../Redux/Slice/userSlice";

const OTPloginCmp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [number, setnumber] = useState();
  const [error, setError] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [flag, setFlag] = useState(false);
  const { setUpRecapthcha } = userAuth();
  const [confirm, setComfirm] = useState();
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number == null || number === "" || number === undefined)
      return setError("please enter a valid phone Number");
    try {
      const response = await setUpRecapthcha(number);
      setComfirm(response);
      if (response) return setFlag(true);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  function handleChange(e, index) {
    const input = e.target;
    const inputValue = e.target.value;
    const newOtpValue = [...otpValue];
    newOtpValue[index] = inputValue;
    setOtpValue(newOtpValue.join(""));
    if (input.value.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  }

  const handleOTPsubmit = async (e) => {
    e.preventDefault();
    if (otpValue === "" || otpValue === null) return;
    try {
      await confirm.confirm(otpValue);
      axiosInstance
        .post("/otpLogin", number)
        .then((response) => {
          const { email, fname, lname, mobile, displayName } =
            response.data.response;
          let name = fname + " " + lname;
          if (displayName) name = displayName;
          dispatch(setDetails({ name, email, mobile }));
          navigate("/home");
        })
        .catch((err) => {
          errorAlert(err.response.data.error);
          navigate("/signup");
        });
    } catch (error) {
      setFlag(false);
      errorAlert("OTP expired , try again !").then(() => {});
    }
  };
  return (
    <div className="lg:flex justify-center items-center h-screen w-full ">
      <div className="bg-gradient-to-r from-orange-100 to-lime-50 lg:grid grid-cols-2 lg:m-44 m-5 rounded-xl shadow-2xl">
        <div className="hidden lg:block mt-12 lg:mt-0">
          <img
            src="./Images/otpImage.gif"
            alt=""
            className=" p-5 rounded-3xl "
          />
        </div>
        <div className="text-center p-10 h-screen lg:h-0 items-center ">
          <div className="flex justify-center mt-10 mb-5">
            <Logo />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-400 md:text-6xl lg:text-4xl ">
            OTP VERIFICATION{" "}
          </h1>

          <form
            className={`grid gap-5 ${flag ? "hidden" : "block"}`}
            onSubmit={getOtp}
          >
            <PhoneInput
              className="text-2xl border p-3 bg-white rounded-2xl text-center"
              defaultCountry="IN"
              placeholder="Enter phone number"
              value={number}
              onChange={setnumber}
              name="number"
            />{" "}
            <div>
              <p className="text-red-500 h-14 -mt-5 text-xl text-left font-mono text-bold">
                {error}
              </p>
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-44 "
              >
                GET OTP
              </button>
            </div>
          </form>

          <form
            action=""
            className={`grid grid-cols-6 gap-6 text-center ${
              flag ? "block" : "hidden"
            }`}
          >
            {inputRefs.map((inputRef, index) => (
              <input
                key={index}
                ref={inputRef}
                type="text"
                maxLength={1}
                className=" w-16 h-16 border rounded-lg text-center mx-12"
                onChange={(e) => handleChange(e, index)}
              />
            ))}

            <button
              type="submit"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 w-44 "
              onClick={handleOTPsubmit}
            >
              Verify OTP
            </button>
          </form>
          <div className="text-end relative">
            <button
              className="bg-red-400 rounded-full    hover:text-black duration-100 text-transparent p-5 hover:w-40"
              onClick={() => navigate("/login")}
            >
              <ImCross className="text-black" />
              <span className=" hover:text-black absolute -mt-6 text-xl -ml-3">
                Cancel
              </span>
            </button>
          </div>
          <div
            id="recaptcha-container"
            className={`rounded bg-transparent lg:-mt-40 lg:-ml-56 ${
              flag  && "hidden"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default OTPloginCmp;
