import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
const Login = () => {
  return (
    <div className="login  h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="container p-4 flex items-center justify-center">
        {/*  form container */}
        <div className="flex items-center justify-center bg-gray-light-100 bg-opacity-70 w-full lg:w-2/3 py-20 px-4 md:p-20 rounded-3xl  shadow-lg relative">
          {/* Avatar */}
          <img
            src="/imgs/avatar.png"
            alt=""
            className="w-16 md:w-20 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          {/* login form */}
          <form
            action=""
            className="w-full sm:w-2/3 lg:w-1/2  flex flex-col space-y-4 justify-center"
          >
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[90px] pl-2 text-sm">
                User name
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter your use name"
                className="input-text rounded-full"
              />
            </div>
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[90px] pl-2 text-sm">
                Password
              </label>
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Enter password"
                className="input-text rounded-full"
              />
            </div>
            <div className="flex  flex-col items-start space-y-2 text-gray-light-200">
              <label htmlFor="" className="w-[90px] pl-2 text-sm"></label>
              <button className="capitalize w-full py-1 rounded-full bg-red-dark text-white text-sm hover:bg-gray-mid hover:text-white border-[1px] border-red-dark hover:border-[1px] hover:border-gray-mid transition-all duration-200 flex items-center justify-center space-x-2">
                <AiOutlineLogin className="text-sm" />
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
