import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [showMenue, setShowMenue] = useState(false);

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
            <img src="imgs/logo-small.png" alt="logo-small" />
          </div>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex justify-center items-center space-x-4 w-full">
          <Link to="/" className="link">
            <span className="cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
              Home
            </span>
          </Link>
          <span className="cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
            About
          </span>
          <a href="#footer">
            <span className="cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
              Contact us
            </span>
          </a>
        </div>
        {/* Login button */}
        <Link to="/login" className="hidden sm:block">
          <div className="w-40">
            <button className=" capitalize px-8 py-1 rounded-full bg-gray-mid text-white hover:bg-white hover:text-gray-dark hover:border-[1px] hover:border-gray-dark transition-all duration-200">
              login
            </button>
          </div>
        </Link>
        {/* Hmaburger menu */}
        <AiOutlineMenu
          className="block md:hidden text-4xl cursor-pointer hover:text-red-dark"
          onClick={() => {
            setShowMenue(!showMenue);
          }}
        />
        {showMenue && (
          <>
            {/* Menu with small screens */}
            <div className="flex justify-center items-center flex-col space-y-2 w-full md:hidden absolute top-[130px] right-0 bg-gray-mid py-4">
              <Link to="/" className="link w-full">
                <span className="cursor-pointer hover:font-semibold text-gray-dark py-2 w-full text-center bg-gray-light-100 inline-block">
                  Home
                </span>
              </Link>
              <span className="cursor-pointer hover:font-semibold text-gray-dark py-2 w-full text-center bg-gray-light-100">
                About
              </span>
              <a href="#footer" className="link w-full">
                <span className="cursor-pointer hover:font-semibold text-gray-dark py-2 w-full text-center bg-gray-light-100 inline-block">
                  Contact us
                </span>
              </a>
              <Link to="/login" className="link w-full sm:hidden">
                <span className="cursor-pointer hover:font-semibold text-gray-dark py-2 w-full text-center bg-gray-light-100 inline-block">
                  Login
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
