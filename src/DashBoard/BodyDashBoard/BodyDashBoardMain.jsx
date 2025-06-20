import React from "react";
import PerformanceSummary from "./PerformanceSummary/PerformanceSummary";
import CarouselPage from "./Carousel/CarouselPage";
import FAQ_Accordian from "./Accordian/FAQ_Accordian";
import TotalCoursesTable from "./TotalCoursesTable";
import UpcomingClasses from "./UpcomingClasses";

const BodyDashboardMain = () => {
  return (
    <div >
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "20px", alignItems:"center"}}>
      
      <CarouselPage />

     
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <PerformanceSummary />
        <UpcomingClasses />
        <TotalCoursesTable />
      </div>
      
      <div style={{margin:"100px", width:"100%"}}>
         <FAQ_Accordian />
      </div>
    </div>
    </div>
  );
};

export default BodyDashboardMain;
