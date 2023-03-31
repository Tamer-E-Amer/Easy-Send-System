import React from "react";

const PageImgHeader = ({ title }) => {
  return (
    <>
      <div className="w-full h-16 md:h-24 bg-[url('/imgs/add-data.png')] bg-no-repeat bg-cover flex items-center justify-end sm:justify-center font-semibold text-lg text-gray-mid px-8">
        {title}
      </div>
    </>
  );
};

export default PageImgHeader;
