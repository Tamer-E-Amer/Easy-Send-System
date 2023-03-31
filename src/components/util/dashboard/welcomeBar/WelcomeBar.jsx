import React from "react";
import { FaBuilding, FaRegCalendarAlt } from "react-icons/fa";
const WelcomeBar = () => {
  return (
    <div className="h-14 bg-red-dark flex items-center sticky top-[136px] z-10">
      <div className="container px-4 flex items-center justify-between text-sm text-white">
        {/* avatar */}
        <div className="flex items-center space-x-2">
          <img src="/imgs/avatar.png" alt="avatar" className="w-10" />
          <span>Welcome:</span>
          <span>Tamer Amer</span>
        </div>
        {/* Office */}
        <div className="hidden sm:flex items-center space-x-2">
          <FaBuilding className="text-lg" />
          <span>IT Headquarter</span>
        </div>
        {/* Date */}
        <div className="hidden md:flex items-center space-x-2">
          <FaRegCalendarAlt className="text-lg" />
          <span>16-03-2023</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeBar;
