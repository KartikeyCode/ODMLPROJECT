import OdCard from "@/components/student/odCards";
import StudentNavbar from "@/components/student/studentNavbar";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <StudentNavbar />
      <div className="">
        <OdCard title={"Test"} status={0} />
        <OdCard title={"Test"} status={1} />
        <OdCard title={"Test"} status={2} />
      </div>
    </main>
  );
};

export default page;
