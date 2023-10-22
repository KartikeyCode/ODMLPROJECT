import React from "react";
import { DashboardCard } from "./dashboardCard";

export const MainDashboard = () => {
  return (
    <div className="bg-[#303030] w-[487px] h-[492px] rounded-[16px]">
      <div className="header flex justify-between p-5">
        <h2 className="text-dashboard text-[16px] font-semibold">
          Pending Applications
        </h2>
        <p className="text-highlight text-[12px] font-bold">See All</p>
      </div>
      <div className="application-container flex flex-col items-center space-y-4">
        <DashboardCard title={"Headline Label"} status={"Status"} />
        <DashboardCard title={"Headline Label"} status={"Status"} />
        <DashboardCard title={"Headline Label"} status={"Status"} />
        <DashboardCard title={"Headline Label"} status={"Status"} />
      </div>
    </div>
  );
};
