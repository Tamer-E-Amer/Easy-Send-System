import React from "react";
import { MenuIcons, Department } from "../../components";
// import { EasysnedMain } from "../../../imgs/index.js";
// import { depData } from "./../../data/layoutText";
import { gteDepartmentData } from "../../functions/homFunctions.jsx";
const Home = () => {
  // const departments = depData.map((dep) => {
  //   if (dep.about) return <Department department={dep} />;
  // });

  const departments = gteDepartmentData("depComponent");
  return (
    <div>
      <MenuIcons />
      <img src="/imgs/easysend-main.png" alt="Main image" />
      {/* Start About and Announcement Section */}
      <div className="container p-4 flex flex-col md:flex-row items-start justify-between  space-y-4 md:space-x-8 ">
        {/* About */}
        <div className="w-full md:w-[50%]">
          <h1 className="text-lg text-gray-dark">Damietta branch</h1>
          <p className="text-sm text-gray-mid leading-6 ">
            Mansoura branch is established in 2019 to be core for IT support in
            Damietta tax officse. It provides the first level support for all
            tax offices and managements. The branch manages about five offices
            and 5 managements. all the Employees here are well trained and
            educated and can technical support for all other employees in remote
            offices
          </p>
        </div>
        {/* Line */}
        <hr className="w-full h-0 border-[0.5px] border-gray-light-100 md:hidden" />
        {/* Announcement */}
        <div className="w-full md:w-[50%]">
          <h1 className="text-lg text-gray-dark">Announcements</h1>
          {/* Last announcement */}
          <div className=" flex flex-col space-y-1">
            {/* Date */}
            <div className="">
              <span className="text-sm font-semibold mr-4">Date:</span>
              <span className="text-sm text-gray-mid">12.02.2023</span>
            </div>
            {/* Title */}
            <div className="">
              <span className="text-sm font-semibold mr-4">Title:</span>
              <span className="text-sm text-gray-mid">
                New version of Incometax Application
              </span>
            </div>
            {/* Details */}
            <div className="">
              <span className="text-sm font-semibold mr-4">Details:</span>
              <p className="text-sm text-gray-mid">
                Please download the last virsion of Income tax application in
                No. 2.12.1. It helps to solve the problem of External Checks.{" "}
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div className="flex space-x-4 items-start my-4">
            <button className="text-sm text-white bg-red-dark py-1 px-6 rounded-full shadow-md hover:bg-gray-mid hover:text-white transition-all duration-200">
              Download
            </button>
            <button className="text-sm text-gray-dark border-[1px] border-gray-light-100 py-1 px-6 rounded-full shadow-md hover:bg-gray-mid hover:text-white transition-all duration-200">
              See more..
            </button>
          </div>
        </div>
      </div>
      {/* End about and announcement section */}
      {/* Start departments section */}
      <div className="bg-gray-light-100">
        <div className="container p-4 ">
          <h1 className="text-lg text-gray-dark">Branch departments</h1>
          {/* Departments components */}
          <div className="px-4 pt-12 grid grid-cols-1 sm:grid-cols-2 gap-12 m-auto justify-center  ">
            {departments}
          </div>
        </div>
      </div>
      {/* End departments section */}
    </div>
  );
};

export default Home;
