import React from "react";
// import Icon from "./Icon.jsx";
// import { depData } from "../../../data/layoutText";
import { gteDepartmentData } from "./../../../functions/homFunctions";
const MenuIcons = () => {
  const icons = gteDepartmentData("icons");
  // const departments = depData.map((dep) => {
  //   return <Icon key={dep.id} dep={dep} />;
  // });
  return (
    <div className="bg-red-dark p-4">
      {/* Icons container */}
      <div className="container flex items-center sm:justify-center spax-x-2 px-4 overflow-auto">
        {/* Icon component */}
        {icons}
      </div>
    </div>
  );
};

export default MenuIcons;
