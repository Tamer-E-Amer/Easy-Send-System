import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// icons
import { CgProfile } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
const Navbar = () => {
  const [showMenue, setShowMenue] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = React.useState(false);

  return (
    <div className="sticky top-0 w-full bg-white z-50 shadow-lg">
      <div className="h-4 bg-gray-dark"></div>
      <div className="container h-[120px] flex items-center justify-between p-4 ">
        {/* Logo */}
        <Link to="/" className="link hidden md:block">
          <div className="w-40">
            <img src="/imgs/logo.png" alt="logo" />
          </div>
        </Link>
        <Link to="/" className="link block md:hidden">
          <div className="w-40">
            <img src="/imgs/logo-small.png" alt="logo-small" />
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex justify-center items-center space-x-4 w-full">
          <Link to="/" className="link">
            <span className="text-sm lg:text-lg cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
              Home
            </span>
          </Link>
          <span className="text-sm lg:text-lg cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
            About
          </span>
          <a href="#footer">
            <span className="text-sm lg:text-lg cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
              Contact us
            </span>
          </a>
        </div>
        {/* Login button */}
        <Link to="/login" className="hidden sm:block">
          <div className="w-40 md:text-right">
            <button className=" capitalize px-8 py-1 rounded-full bg-gray-mid border-[1px] border-gray-dark text-sm lg:text-lg text-white hover:bg-white hover:text-gray-dark hover:border-[1px] hover:border-gray-dark transition-all duration-200">
              login
            </button>
          </div>
        </Link>
        {/* Main and profile menus */}
        <div className=" md:hidden text-3xl flex items-center space-x-4">
          {/* Profile menu */}
          <div
            className="flex items-center space-x-2 cursor-pointer hover:text-red-dark"
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
              if (showMenue) setShowMenue(false);
            }}
          >
            <CgProfile />
            <span className="text-xs hidden sm:block">My profile</span>
          </div>
          {/* main Humburger menu */}
          {/* TODO:Show it only when user is loggedin */}
          <AiOutlineMenu
            className="  cursor-pointer hover:text-red-dark"
            onClick={() => {
              setShowMenue(!showMenue);
              if (showProfileMenu) setShowProfileMenu(false);
            }}
          />
        </div>

        {/* main Hamburger menu */}
        {showMenue && (
          <>
            {/* Hamburger menu with small screens */}
            <div className="flex justify-center items-center flex-col space-y-2 w-full md:hidden absolute top-[130px] right-0 bg-gray-mid py-4">
              <Link
                to="/"
                className="link w-full  bg-gray-light-100"
                onClick={() => {
                  setShowMenue(false);
                }}
              >
                <div className="px-6  h-8 flex items-center space-x-1 group">
                  {/* arrow icon */}
                  <div className="w-6 group-hover:pl-2 transition-all duration-200">
                    <BsArrowRight />
                  </div>
                  <span className=" text-gray-dark">Home</span>
                </div>
              </Link>
              <Link
                to="#"
                className="link w-full  bg-gray-light-100"
                onClick={() => {
                  setShowMenue(false);
                }}
              >
                <div className="px-6  h-8 flex items-center space-x-1 group">
                  {/* arrow icon */}
                  <div className="w-6 group-hover:pl-2 transition-all duration-200">
                    <BsArrowRight />
                  </div>
                  <span className=" text-gray-dark">About</span>
                </div>
              </Link>
              <a
                href="#footer"
                className="link w-full  bg-gray-light-100"
                onClick={() => {
                  setShowMenue(false);
                }}
              >
                <div className="px-6  h-8 flex items-center space-x-1 group">
                  {/* arrow icon */}
                  <div className="w-6 group-hover:pl-2 transition-all duration-200">
                    <BsArrowRight />
                  </div>
                  <span className=" text-gray-dark">Contact us</span>
                </div>
              </a>
              {/* TODO: hide login when user is logged in */}
              <Link
                to="/login"
                className="link w-full  bg-gray-light-100"
                onClick={() => {
                  setShowMenue(false);
                }}
              >
                <div className="px-6  h-8 flex items-center space-x-1 group">
                  {/* arrow icon */}
                  <div className="w-6 group-hover:pl-2 transition-all duration-200">
                    <BsArrowRight />
                  </div>
                  <span className=" text-gray-dark">Login</span>
                </div>
              </Link>
            </div>
          </>
        )}
        {/* Profile menu */}
        {showProfileMenu && (
          <>
            {/* Profile menu with small screens */}
            <div className="flex  items-center flex-col space-y-2 w-full md:hidden absolute top-[130px] right-0 bg-gray-mid py-4">
              <Link
                to="/dashboard"
                className="link w-full  bg-gray-light-100"
                onClick={() => {
                  setShowProfileMenu(false);
                }}
              >
                <div className="px-6  h-8 flex items-center space-x-1 group">
                  {/* arrow icon */}
                  <div className="w-6 group-hover:pl-2 transition-all duration-200">
                    <BsArrowRight />
                  </div>
                  <span className=" text-gray-dark">Dashboard</span>
                </div>
              </Link>
              <Link
                to="/dashboard/problemRegister"
                className="link w-full bg-gray-light-100"
                onClick={() => {
                  setShowProfileMenu(false);
                }}
              >
                <div className="px-6 h-8 flex items-center space-x-1 group">
                  {/* arrow icon */}
                  <div className="w-6 group-hover:pl-2 transition-all duration-200">
                    <BsArrowRight />
                  </div>
                  <span className=" text-gray-dark">Open ticket</span>
                </div>
              </Link>
              <Link
                to="/dashboard/messages"
                className="link w-full bg-gray-light-100"
                onClick={() => {
                  setShowProfileMenu(false);
                }}
              >
                <div className="px-6 h-8 flex items-center space-x-1 group">
                  {/* arrow icon */}
                  <div className="w-6 group-hover:pl-2 transition-all duration-200">
                    <BsArrowRight />
                  </div>
                  <span className=" text-gray-dark">Messages</span>
                </div>
              </Link>
              <Link
                to="/dashboard/changePassword"
                className="link w-full bg-gray-light-100"
                onClick={() => {
                  setShowProfileMenu(false);
                }}
              >
                <div className="px-6 h-8 flex items-center space-x-1 group">
                  {/* arrow icon */}
                  <div className="w-6 group-hover:pl-2 transition-all duration-200">
                    <BsArrowRight />
                  </div>
                  <span className=" text-gray-dark">Change password</span>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
