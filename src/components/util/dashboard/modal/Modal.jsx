import React from "react";

const Modal = ({ children, title, closeModal }) => {
  const closeModelWithBgClick = (e) => {
    if (e.target.id === "easysendModal") {
      console.log("Modal is closed");
      closeModal();
    }
  };
  return (
    <>
      <div
        id="easysendModal"
        className="p-4 w-full h-[400px] bg-slate-400/80 absolute bottom-0 left-0"
        onClick={closeModelWithBgClick}
      >
        {/* modal header */}
        <div className="p-4 mb-4 text-left md:text-center bg-gray-mid relative">
          <div
            onClick={closeModal}
            className="h-8 w-8 flex items-center justify-center rounded-full border-[1px] bg-white text-red-dark text-lg absolute right-5 cursor-pointer hover:bg-red-dark hover:text-white"
          >
            X
          </div>
          <h3 className="text-sm md:text-lg text-white ">{title}</h3>
        </div>
        {/* modal body */}
        {children}
      </div>
    </>
  );
};

export default Modal;
