import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import MobileNav from "../MobileNav/MobileNav";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { resetDetails } from "../../Redux/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AsideNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const menus = [
    { name: "home", link: "/home", icon: AiOutlineHome },
    //{ name: "dashboard", link: "/dashboard", icon: MdOutlineDashboard },
    { name: "workspaces", link: "/workspace", icon: TbReportAnalytics },
    { name: "messages", link: "/chat", icon: FiMessageSquare, margin: true },
    // { name: "File Manager", link: "/", icon: FiFolder },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    // { name: "User", link: "/profile", icon: AiOutlineUser, margin: true },
    // { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "refreshToken"
  ]);

  const HandleLogout = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Are you sure you want to logout!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout !'
    }).then((result) => {
      if(result.isConfirmed){
        removeCookie("accessToken");
        removeCookie("refreshToken");
        localStorage.clear();
        dispatch(resetDetails());
        navigate("/login");
      }
    })
  };
  return (
    <div>
      <section className="md:flex gap-6  hidden">
        <div
          // bg-[#0e0e0e]
          className={` bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen pt-4 ${
            open ? "w-56" : "w-16"
          }  duration-300 text-gray-100 px-4`}
        >
          <div className="py-3 flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                to={menu?.link}
                key={i}
                className={` ${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-300 hover:dark:bg-gray-500 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `100ms`,
                  }}
                  className={`whitespace-pre duration-300 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
          <button
            className={` fixed bottom-10   hover:bg-gray-300 hover:dark:bg-gray-500 rounded-md  gap-3.5 ${
              open && "flex"
            }`}
            onClick={HandleLogout}
          >
            <BiLogOutCircle className="text-3xl" />
            <h2
              style={{
                transitionDelay: `100ms`,
              }}
              className={`whitespace-pre duration-300 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {"Logout"}
            </h2>
          </button>
        </div>
      </section>

      <div className="md:hidden block">
        <MobileNav />
      </div>
    </div>
  );
};

export default AsideNavbar;
