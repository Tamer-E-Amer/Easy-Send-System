import React from "react";
import { MdOutlineAssignmentInd, MdReply } from "react-icons/md";
import { DashbardNav, PageImgHeader, WelcomeBar } from "../../components";

const ProblemDetails = () => {
  return (
    <>
      {/* Welcome bar */}
      <WelcomeBar />
      {/* Dashboard body */}
      <div className="container  p-4  flex  items-start md:space-x-4 ">
        {/* Left menu */}
        <DashbardNav />
        {/* Dashboard data */}
        <div className="w-full bg-gray-light-100 p-0  md:rounded-r-3xl  overflow-hidden flex- flex-col space-y-2">
          {/* Heder Image */}
          <PageImgHeader img="/imgs/add-data.png" title="Problem details" />
          {/* problem details data*/}
          <div className="p-4">
            <div className="p-4 md:px-8 lg:px-12 bg-white">
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
                    className="input-text rounded-full bg-gray-200"
                  />
                </div>
                {/* date */}
                <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                  <label htmlFor="" className="w-[90px] pl-2 text-sm">
                    Date
                  </label>
                  <input
                    type="text"
                    disabled
                    name="createdAt"
                    id="createdAt"
                    className="input-text rounded-full bg-gray-200"
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
                    className="input-text rounded-full bg-gray-200"
                  />
                </div>
                {/* subject */}
                <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                  <label htmlFor="" className="w-[90px] pl-2 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    disabled
                    name="subject"
                    id="subject"
                    placeholder="Enter problem subject"
                    className="input-text rounded-full bg-gray-200"
                  />
                </div>
                {/* application name */}
                <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                  <label htmlFor="" className="w-[90px] pl-2 text-sm">
                    Application
                  </label>
                  <select
                    className="input-text rounded-full bg-gray-200"
                    disabled
                  >
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
                    disabled
                    className="input-text rounded-full bg-gray-200"
                  />
                </div>
                {/* Office*/}
                <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                  <label htmlFor="" className="w-[90px] pl-2 text-sm">
                    Office
                  </label>
                  <select
                    className="input-text rounded-full bg-gray-200"
                    disabled
                  >
                    <option value="1">Centeral management</option>
                    <option value="2">Damietta 078</option>
                    <option value="3">Damietta 079</option>
                    <option value="4">Damietta 215</option>
                    <option value="5">Farskour</option>
                    <option value="6">Kafr Saad</option>
                  </select>
                </div>
                {/* Attached files */}
                <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
                  <label htmlFor="" className="w-[90px] pl-2 text-sm">
                    Attachments
                  </label>
                  <div
                    className="flex items-center justify-center
                "
                  >
                    <div className="w-10 h-10 bg-red-dark rounded-full border-4 border-white text-white flex items-center justify-center text-sm cursor-pointer">
                      1
                    </div>
                    <div className="w-10 h-10 bg-red-dark rounded-full border-4 border-white text-white flex items-center justify-center text-sm cursor-pointer">
                      2
                    </div>
                    <div className="w-10 h-10 bg-red-dark rounded-full border-4 border-white text-white flex items-center justify-center text-sm cursor-pointer">
                      3
                    </div>
                  </div>
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
                    className="details rounded-b-xl bg-gray-200 "
                    disabled
                  />
                </div>
                {/* status */}
                {/* TODO: this will appear only for employees in Head-quarter  */}
                <div className="p-4 flex  flex-col items-start space-y-2 text-gray-light-200 lg:col-span-2 bg-red-dark">
                  <label
                    htmlFor=""
                    className="w-[140px] pl-2 text-sm text-white"
                  >
                    Assign status
                  </label>
                  <select className="input-text rounded-full bg-gray-200">
                    <option value="1">Pending</option>
                    <option value="2">Opened</option>
                    <option value="3">Closed</option>
                  </select>
                </div>
                {/* Action buttons */}
                <div className="flex flex-col space-y-2 justify-center sm:flex-row sm:items-center sm:justify-start sm:space-x-4 sm:space-y-0">
                  <button className="w-full md:w-1/2 bg-gray-mid h-8 hover:bg-red-dark hover:text-white  text-sm transition-all duration-200 text-white font-semibold rounded-full flex items-center justify-center space-x-2 lg:col-span-2">
                    <MdReply className="text-xl" />
                    <span>Reply</span>
                  </button>
                  <button className="w-full px-2 md:w-1/2 h-8 border-[1px] border-gray-mid border-full hover:border-red-dark  hover:bg-title-gray text-sm transition-all duration-200 text-gray-light-200 font-semibold rounded-full flex items-center justify-center space-x-2 lg:col-span-2">
                    <MdOutlineAssignmentInd className="text-xl" />
                    <span>Assign/Reassign</span>
                  </button>
                </div>
              </form>
            </div>
            {/* Response to problems */}
            <div className="p-4 overflow-x-auto  border-[1px] bg-white border-title-gray mt-4 md:rounded-br-xl">
              <p
                className="text-sm text-gray-mid
               font-semibold text-center
               "
              >
                {/* TODO: table of problem response will be here */}
                Responses table will be here
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProblemDetails;
