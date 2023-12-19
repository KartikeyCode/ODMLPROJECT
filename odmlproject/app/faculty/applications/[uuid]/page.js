import Sidebar from "@/components/sidebar";
import React from "react";

const page = ({ params: { uuid } }) => {
  // run a get request
  return (
    <div className=" flex bg-[#1B1919] ">
      <Sidebar />
      <div className="flex w-full justify-center items-center">
        <div className="flex flex-col">
          <h1 className="text-[50px] text-white font-semibold">
            CSE-AIML AA 1
          </h1>
          <div className="bg-[#303030] w-[782px] h-[383px] rounded-[16px] items-center flex justify-around">
            <div className="content flex justify-around flex-col w-[60%] h-[80%]">
              <h1 className="text-[40px] text-white font-semibold">
                Medical Leave
              </h1>
              <div className="date-container flex space-x-6 items-center text-[#B6B6B6] font-semibold text-[20px]">
                <p>11/2/2023-20/2/2023</p>
                <p>(8 days)</p>
              </div>
              <div className="text-[18px] text-white font-bold">
                RAXXXXXXXXXXXXX
              </div>
              <div className="reason text-white text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet
                pretium sit odio non. Aenean dolor, ullamcorper amet dolor
                donec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aliquet pretium sit odio non. Aenean dolor, ullamcorper amet
                dolor donec.
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4">
              {" "}
              <div className="buttons flex justify-between space-x-4">
                <div className="text-white bg-[#E13636] justify-center items-center flex px-4 py-1 rounded-md">
                  Reject
                </div>
                <div className="text-white bg-[#0FA958] justify-center items-center flex px-4 py-1 rounded-md">
                  Approve
                </div>
              </div>
              <div className="w-[130px] h-[170px] bg-[#D9D9D9]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
