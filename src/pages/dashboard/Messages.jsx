import React from "react";
import {
  DashbardNav,
  MessageTable,
  PageImgHeader,
  WelcomeBar,
} from "../../components";

const Messages = () => {
  return (
    <>
      {/* Welcome bar */}
      <WelcomeBar />
      <div className="container  p-4  flex  items-start md:space-x-4 ">
        {/* Left menu */}
        <DashbardNav />
        {/* message details*/}
        <div className="w-full bg-gray-light-100 p-0  md:rounded-r-3xl  overflow-hidden">
          {/* Heder Image */}
          <PageImgHeader title="Messages" />
          <div className="p-4 ">
            {/* messages tablle */}
            <div className="bg-white flex items-start w-full px-4 py-8 mb-4 overflow-auto">
              <MessageTable />
            </div>
            {/* message Preview */}
            <div className="bg-white flex items-center justify-center w-full px-4 py-8  md:rounded-br-3xl">
              message Proview
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
