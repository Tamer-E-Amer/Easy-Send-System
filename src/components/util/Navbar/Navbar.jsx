import React from "react";
import { useState } from "react";
// import { Logo, LogoSmall } from "../../../../public/imgs";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [showMenue, setShowMenue] = useState(false);

  return (
    <div className="sticky top-0 w-full bg-white z-50">
      <div className="h-4 bg-gray-dark"></div>
      <div className="container h-[120px]  items-center justify-between p-4 flex bg-white ">
        {/* Logo */}
        <img src="/imgs/logo.png" alt="logo" className="hidden md:block" />
        <img
          src="/imgs/logo-small.png"
          alt="logo-small"
          className="block md:hidden"
        />
        {/* Menu */}
        <div className="hidden md:flex justify-center items-center space-x-4">
          <span className="cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
            Home
          </span>
          <span className="cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
            About
          </span>
          <span className="cursor-pointer hover:font-semibold text-gray-dark transition-all duration-300">
            Contact us
          </span>
        </div>
        {/* Login button */}
        <button className=" capitalize px-8 py-1 rounded-full bg-gray-mid text-white hover:bg-white hover:text-gray-dark hover:border-[1px] hover:border-gray-dark transition-all duration-200">
          login
        </button>
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
            <div className="flex justify-center items-center flex-col space-y-2 w-full md:hidden absolute top-[130px] right-0 bg-red-dark py-4">
              <span className="cursor-pointer hover:font-semibold text-gray-dark py-2 w-full text-center bg-gray-light-100">
                Home
              </span>
              <span className="cursor-pointer hover:font-semibold text-gray-dark py-2 w-full text-center bg-gray-light-100">
                About
              </span>
              <span className="cursor-pointer hover:font-semibold text-gray-dark py-2 w-full text-center bg-gray-light-100">
                Contact us
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
