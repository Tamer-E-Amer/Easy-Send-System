import React from "react";
import { FiSend } from "react-icons/fi";
import { WelcomeBar, DashbardNav, PageImgHeader } from "../../components";
const ProblemRegister = () => {
  return (
    <>
      {/* Welcome bar */}
      <WelcomeBar />
      {/* Dashboard body */}
      <div className="container  p-4  flex  items-start md:space-x-4 ">
        {/* Left menu */}
        <DashbardNav />
        {/* Dashboard data */}
        <div className="w-full bg-gray-light-100 p-0  md:rounded-r-3xl  overflow-hidden">
          {/* Heder Image */}
          <PageImgHeader img="/imgs/add-data.png" title="Open ticken" />
          {/* problem registeration form*/}
          {/* problem id */}
          <div className="p-4 md:px-8 lg:px-12">
            <form action="" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* problem id */}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Problem Id
                </label>
                <input
                  type="text"
                  name="problemId"
                  disabled
                  id="problemId"
                  placeholder="ID will automatically generated"
                  className="input-text rounded-full"
                />
              </div>
              {/* date */}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Date
                </label>
                <input
                  type="date"
                  name="createdAt"
                  id="createdAt"
                  className="input-text rounded-full"
                />
              </div>
              {/* user */}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  User
                </label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  disabled
                  className="input-text rounded-full"
                />
              </div>
              {/* subject */}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter problem subject"
                  className="input-text rounded-full"
                />
              </div>
              {/* application name */}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Application
                </label>
                <select className="input-text rounded-full">
                  <option value="1">Income tax</option>
                  <option value="2">Payroll</option>
                  <option value="3">Building tax</option>
                  <option value="4">Replication</option>
                  <option value="5">Tax Id generator</option>
                </select>
              </div>
              {/* version */}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Version
                </label>
                <input
                  type="text"
                  name="version"
                  id="Version"
                  placeholder="Enter application version"
                  className="input-text rounded-full"
                />
              </div>
              {/* Office*/}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Office
                </label>
                <select className="input-text rounded-full">
                  <option value="1">Centeral management</option>
                  <option value="2">Damietta 078</option>
                  <option value="3">Damietta 079</option>
                  <option value="4">Damietta 215</option>
                  <option value="5">Farskour</option>
                  <option value="6">Kafr Saad</option>
                </select>
              </div>
              {/* upload files */}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                <label htmlFor="" className="w-[120px] pl-2 text-sm">
                  Upload files
                </label>
                <input
                  type="file"
                  name="attachs"
                  className="input-text rounded-full"
                />
              </div>
              {/* details */}
              <div className="flex  flex-col items-start space-y-2 text-gray-light-200 lg:col-span-2">
                <label htmlFor="" className="w-[130px] pl-2 text-sm">
                  Problem details
                </label>
                <textarea
                  type="text"
                  name="details"
                  id="details"
                  rows={5}
                  placeholder="Enter problem details"
                  className="details rounded-b-xl  "
                />
              </div>
              <button className="w-full md:w-1/2 lg:w-1/3 bg-gray-mid h-8 hover:bg-red-dark hover:text-white  text-sm transition-all duration-200 text-white font-semibold rounded-full flex items-center justify-center space-x-2 lg:col-span-2">
                <FiSend />
                <span>Send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemRegister;
