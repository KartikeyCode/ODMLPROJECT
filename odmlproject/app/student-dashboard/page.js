import OdCard from "@/components/student/odCards";
import StudentNavbar from "@/components/student/studentNavbar";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <StudentNavbar />
      <div className="flex items-center justify-around">
        <div className="flex flex-col space-y-5 items-center">
          <div className="overflow-y-scroll overflow-x-hidden md:p-5 flex flex-col mt-[50px] md:justify-between space-y-5 md:w-[750px] md:items-center md:h-[600px]">
            <OdCard title={"Test"} status={0} />
            <OdCard title={"Test"} status={1} />
            <OdCard title={"Test"} status={2} />
            <OdCard title={"Test"} status={2} />
            <OdCard title={"Test"} status={2} />
            <OdCard title={"Test"} status={2} />
          </div>
          <Link href={"/draft"}>
            <div className="md:w-[721px] md:h-[120px] rounded-[10px] border border-[#DFCE4B] md:p-5 flex flex-col justify-center">
              <h1 className="text-[#DFCE4B] md:text-[30px]">+ Draft OD/ML</h1>
            </div>
          </Link>
        </div>
        <div className="bg-gray-400 h-[500px] w-[500px]">
          placeholder for statistics from recharts
        </div>
      </div>
    </main>
  );
};

export default page;
