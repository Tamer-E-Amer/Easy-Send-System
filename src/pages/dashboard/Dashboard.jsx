import React from "react";
// Components
import { WelcomeBar, DashbardNav } from "../../components";
import { gteDepartmentData } from "./../../functions/homFunctions.jsx";
const Dashboard = () => {
  const problemsCount = gteDepartmentData("problemsCount");
  return (
    <>
      {/* Welcome bar */}
      <WelcomeBar />
      {/* Dashboard body */}
      <div className="container p-4  flex items-start space-x-4 ">
        {/* Left menu */}
        <DashbardNav />
        {/* Dashboard data */}
        <div className="w-full bg-gray-light-100 p-4 rounded-r-3xl">
          {/* Departments Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {problemsCount}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
