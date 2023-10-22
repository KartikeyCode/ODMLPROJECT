import Sidebar from "@/components/sidebar";
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
            <div className="bg-[#303030] w-[487px] h-[492px] rounded-[16px]">
              <div className="header flex justify-between p-5">
                <h2 className="text-dashboard text-[16px] font-semibold">
                  Pending Applications
                </h2>
                <p className="text-highlight text-[12px] font-bold">See All</p>
              </div>
            </div>
            <div className="flex justify-between flex-col">
              <div className="number-of-applications w-[277px] h-[223px] bg-[#303030] rounded-[16px]"></div>
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
