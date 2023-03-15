import React from "react";

const Department = ({ department }) => {
  return (
    <div className="p-4 w-full min-h-[200px] xl:w-[600px]  border-[1px] bg-white border-gray-light-100 rounded-lg shadow-md justify-self-center mx-auto relative flex items-center justify-center">
      {/* title */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-title-gray border-white border-[1px] text-center py-3 w-[160px] md:w-[200px] text-sm flex items-center justify-center space-x-2">
        <div className="text-lg text-gray-mid">{department.icon}</div>
        <div className=" text-gray-mid"> {department.title}</div>
      </div>
      {/* text */}
      <p className="text-sm  text-gray-mid text-justify pt-6 ">
        {department.about}
      </p>
    </div>
  );
};

export default Department;
