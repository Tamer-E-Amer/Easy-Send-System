import React from "react";
import { IoIosSave } from "react-icons/io";
const Register = () => {
  return (
    <div className="login  h-auto flex items-center justify-center py-12">
      <div className="container p-4 flex items-center justify-center">
        {/*  form container */}
        <div className="flex items-center justify-center bg-gray-light-100 bg-opacity-90 w-full lg:w-2/3 py-20 px-4 md:p-12 rounded-3xl  shadow-lg ">
          {/* Register form */}
          <form
            action=""
            className="w-full   grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Employee name */}
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[200px] pl-2 text-sm">
                Employee name
              </label>
              <input
                type="text"
                name="empName"
                id="empName"
                placeholder="Enter your name"
                className="input-text rounded-full"
              />
            </div>
            {/* Office */}
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[90px] pl-2 text-sm">
                Office
              </label>
              <select
                className="input-text rounded-full cursor-pointer
              "
              >
                <option value="0">Select Office</option>
                <option value="1">Central management</option>
                <option value="2">Damietta region</option>
                <option value="3">Damietta 078</option>
                <option value="4">Damietta 079</option>
              </select>
            </div>
            {/* position */}
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200 ">
              <label htmlFor="" className="w-[90px] pl-2 text-sm">
                Position
              </label>
              <select
                className="input-text rounded-full cursor-pointer
              "
              >
                <option value="0">Select position</option>
                <option value="1">General manager</option>
                <option value="2">Sw Engineer</option>
                <option value="3">DBA</option>
                <option value="4">Operation Engineer</option>
              </select>
            </div>
            {/* User name */}
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[90px] pl-2 text-sm">
                User name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your user name"
                className="input-text rounded-full"
              />
            </div>
            {/* Password */}
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[90px] pl-2 text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                className="input-text rounded-full"
              />
            </div>
            {/* Confirm assword */}
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[200px] pl-2 text-sm">
                Confirm password
              </label>
              <input
                type="passwordConfirm"
                name="passwordConfirm"
                id="password"
                placeholder="Confirm password"
                className="input-text rounded-full"
              />
            </div>
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[90px] pl-2 text-sm"></label>
              <button className="capitalize w-full py-1 rounded-full bg-gray-dark text-white text-sm hover:bg-gray-light-200 hover:text-white border-[1px] border-gray-dark hover:border-[1px] hover:border-gray-mid transition-all duration-200 flex items-center justify-center space-x-2">
                <IoIosSave className="text-lg" />
                <span>Register</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
