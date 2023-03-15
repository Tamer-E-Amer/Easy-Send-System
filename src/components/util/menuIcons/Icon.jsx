import { data } from "autoprefixer";
import React from "react";

const Icon = ({ dep }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-2 mx-2 md:mx-4 cursor-pointer">
      {/* icon */}
      <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] bg-wihte border-2 rounded-full border-white flex items-center justify-center text-xl md:text-2xl text-white hover:bg-gray-light-100 hover:text-gray-dark transition-all duration-300 ">
        {dep.icon}
      </div>
      {/* Text */}
      <p className="hidden md:block text-sm text-white">{dep.title}</p>
    </div>
  );
};

export default Icon;
