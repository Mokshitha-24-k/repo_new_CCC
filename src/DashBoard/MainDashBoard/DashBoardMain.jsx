import React from "react";
import NavDashBoard from "../NavDashBoard/NavDashBoard";
import BodyDashboardMain from "../BodyDashBoard/BodyDashBoardMain";

const DashBoardMain = () => {
  return (
    <div>
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex:2 }}>
      <NavDashBoard />
    </div>
  
    <div style={{ zIndex:1 }}>
      <BodyDashboardMain />
    </div>
  </div>
  
  );
};

export default DashBoardMain;
