import React from "react";

export const ApplicationCount = () => {
  let totalApplications = 10;
  let pendingApplications = 5;
  let approvedApplications = 5;
  return (
    <div className="number-of-applications w-[277px] h-[223px] bg-[#303030] rounded-[16px] flex flex-col justify-center items-center">
      <div className="number-container flex justify-center space-x-2 items-center">
        <div className="text-white text-[20px] font-semibold">
          <p>Total</p>
          <p>Number of</p>
          <p>Applications</p>
        </div>
        <div className="text-white text-[80px]">{totalApplications}</div>
      </div>
      <div className="types-container justify-center space-x-5 flex">
        <div className="bg-[#E4ECF7] font-semibold rounded-[5px] w-[90px] flex justify-center items-center text-center h-[30px] text-[#505780]">
          Pending {pendingApplications}
        </div>
        <div className="bg-[#4C6FFF] font-semibold flex justify-center items-center rounded-[5px] w-[100px] h-[30px] p-1 text-center">
          Approved {approvedApplications}
        </div>
      </div>
    </div>
  );
};
