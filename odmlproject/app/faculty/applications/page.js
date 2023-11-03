import { ApplicationCard } from "@/components/faculty/applicationCard";
import Sidebar from "@/components/sidebar";
import React from "react";

const page = () => {
  // todo: make the sidebar a layout
  return (
    <div className=" flex bg-[#1B1919] ">
      <Sidebar />
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col">
          <ApplicationCard type={"Medical Leave"} days={8} />
        </div>
      </div>
    </div>
  );
};

export default page;
