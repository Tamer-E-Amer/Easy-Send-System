import React from "react";
// Components
import { WelcomeBar, DashbardNav } from "../../components";

const Dashboard = () => {
  return (
    <>
      {/* Welcome bar */}
      <WelcomeBar />
      {/* Dashboard body */}
      <div className="container p-4 h-screen ">
        {/* Left menu */}
        <DashbardNav />
      </div>
    </>
  );
};

export default Dashboard;
