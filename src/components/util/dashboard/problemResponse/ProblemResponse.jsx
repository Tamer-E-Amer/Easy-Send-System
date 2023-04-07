import React from "react";

const ProblemResponse = () => {
  return (
    <>
      {/* response header */}
      <div className="flex items-center justify-between md:justify-start md:space-x-20 mb-4 ">
        {/* user */}
        <div className="flex items-center space-x-2">
          {/* avatar */}
          <img src="/imgs/avatar.png" alt="avatar" className="w-10 h-10" />
          {/* name */}
          <div className="">
            <h3 className="text-sm text-gray-mid">John Doe</h3>
            <h4 className="text-xs text-title-gray">Operation specialist</h4>
          </div>
        </div>
        {/* date */}
        <h3 className="text-xs  text-gray-mid font-semibold">01-03-2023</h3>
      </div>
      {/* response data */}
      <div className="flex flex-col justify-center space-y-4 lg:flex-row lg:space-x-4 lg:items-center lg:justify-between lg:space-y-0 ">
        {/* message */}
        <p className="text-xs text-gray-mid text-justify w-full lg:w-1/2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, quas
          quasi, pariatur temporibus consectetur at unde magni voluptatum facere
          vitae voluptas asperiores non expedita nihil error ut harum iure
          recusandae?
        </p>
        {/* attachments*/}
        <div className="flex items-start justify-center space-x-2">
          <div className="w-8 h-8 bg-red-dark flex items-center justify-center rounded-full text-white cursor-pointer">
            1
          </div>
          <div className="w-8 h-8 bg-red-dark flex items-center rounded-full justify-center text-white cursor-pointer ">
            2
          </div>
          <div className="w-8 h-8 bg-red-dark flex items-center justify-center rounded-full text-white cursor-pointer">
            3
          </div>
        </div>
      </div>
      <hr className="h-0 border-[1px] border-title-gray my-6" />
    </>
  );
};

export default ProblemResponse;
