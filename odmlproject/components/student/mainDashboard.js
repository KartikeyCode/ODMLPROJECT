import React from "react";
import { DashboardCard } from "./dashboardCard";

export const MainDashboard = () => {
  return (
    <div className="bg-[#303030] w-[487px] h-[492px] rounded-[16px]">
      <div className="header flex justify-between p-5">
        <h2 className="text-[#D6D6D9] text-[16px] font-semibold">
          Pending Applications
        </h2>
        <p className="text-[#4C6FFF] text-[12px] font-bold">See All</p>
      </div>
      <div className="application-container overflow-auto flex flex-col items-center space-y-4">
        <DashboardCard title={"Headline Label"} status={"Status"} />
        <DashboardCard title={"Headline Label"} status={"Status"} />
        <DashboardCard title={"Headline Label"} status={"Status"} />
        <DashboardCard title={"Headline Label"} status={"Status"} />
      </div>
    </div>
  );
};
