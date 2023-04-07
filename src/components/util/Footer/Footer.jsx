import React from "react";
// Icons
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsTelephone,
} from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { GoLocation, GoMail } from "react-icons/go";
const Footer = () => {
  return (
    <div className="bg-gray-mid p-4" id="footer">
      <div className="container">
        {/* Section title */}
        <h1 className="text-lg text-white">Contact us</h1>
        {/* Section details */}
        <div className="flex items-start justify-between my-4 pl-4 flex-wrap-reverse md:flex-nowrap">
          {/* data */}
          <div className="w-full md:w-[50%] text-sm  text-white flex flex-col space-y-6 mt-12">
            <div className="flex items-start space-x-4">
              <div className="text-lg text-title-gray">
                <GoLocation />
              </div>
              {/* Address */}
              <div className="flex flex-col space-y-2">
                <h2>New Damietta</h2>
                <h2>Central Region</h2>
                <h2>Behind Dameitta stadium</h2>
              </div>
            </div>

            {/* Telephone */}
            <div className="flex items-center space-x-4">
              <div className="text-lg text-title-gray">
                <BsTelephone />
              </div>
              <p>057 - 12345678</p>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="text-lg text-title-gray">
                <GoMail />
              </div>
              <p>damietta-branch@incometax.gov</p>
            </div>
            {/* Social icons */}
            <div>
              {/* icon */}
              <div className="flex items-center space-x-4 text-2xl w-full h-[100px]">
                <BsFacebook className="social-icon" />
                <BsInstagram className="social-icon" />
                <BsYoutube className="social-icon" />
                <BsTwitter className="social-icon" />
              </div>
            </div>
          </div>
          {/* form */}
          <div className="w-full md:w-[40%] px-4 md:px-10">
            <form action="" className="flex flex-col space-y-4">
              {/* name */}
              <div className="flex  flex-col items-start space-y-2 text-white">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  className="input-text rounded-full"
                />
              </div>
              {/* office */}
              <div className="flex  flex-col items-start space-y-2 text-white">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Office
                </label>
                <input
                  type="text"
                  name="office"
                  placeholder="Enter your name"
                  className="input-text rounded-full"
                />
              </div>
              {/* subject */}
              <div className="flex  flex-col items-start space-y-2 text-white">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  name="office"
                  placeholder="Enter your name"
                  className="input-text rounded-full"
                />
              </div>
              {/* details */}
              <div className="flex  flex-col items-start space-y-2 text-gray-mid">
                <label htmlFor="" className="w-[90px] pl-2 text-sm">
                  details
                </label>
                <textarea
                  name="subject"
                  id="subject"
                  rows={4}
                  placeholder="Enter the message subject"
                  className="details rounded-t-xl"
                />
              </div>
              {/* send button */}
              <div className="flex">
                {/* <label htmlFor=""></label> */}
                <button className="w-full bg-title-gray h-8 hover:bg-gray-dark hover:text-white transition-all duration-200 text-red-dark font-semibold rounded-b-3xl flex items-center justify-center space-x-2">
                  <FiSend />
                  <span>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
