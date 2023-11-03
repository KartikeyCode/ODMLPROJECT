import Sidebar from "@/components/sidebar";
import { ApplicationCount } from "@/components/student/applicationCount";
import { MainDashboard } from "@/components/student/mainDashboard";
import Image from "next/image";

export default function StudentDashboard() {
  let username = "Vedant Utage";
  return (
    <div className="flex bg-[#1B1919] ">
      <Sidebar />
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col">
          <div className="text-white font-semibold -space-y-7 mb-5 text-[65px]">
            <h1 className="welcome-text">Welcome</h1>
            <h1 className="welcome-text">{username} 🪴</h1>
          </div>
          <div className="flex gap-10">
            <MainDashboard />
            <div className="flex justify-between flex-col">
              <ApplicationCount />
              <div className="flex items-center justify-end w-full text-right">
                <div className="p-4 text-white text-[16px] font-medium flex flex-col items-end">
                  <p className="py-4">
                    <span className="text-[22px]">+</span> New Application
                  </p>
                  <div className="border w-[88px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
