import React from "react";
import { MdPublishedWithChanges } from "react-icons/md";
import { DashbardNav, PageImgHeader, WelcomeBar } from "../../components";

const ChangePassword = () => {
  return (
    <>
      {/* Welcome bar */}
      <WelcomeBar />
      <div className="container  p-4  flex  items-start md:space-x-4 ">
        {/* Left menu */}
        <DashbardNav />
        {/* change password details */}
        <div className="w-full bg-gray-light-100 p-0  md:rounded-r-3xl  overflow-hidden">
          {/* Heder Image */}
          <PageImgHeader img="/imgs/add-data.png" title="Change password" />
          <div className="p-4 ">
            {/* form white container */}
            <div className="bg-white flex items-center justify-center w-full px-4 py-8  md:rounded-br-3xl">
              <form
                action=""
                className="grid grid-cols-1 gap-4 w-full lg:w-1/2 "
              >
                {/* Current password*/}
                <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                  <label htmlFor="" className="w-[140px] pl-2 text-sm">
                    Old password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your current password"
                    className="input-text rounded-full bg-gray-light-100"
                  />
                </div>
                {/* new password password*/}
                <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                  <label htmlFor="" className="w-[140px] pl-2 text-sm">
                    New password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter new password"
                    className="input-text rounded-full bg-gray-light-100"
                  />
                </div>
                {/* password confirm*/}
                <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                  <label htmlFor="" className="w-[140px] pl-2 text-sm">
                    Passwprd confirm
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm your new password"
                    className="input-text rounded-full bg-gray-light-100"
                  />
                </div>
                {/* Change password button */}
                <button className="w-full md:w-1/2  bg-gray-mid h-8 hover:bg-red-dark hover:text-white  text-sm transition-all duration-200 text-white font-semibold rounded-full flex items-center justify-center space-x-2 ">
                  <MdPublishedWithChanges className="text-lg" />
                  <span>Change </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
