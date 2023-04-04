import React from "react";
import { Link } from "react-router-dom";
// icons
import { GoIssueOpened, GoSearch, GoMail } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { TbLayoutDashboard } from "react-icons/tb";
const DashboardNav = () => {
  return (
    <div className="hidden py-4 pl-4 md:flex flex-col items-start w-[220px] bg-gray-light-100 space-y-2 rounded-l-2xl sticky top-[210px] z-0">
      <Link to="/dashboard" className="w-full">
        <div className="dashboard-nav-link">
          {/* icon */}
          <TbLayoutDashboard className="text-lg" />
          {/* link title */}
          <span className="text-sm">Dashboard</span>
        </div>
      </Link>
      <Link to="/dashboard/problemRegister" className="w-full">
        <div className="dashboard-nav-link">
          {/* icon */}
          <GoIssueOpened className="text-lg" />
          {/* link title */}
          <span className="text-sm">Open ticket</span>
        </div>
      </Link>
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
      <Link to="/dashboard/changePassword">
        <div className="dashboard-nav-link">
          {/* icon */}
          <CgProfile className="text-lg" />
          {/* link title */}
          <span className="text-sm">Change password</span>
        </div>
      </Link>
    </div>
  );
};

export default DashboardNav;
