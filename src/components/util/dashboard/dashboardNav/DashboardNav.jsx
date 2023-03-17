import React from "react";
// icons
import { GoIssueOpened, GoSearch, GoMail } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
const DashboardNav = () => {
  return (
    <div className="py-4 pl-4 flex flex-col items-start w-[220px] bg-gray-light-100 space-y-2 rounded-l-2xl">
      <div className="dashboard-nav-link">
        {/* icon */}
        <GoIssueOpened className="text-lg" />
        {/* link title */}
        <span className="text-sm">Open ticket</span>
      </div>
      <div className="dashboard-nav-link">
        {/* icon */}
        <GoSearch className="text-lg" />
        {/* link title */}
        <span className="text-sm">Search</span>
      </div>
      <div className="dashboard-nav-link">
        {/* icon */}
        <GoMail className="text-lg" />
        {/* link title */}
        <span className="text-sm">Messages</span>
      </div>
      <div className="dashboard-nav-link">
        {/* icon */}
        <CgProfile className="text-lg" />
        {/* link title */}
        <span className="text-sm">Change password</span>
      </div>
    </div>
  );
};

export default DashboardNav;
