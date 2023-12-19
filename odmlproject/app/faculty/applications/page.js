import { ApplicationCard } from "@/components/faculty/applicationCard";
import Sidebar from "@/components/sidebar";
import React from "react";

const page = ({ params: { uuid } }) => {
  // todo: make the sidebar a layout
  // ! issue: cards being compressed
  return (
    <div className=" flex bg-[#1B1919] ">
      <Sidebar />
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-[50px] text-white font-semibold">
            CSE-AIML AA 1
          </h1>
          <div className="overflow-auto justify-between items-center h-[30rem] flex flex-col">
            <ApplicationCard type={"Medical Leave"} days={8} />
            <ApplicationCard type={"Medical Leave"} days={8} />
            <ApplicationCard type={"Medical Leave"} days={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
