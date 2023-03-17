import React from "react";

const ProblemsCount = ({ dept }) => {
  return (
    <div className="p-4 w-full bg-white flex flex-col items-start justify-center border-[1px] border-title-gray space-y-4">
      {/* icon and title */}
      <div className="flex items-start justify-center space-x-2">
        {/* icon */}
        <div className="text-2xl text-gray-light-200 pt-1">{dept.icon}</div>
        {/* title */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg text-red-dark font-semi ">{dept.title}</h1>
          <h6 className="text-[10px] text-gray-small-text ">
            {dept.problemsCount.problemsAbout}
          </h6>
        </div>
      </div>
      {/* Problems count */}
      <div>
        <div className="w-full flex items-center space-x-2">
          <h4 className="text-[12px] text-gray-light-200 w-32 ">
            Opened Problems:
          </h4>
          <span className="text-lg text-red-dark font-semibold inline-block">
            {dept.problemsCount.openProblems}
          </span>
        </div>
        <div className="w-full flex items-center space-x-2">
          <h4 className="text-[12px] text-gray-light-200 w-32">
            Closed Problems:
          </h4>
          <span className="text-lg text-red-dark font-semibold inline-block">
            {dept.problemsCount.closedProblems}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProblemsCount;
