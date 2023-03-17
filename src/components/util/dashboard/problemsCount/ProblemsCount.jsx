import React from "react";

const ProblemsCount = ({ dept }) => {
  return (
    <div className="p-4 w-full bg-white flex flex-start justify-start border-[1px] border-title-gray space-x-3">
      {/* Icon */}
      <div className="text-2xl text-gray-light-200 pt-1">{dept.icon}</div>
      {/* Data */}
      <div className="flex flex-col items-start space-y-3">
        {/* title */}
        <div className="flex flex-col items-start">
          <h1 className="text-lg text-red-dark font-semi ">{dept.title}</h1>
          <h6 className="text-[10px] text-gray-light-200 ">
            {dept.problemsCount.problemsAbout}
          </h6>
        </div>
        {/* Problems Data */}
        <div className="flex flex-col space-y-1">
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
    </div>
  );
};

export default ProblemsCount;
