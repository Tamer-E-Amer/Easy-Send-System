import React from "react";
// Components
import { WelcomeBar, DashbardNav, ProblemsTable } from "../../components";
import { gteDepartmentData } from "./../../functions/homFunctions.jsx";
const Dashboard = () => {
  // getDepartmentData function will return her list of ProblemsCount component based on the passed parametter which is /"problemsCount"/
  const problemsCount = gteDepartmentData("problemsCount");
  return (
    <>
      {/* Welcome bar */}
      <WelcomeBar />
      {/* Dashboard body */}
      <div className="container p-4  flex  items-start space-x-4 ">
        {/* Left menu */}
        <DashbardNav />
        {/* Dashboard data */}
        <div className="w-full bg-gray-light-100 p-4 rounded-r-3xl flex flex-col space-y-4 ">
          {/* Departments Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {problemsCount}
          </div>
          <hr className="w-full h-0 border-[0.5px] border-title-gray md:hidden" />
          {/* Diagram */}
          <div className=" p-8 overflow-x-scroll md:overflow-hidden flex items-center justify-center border-[1px] bg-white border-title-gray ">
            <img
              src="/imgs/diagram.png"
              alt="diagram"
              className="w-full md:w-3/4"
            />
          </div>
          {/* Problems table */}
          <div className="p-4 overflow-x-scroll md:overflow-hidden flex items-start  border-[1px] bg-white border-title-gray ">
            <ProblemsTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
