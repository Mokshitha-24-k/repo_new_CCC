import React from "react";
import PerformanceSummary from "./PerformanceSummary/PerformanceSummary";
// import UpcomingClasses from "./UpcomingClasses";
// import TotalCoursesTable from "./TotalCoursesTable";
// import StatsSidebar from "./StatsSidebar";

const BodyDashboardMain = () => {
  return (
    <div style={{ display: "flex", padding: "20px", gap: "20px" }}>
      
      <div style={{ flex: 2, display: "flex", flexDirection: "column", gap: "20px" }}>
        <PerformanceSummary />
        {/* <UpcomingClasses />
        <TotalCoursesTable /> */}
      </div>

      
      {/* <div style={{ flex: 1 }}>
        <StatsSidebar />
      </div> */}
    </div>
  );
};

export default BodyDashboardMain;
